import React from 'react';
import styles from './staff-profiles.module.css';

const StaffProfiles: React.FC = () => {
    // Dummy staff profile data
    const staffProfiles = [
        { id: 1, name: 'John Doe', position: 'Waiter', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', position: 'Chef', email: 'jane@example.com' },
        { id: 3, name: 'Mike Johnson', position: 'Bartender', email: 'mike@example.com' },
        { id: 4, name: 'Alice Brown', position: 'Hostess', email: 'alice@example.com' },
        { id: 5, name: 'David Lee', position: 'Busser', email: 'david@example.com' },
        { id: 6, name: 'Sarah Taylor', position: 'Sous Chef', email: 'sarah@example.com' },
        { id: 7, name: 'Robert Wilson', position: 'Server', email: 'robert@example.com' },
        { id: 8, name: 'Emily Clark', position: 'Bartender', email: 'emily@example.com' },
        { id: 9, name: 'Michael Garcia', position: 'Chef', email: 'michael@example.com' },
        { id: 10, name: 'Jessica Martinez', position: 'Waiter', email: 'jessica@example.com' }
    ];

    return (
        <div className={styles['staff-profiles-container']}>
            <h2>Staff Profiles</h2>
            <div className={styles['profile-grid']}>
                {staffProfiles.map(profile => (
                    <div key={profile.id} className={styles['staff-profile']}>
                        <strong>{profile.name}</strong>
                        <span>{profile.position}</span>
                        <span>{profile.email}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaffProfiles;