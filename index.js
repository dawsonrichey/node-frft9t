// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./chinook.db');

//Retrieving All Rows
db.all('SELECT EmployeeId, FirstName FROM employees', (error, rows) => {
  rows.forEach((row) => {
    console.log(row.EmployeeId + ' ' + row.FirstName);
  });
});

//Retrieving A Single Row
db.get('SELECT EmployeeId, FirstName FROM employees', (error, row) => {
  console.log(row.EmployeeId + ' ' + row.FirstName);
});

//Retrieving Data Based on Placeholder
db.all(
  'SELECT EmployeeId, FirstName FROM employees where title=$title',
  {
    $title: 'Sales Support Agent',
  },
  (error, rows) => {
    rows.forEach((row) => {
      console.log(row.EmployeeId + ' ' + row.FirstName);
    });
  }
);

//Executing run() Method
db.run(`INSERT INTO playlists(Name) VALUES(?)`, ['Rock'], function (error) {
  console.log('New playlist added with id ' + this.lastID);
});
// const sqlite3 = require('sqlite3').verbose();

// // open the database
// let db = new sqlite3.Database('mydb.db', sqlite3.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the chinook database.');
// });

// db.serialize(() => {
//   db.each(
//     `SELECT PlaylistId as id,
//                   Name as name
//            FROM playlists`,
//     (err, row) => {
//       if (err) {
//         console.error(err.message);
//       }
//       console.log(row.id + '\t' + row.name);
//     }
//   );
// });

// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });
