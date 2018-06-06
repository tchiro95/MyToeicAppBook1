var WebSqlDB = function(successCallback, errorCallback) {
	"use strict";
    this.initializeDatabaseUser = function(successCallback, errorCallback) {

        // This here refers to this instance of the webSqlDb
        var self = this;

        // Open/create the database
        this.db = window.openDatabase("NULLDB", "1.0", "Null Demo DB", 100000);
        
        // WebSQL databases are tranaction based so all db querying must be done within a transaction
        this.db.transaction(
                function(tx) {
                    self.createTableUser(tx);
                    //self.addSampleDataUser(tx);
                },
                function(error) {
                    if (errorCallback){
                        errorCallback();
                    }
                },
                function() {
                    self.findById(1,usrdbCallback);
                }
        );
    };

    this.initializeDatabaseUser_fetchError = function(successCallback, errorCallback) {

        // This here refers to this instance of the webSqlDb
        var self = this;

        // Open/create the database
        this.db = window.openDatabase("NULLDB", "1.0", "Null Demo DB", 100000);
        
        // WebSQL databases are tranaction based so all db querying must be done within a transaction
        this.db.transaction(
                function(tx) {
                    tx.executeSql('DROP TABLE IF EXISTS userData');
                    self.createTableUser(tx);
                    self.addSampleDataUser(tx);
                },
                function(error) {
                    if (errorCallback) {errorCallback();}
                },
                function() {
                    if (successCallback){self.findById(1,usrdbCallback);}
                }
        );
    };

    this.createTableUser = function(tx) {
        // This can be added removed/when testing
        
        var sql = "CREATE TABLE IF NOT EXISTS userData ( " +
            "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
            "mode ," +
            "part ," +
            "lastquiz ," + 
            "choices ," + 
            "Mchoices ," + 
            "setting1 ," + 
            "setting2 ," + 
            "ReadingTxt ," +  
            "timer ," + 
            "lstlgin)";
        tx.executeSql(sql, null,
                function() {            // Success callback
                },
                function(tx, error) {   // Error callback
                    alert('Create table error: ' + error.message);
                });
    };

    this.addSampleDataUser = function(tx) {
        
        // Array of objects
        var todos = [
                {"id":1, "mode": "Mogi", "part":1, "lastquiz":0, "choices":"", "Mchoices":"", "setting1":0, "setting2":0, "ReadingTxt":1, "timer":75, "lstlgin":170101}
            ];

        var l = todos.length;

        var sql = "INSERT OR REPLACE INTO userData " +
            "(id, mode, part, lastquiz, choices, Mchoices, setting1, setting2, ReadingTxt, timer, lstlgin)" +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        var t;

        // Loop through sample data array and insert into db
        for (var i = 0; i < l; i++) {
            t = todos[i];
            tx.executeSql(sql, [t.id, t.mode, t.part, t.lastquiz, t.choices, t.Mchoices, t.setting1, t.setting2, t.ReadingTxt, t.timer, t.lstlgin],
                    function() {            // Success callback
                    },
                    function(tx, error) {   // Error callback
                        alert('INSERT error: ' + error.message);
                    });
        }

    };

    this.findAll = function(callback) {
        
        this.db.transaction(
            function(tx) {
                var sql = "SELECT * FROM userData";

                tx.executeSql(sql, [], function(tx, results) {
                    var len = results.rows.length,
                        todos = [],
                        i = 0;

                    // Semicolon at the start is to skip the initialisation of vars as we already initalise i above.
                    for (; i < len; i = i + 1) {
                        todos[i] = results.rows.item(i);
                    }

                    // Passes a array with values back to calling function
                    callback(todos);
                });
            },
            function(error) {
                alert("Transaction Error findAll: " + error.message);
            }
        );
    };

    this.findById = function(id, callbackSuccess) {
        var self = this;
        this.db.transaction(
            function(tx) {
                var sql = "SELECT * FROM userData WHERE id=?";

                tx.executeSql(sql, [id], function(tx, results) {

                    // This callback returns the first results.rows.item if rows.length is 1 or return null
                    if(results.rows.length === 1){
                        callbackSuccess(results.rows.item(0));
                    }else{
                        console.log("findbyiderror");
                        //self.initializeDatabaseUser_fetchError();
                    }
                });
            },
            function(error) {
            }
        );
    };

    this.markCompleted = function(id, callback) {

        this.db.transaction(
            function (tx) {

                var sql = "UPDATE userData SET status=1 WHERE id=?";

                tx.executeSql(sql, [id], function(tx, result) {

                    // If results rows return true
                    callback(result.rowsAffected === 1 ? true : false);
                });
            }
        );
    };

    this.markOutstanding = function(id, callback) {

        this.db.transaction(
            function (tx) {

                var sql = "UPDATE userData SET status=0 WHERE id=?";

                tx.executeSql(sql, [id], function(tx, result) {

                    // If results rows return true
                    callback(result.rowsAffected === 1 ? true : false);
                });
            }
        );
    };

    this.insert = function(json, callback) {

        // Converts a JavaScript Object Notation (JSON) string into an object.
        var parsedJson = JSON.parse(json),
            status = 0;
        
        // Kept for for debuging

        this.db.transaction(
           function (tx) {

                var sql = "INSERT INTO userData (title, description, status) VALUES (?, ?, ?)";

                tx.executeSql(sql, [parsedJson.title, parsedJson.description, status], function(tx, result) {

                    // If results rows
                    callback(result.rowsAffected === 1 ? true : false);
                });
            }
        );
    };

    this.update = function(key, value, callback) {

        // Converts a JavaScript Object Notation (JSON) string into an object.
        this.db.transaction(
            function (tx) {

                var sql = 'UPDATE userData SET ' + key + '=? WHERE id=?';

                tx.executeSql(sql, [value, 1], function(tx, result) {

                    // If results rows
                    callback();

                    // Kept for debugging
                },
                function(tx,error) {
                    alert("Transaction Error: " + error.message);
                }
            );
            }
        );
    };

    this.delete = function(json, callback) {

        // Converts a JavaScript Object Notation (JSON) string into an object.
        //var parsedJson = JSON.parse(json);

        this.db.transaction(
            function (tx) {

                var sql = "DELETE FROM userData WHERE id=1";

                tx.executeSql(sql, [parsedJson.id], function(tx, result) {

                    // If results rows
                    callback(result.rowsAffected === 1 ? true : false);
                });
            }
        );
    };
   
    this.initializeDatabaseUser(successCallback, errorCallback);
};


var WebSqlDBQuiz = function(successCallback, errorCallback) {
    "use strict";
    this.initializeDatabaseQuiz = function(successCallback, errorCallback) {

        // This here refers to this instance of the webSqlDb
        var self = this;

        // Open/create the database
        this.db = window.openDatabase("NULLDB", "1.0", "Null Demo DB", 100000);
        
        // WebSQL databases are tranaction based so all db querying must be done within a transaction
        this.db.transaction(
                function(tx) {
                    self.createTableQuiz(tx);
//                  self.addSampleDataQuiz(tx);
                },
                function(error) {
                    if (errorCallback){errorCallback();}
                },
                function() {
                    if (successCallback){successCallback();}
                    self.findAll(dbCallbackQuiz);
                }
        );
    };
    this.initializeDatabaseQuiz_fetchError = function(successCallback, errorCallback) {

        // This here refers to this instance of the webSqlDb
        var self = this;

        // Open/create the database
        this.db = window.openDatabase("NULLDB", "1.0", "Null Demo DB", 100000);
        
        // WebSQL databases are tranaction based so all db querying must be done within a transaction
        this.db.transaction(
                function(tx) {
                    self.createTableQuiz(tx);
                    self.addSampleDataQuiz(tx);
                },
                function(error) {
                    if (errorCallback){errorCallback();}
                },
                function() {
                    if (successCallback){successCallback();}
                    self.findAll(dbCallbackQuiz);
                }
        );
    };

    this.createTableQuiz = function(tx) {
        // This can be added removed/when testing
        //tx.executeSql('DROP TABLE IF EXISTS F');
        
        var sql = "CREATE TABLE IF NOT EXISTS quizData ( " +
            "Qnum INTEGER PRIMARY KEY AUTOINCREMENT, " +
            "checkmark ," +
            "part)";
        tx.executeSql(sql, null,
                function() {            // Success callback
                },
                function(tx, error) {   // Error callback
                    alert('Create table error: ' + error.message);
                });
    };

    this.addSampleDataQuiz = function(tx) {
        
        // Array of objects

        var sql = "INSERT OR REPLACE INTO quizData " +
            "(Qnum, checkmark, part)" +
            "VALUES (?, ?, ?)";
        var t;

        // Loop through sample data array and insert into db
        for (var i = 1; i <= 200; i++) {
            tx.executeSql(sql, [i, 0, quizArray[i].Part],
                    function() {            // Success callback
                    },
                    function(tx, error) {   // Error callback
                        alert('INSERT error: ' + error.message);
                    });
        }

    };

    this.findAll = function(callbackSuccess) {
        var self = this;
        
        this.db.transaction(
            function(tx) {
                var sql = "SELECT * FROM quizData";

                tx.executeSql(sql, [], function(tx, results) {
                    var len = results.rows.length,
                        todos = [],
                        i = 0;
                    if(len > 0){
                        // Semicolon at the start is to skip the initialisation of vars as we already initalise i above.
                        for (; i < len; i = i + 1) {
                            todos[i] = results.rows.item(i);
                        }

                        // Passes a array with values back to calling function
                        callbackSuccess(todos);
                    }else{
                        self.initializeDatabaseQuiz_fetchError();
                    }
                });
            },
            function(error) {
            }
        );
    };

    this.findById = function(id, callback) {
        
        this.db.transaction(
            function(tx) {

                var sql = "SELECT * FROM quizData WHERE Qnum=?";

                tx.executeSql(sql, [id], function(tx, results) {

                    // This callback returns the first results.rows.item if rows.length is 1 or return null
                    callback(results.rows.length === 1 ? results.rows.item(0) : null);
                });
            },
            function(error) {
                alert("Transaction Error: " + error.message);
            }
        );
    };

    this.markCompleted = function(id, callback) {

        this.db.transaction(
            function (tx) {

                var sql = "UPDATE quizData SET status=1 WHERE Qnum=?";

                tx.executeSql(sql, [id], function(tx, result) {

                    // If results rows return true
                    callback(result.rowsAffected === 1 ? true : false);
                });
            }
        );
    };

    this.markOutstanding = function(id, callback) {

        this.db.transaction(
            function (tx) {

                var sql = "UPDATE quizData SET status=0 WHERE Qnum=?";

                tx.executeSql(sql, [id], function(tx, result) {

                    // If results rows return true
                    callback(result.rowsAffected === 1 ? true : false);
                });
            }
        );
    };

    this.insert = function(json, callback) {

        // Converts a JavaScript Object Notation (JSON) string into an object.
        var parsedJson = JSON.parse(json),
            status = 0;
        
        // Kept for for debuging
        this.db.transaction(
           function (tx) {

                var sql = "INSERT INTO quizData (title, description, status) VALUES (?, ?, ?)";

                tx.executeSql(sql, [parsedJson.title, parsedJson.description, status], function(tx, result) {

                    // If results rows
                    callback(result.rowsAffected === 1 ? true : false);
                });
            }
        );
    };

    this.update = function(key, value, callback) {

        // Converts a JavaScript Object Notation (JSON) string into an object.

        this.db.transaction(
            function (tx) {

                var sql = "UPDATE quizData SET checkmark=? WHERE Qnum=?";

                tx.executeSql(sql, [value, key], function(tx, result) {
                   // if(value === 0){ }else{ }
                   // If results rows
                   if (callback){callback();}

                    // Kept for debugging
                },
                function(tx,error) {
                    alert("Transaction Error: " + error.message);
                }
                );
            }
        );
    };

    this.delete = function(json, callback) {

        // Converts a JavaScript Object Notation (JSON) string into an object.
        var parsedJson = JSON.parse(json);

        this.db.transaction(
            function (tx) {

                var sql = "DELETE FROM quizData WHERE Qnum=?";

                tx.executeSql(sql, [parsedJson.id], function(tx, result) {

                    // If results rows
                    callback(result.rowsAffected === 1 ? true : false);
                });
            }
        );
    };

    this.initializeDatabaseQuiz(successCallback, errorCallback);
};


var WebSqlDBScore = function(successCallback, errorCallback) {
    "use strict";

    this.initializeDatabaseUser = function(successCallback, errorCallback) {

        // This here refers to this instance of the webSqlDb
        var self = this;

        // Open/create the database
        this.db = window.openDatabase("NULLDB", "1.0", "Null Demo DB", 200000);
        
        // WebSQL databases are tranaction based so all db querying must be done within a transaction
        this.db.transaction(
                function(tx) {
                    self.createTableUser(tx);
//                  self.addSampleDataUser(tx);
                },
                function(error) {
                    if (errorCallback){errorCallback();}
                },
                function() {
                    if (successCallback){self.findAll(scrdbCallback);}
                }
        );
    };

    this.initializeDatabaseUser_fetchError = function(successCallback, errorCallback) {

        // This here refers to this instance of the webSqlDb
        var self = this;

        // Open/create the database
        this.db = window.openDatabase("NULLDB", "1.0", "Null Demo DB", 100000);
        
        // WebSQL databases are tranaction based so all db querying must be done within a transaction
        this.db.transaction(
                function(tx) {
                    self.createTableUser(tx);
                    self.addSampleDataUser(tx);
                },
                function(error) {
                    if (errorCallback){errorCallback();}
                },
                function() {
                    if (successCallback){self.findAll(scrdbCallback);}
                }
        );
    };

    this.createTableUser = function(tx) {
        // This can be added removed/when testing
        //tx.executeSql('DROP TABLE IF EXISTS F');
        
        var sql = "CREATE TABLE IF NOT EXISTS scoreData ( " +
            "id INTEGER PRIMARY KEY, " +
            "mode ," +
            "part ," +
            "ans)";
        tx.executeSql(sql, null,
                function() {            // Success callback
                },
                function(tx, error) {   // Error callback
                    alert('Create table error: ' + error.message);
                });
    };

    this.addSampleDataUser = function(tx) {
        
        // Array of objects
        var todos = [
                {"id":1, "mode": "Mogi", "part":1, "lastquiz":0, "choices":"", "setting1":0, "setting2":0, "ReadingTxt":1, "timer":75}
            ];

        var l = todos.length;

        var sql = "INSERT OR REPLACE INTO scoreData " +
            "(id, mode, part, ans)" +
            "VALUES (?, ?, ?, ?)";
        var t;

        // Loop through sample data array and insert into db
        for (var i = 0; i < l; i++) {
            t = todos[i];
            tx.executeSql(sql, [t.id, t.mode, t.part, t.ans],
                    function() {            // Success callback
                    },
                    function(tx, error) {   // Error callback
                    });
        }

    };

    this.findAll = function(callback) {
        
        this.db.transaction(
            function(tx) {
                var sql = "SELECT * FROM scoreData";

                tx.executeSql(sql, [], function(tx, results) {
                    var len = results.rows.length,
                        todos = [],
                        i = 0;

                    // Semicolon at the start is to skip the initialisation of vars as we already initalise i above.
                    for (; i < len; i = i + 1) {
                        todos[i] = results.rows.item(i);
                    }

                    // Passes a array with values back to calling function
                    callback(todos);
                });
            },
            function(error) {
                alert("Transaction Error findAll: " + error.message);
            }
        );
    };

    this.findById = function(id, callbackSuccess) {
        var self = this;
        this.db.transaction(
            function(tx) {

                var sql = "SELECT * FROM scoreData WHERE id=?";

                tx.executeSql(sql, [id], function(tx, results) {

                    // This callback returns the first results.rows.item if rows.length is 1 or return null
                    if(results.rows.length === 1){
                        callbackSuccess(results.rows.item(0));
                    }else{
                        self.initializeDatabaseUser_fetchError();
                    }
                });
            },
            function(error) {
            }
        );
    };

    this.markCompleted = function(id, callback) {

        this.db.transaction(
            function (tx) {

                var sql = "UPDATE scoreData SET status=1 WHERE id=?";

                tx.executeSql(sql, [id], function(tx, result) {

                    // If results rows return true
                    callback(result.rowsAffected === 1 ? true : false);
                });
            }
        );
    };

    this.markOutstanding = function(id, callback) {

        this.db.transaction(
            function (tx) {

                var sql = "UPDATE scoreData SET status=0 WHERE id=?";

                tx.executeSql(sql, [id], function(tx, result) {

                    // If results rows return true
                    callback(result.rowsAffected === 1 ? true : false);
                });
            }
        );
    };

    this.insert = function(arr, callback) {

        // Kept for for debuging

        this.db.transaction(
           function (tx) {

                var sql = "INSERT INTO scoreData (id, mode, part, ans) VALUES (?, ?, ?, ?)";

                tx.executeSql(sql, [arr.id, arr.mode, arr.part, arr.ans], function(tx, result) {

                    // If results rows
                    callback(result.rowsAffected === 1 ? true : false);
                });
            }
        );
    };

    this.update = function(key, value, callback) {

        // Converts a JavaScript Object Notation (JSON) string into an object.
        this.db.transaction(
            function (tx) {

                var sql = 'UPDATE scoreData SET ' + key + '=? WHERE id=?';

                tx.executeSql(sql, [value, 1], function(tx, result) {

                    // If results rows
                    callback();

                    // Kept for debugging
                },
                function(tx,error) {
                    alert("Transaction Error: " + error.message);
                }
            );
            }
        );
    };

    this.delete = function(idData, callback) {

        // Converts a JavaScript Object Notation (JSON) string into an object.
        this.db.transaction(
            function (tx) {

                var sql = "DELETE FROM scoreData WHERE id=?";

                tx.executeSql(sql, [idData], function(tx, result) {
                    // If results rows
                    callback(result.rowsAffected === 1 ? true : false);
                },
                function(tx,error) {
                    alert("Transaction Error: " + error.message);
                }
            );
            }
        );
    };

    this.initializeDatabaseUser(successCallback, errorCallback);
};