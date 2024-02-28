import React from 'react';
import styles from './shift-management.module.css';

interface Shift {
    id: number;
    date: string;
    startTime: string;
    endTime: string;
    staff: string;
}

interface GroupedShifts {
    [date: string]: Shift[];
}

const ShiftManagement: React.FC = () => {
    // Dummy shift data
    const shifts: Shift[] = [
        { id: 1, date: '2024-03-01', startTime: '08:00 AM', endTime: '04:00 PM', staff: 'John Doe' },
        { id: 2, date: '2024-03-02', startTime: '08:00 AM', endTime: '04:00 PM', staff: 'Jane Smith' },
        { id: 3, date: '2024-03-03', startTime: '10:00 AM', endTime: '06:00 PM', staff: 'Mike Johnson' },
        { id: 4, date: '2024-03-01', startTime: '10:00 AM', endTime: '05:00 PM', staff: 'Alice Johnson' },
        { id: 5, date: '2024-03-02', startTime: '09:00 AM', endTime: '05:00 PM', staff: 'Bob Smith' },
        { id: 6, date: '2024-03-03', startTime: '11:00 AM', endTime: '07:00 PM', staff: 'Emily Davis' },
        { id: 7, date: '2024-03-01', startTime: '08:00 AM', endTime: '04:00 PM', staff: 'Robert Wilson' },
        { id: 8, date: '2024-03-02', startTime: '09:00 AM', endTime: '05:00 PM', staff: 'Sarah Taylor' },
        { id: 9, date: '2024-03-03', startTime: '10:00 AM', endTime: '06:00 PM', staff: 'Michael Garcia' },
        { id: 10, date: '2024-03-01', startTime: '10:00 AM', endTime: '05:00 PM', staff: 'Jessica Martinez' },
    ];
    

    // Group shifts by date
    const groupedShifts: { [key: string]: Shift[] } = shifts.reduce((acc: { [key: string]: Shift[] }, shift: Shift) => {
        const { date, ...rest } = shift;
        if (!acc[date]) {
            acc[date] = [];
        }
        // Ensure that the object being pushed includes the 'date' property
        acc[date].push({ date, ...rest });
        return acc;
    }, {});

    // Sort the dates in descending order based on date and time
    const sortedDates = Object.keys(groupedShifts).sort((a, b) => {
        const dateA = new Date(a).getTime();
        const dateB = new Date(b).getTime();
        if (dateA !== dateB) {
            return dateB - dateA; // Sort dates in descending order
        } else {
            // If dates are equal, sort shifts by start time in ascending order
            const startTimeA = new Date(groupedShifts[a][0].startTime).getTime();
            const startTimeB = new Date(groupedShifts[b][0].startTime).getTime();
            return startTimeA - startTimeB;
        }
    });

    return (
        <div className={styles.container}>
            <h2>Shift Management</h2>
            <div className={styles.scrollableContainer}>
                {sortedDates.map(date => (
                    <div key={date} className={styles.dayContainer}>
                        <h3>{date}</h3>
                        <div className={styles.shiftsContainer}>
                            {groupedShifts[date].map(shift => (
                                <div key={shift.id} className={styles.shift}>
                                    <div><strong>Start Time:</strong> {shift.startTime}</div>
                                    <div><strong>End Time:</strong> {shift.endTime}</div>
                                    <div><strong>Staff:</strong> {shift.staff}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShiftManagement;
