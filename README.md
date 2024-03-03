# restaurant-app Repository
## Clone the repository
``` bash
git clone https://github.com/JoeHn01/restaurant-app.git
```


## /backend
### Technologies used:
1. Node.js (runtime environment & library for running web apps outside the browser)
2. Express.js (minimal and flexible Node.js web application framework)
3. MongoDB (NoSQL database, utilizes JSON-like documents with optional schemas)
4. GraphQL (query language for APIs & runtime for executing queries)

### Running the back end server:
Prerequisites: Ensure you have Node.js and npm installed on your system.

1. Install Dependencies by navigating to the backend directory
``` bash
cd /backend
```
and running
``` bash
npm install
```

2. Start the server by running
``` bash
npm start
```

The server will listen on port 5000. We implemented an Apollo server plugin for running and executing graphql queries at http://localhost:5000/graphql.

## /frontend
### Technologies used:
1. React.js (UI development library for dynamic component rendering)
2. Next.js (framework for React that supports server side rendering)
3. TypeScript (superset of JavaScript with static typing)

### Running the front end server:
Prerequisites: Ensure you have Node.js and npm (or yarn) installed on your system.

1. Install Dependencies by navigating to the front end directory
``` bash
cd /backend
```
and running
``` bash
npm install
```
2. Start the server by running
``` bash
npm run dev
```
The server will listen on port 3000.