import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "Intrusion.db";
const database_version = "1.0";
const database_displayname = "Intrusion Detection SQLite Database";
const database_size = 200000;

export default class DatabaseHelper {
  initDB() {
    let db;
    return new Promise((resolve) => {
      console.log("Plugin integrity check ...");
      SQLite.echoTest()
        .then(() => {
          console.log("Integrity check passed ...");
          console.log("Opening database ...");
          SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size
          )
            .then(DB => {
              db = DB;
              console.log("Database OPEN");
              db.executeSql('SELECT 1 FROM Training LIMIT 1').then(() => {
                console.log("Database is ready ... executing query ...");
              }).catch((error) =>{
                console.log("Received error: ", error);
                console.log("Database not yet ready ... populating data");
                db.transaction((tx) => {
                  tx.executeSql('CREATE TABLE IF NOT EXISTS Training (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, date TEXT, duration TEXT, dataSize TEXT, epochs INTEGER, accuracy REAL)');
                }).then(() => {
                  console.log("Table created successfully");
                }).catch(error => {
                  console.log(error);
                });
              });
              resolve(db);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log("echoTest failed - plugin not functional");
        });
      });
  };

  closeDatabase(db) {
    if (db) {
      console.log("Closing DB");
      db.close()
        .then(status => {
          console.log("Database CLOSED");
        })
        .catch(error => {
          this.errorCB(error);
        });
    } else {
      console.log("Database was not OPENED");
    }
  };

  listTrainings() {
    return new Promise((resolve) => {
      const trainings = [];
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM Training', []).then(([tx,results]) => {
            console.log("Query completed");
            var len = results.rows.length;
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              const { id, name, date, duration, dataSize, epochs, accuracy } = row;
              trainings.push({
                id, name, date, duration, dataSize, epochs, accuracy
              });
            }
            console.log(trainings);
            resolve(trainings);
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    });  
  }

  addTraining(training) {
    return new Promise((resolve) => {
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('INSERT INTO Training (name, date, duration, dataSize, epochs, accuracy) VALUES (?, ?, ?, ?, ?, ?)', [training.name, training.date, training.duration, training.dataSize, training.epochs, training.accuracy]).then(([tx, results]) => {
            resolve(results);
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    });  
  }
}