//消したい場合はこちらを実行する。
function deleteDB(dbname){
	"use strict";
	window.indexedDB.deleteDatabase(dbname);
}

//mode:モード　part, lastquiz：前回どこで止めたか
//　choices:そのモードでの選択肢一覧模擬問題モードとかだともっと工夫が必要。
//　settng: リスニングパートを自動進行するか、と、次へを押すことで問題が遷移する
var userDataArrDefault = [
	{user:0, mode:"Mogi", part:1, lastquiz:0, choices:"", Mchoices:"", setting1:0, setting2:0, ReadingTxt:1, timer:75, lstlgin:170101 }
];

function initDB(){
	"use strict";
	var DBName = "Database";
	var dbversion = 1;

	//iosはwebSqlをつかいます。
	//if(window.indexedDB){}でもいいのかも。
	if(!navigator.userAgent.match(/(iPhone|iPad|iPod)/)){
		var db;
		var request = window.indexedDB.open(DBName,dbversion);

		request.onerror = function(event) {
				deleteDB(DBName);
				request = null;
			request = window.indexedDB.open(DBName,2);

				window.alert("Database error: " + event.target.errorCode);
		};

		request.onupgradeneeded = function(event) { 
				db = this.result;
			var store =  db.createObjectStore('RegistQuestion', { keyPath : 'Qnum'});
			store.createIndex("part", "part", {unique:false});
			store.createIndex("check", "check", {unique:false});
				db = event.target.result;
			store.transaction.oncomplete  = function(event) {
			// 新たに作成した objectStore に値を保存します。
			var customerObjectStore = db.transaction("RegistQuestion", "readwrite").objectStore("RegistQuestion");
				for (var i=1;i<=200;i++) {
		  			customerObjectStore.add({Qnum:i,check:0,part:quizArray[i].Part});
				}
			};
		//db.onversionchange = function (event) { event.target.close(); }
		};
		request.onsuccess = function(event) {
				db = event.target.result;
			var objectStore = db.transaction(["RegistQuestion"]).objectStore("RegistQuestion");
			
			var data = objectStore.getAll();
			data.onerror = function(event) {
		  		window.alert("getAll data error: " + event.target.errorCode);
			};
			//最初の段階で必要なデータを抜きます。ここでは登録問題の一覧を取得します。
			data.onsuccess = function(event) {
				var arr = event.target.result;
				setDBArray(arr);
				setMenuData(1);
			};
		};
	}else{
		quizDBOBJ =  new WebSqlDBQuiz();
	}
	//配列を問題番号からアクセスできるように並べ直します。
	function setDBArray(array){
		for(var i in array){
			if(array.hasOwnProperty(i)){
				MyPageDB[array[i].Qnum] = {check:array[i].check, part:array[i].part};
			}
		}
	}
}
	//カーソルを使って問題配列を取り出す
function getData(dbName, key,int){
	"use strict";
	var DBName = "Database";
	var dbversion = 1;
	
	
	key = ""+key;
	var Num = Number(int);

	if(!userAgent.match(/(iPhone|iPad|iPod)/)){
		var db;
		var request = window.indexedDB.open(DBName,dbversion);

		request.onerror = function(event) {
		};
		request.onsuccess = function(event) {
				db = event.target.result;
			var objectStore = db.transaction(["RegistQuestion"]).objectStore("RegistQuestion");
			//ここに引数をいれている。
			var index = objectStore.index(key);
			var singleKeyRange = IDBKeyRange.only(Num);
			index.openCursor(singleKeyRange).onerror = function(event) {
				  window.alert("making index error: " + event.target.errorCode);
			};
			var dbarray = [];
			index.openCursor(singleKeyRange).onsuccess = function(event) {
				var cursor = event.target.result;
				if(cursor){
					dbarray.push(cursor.value);
					cursor.continue();
				}else{
					return dbarray;
				}
			};
		};
	}else{
		getQuizDB();
	}
}

//個別のデータで逐一変更を反映するときはこちらでいく。
function updateData_Individual(int){
	"use strict";
	var DBName = "Database";
	var dbversion = 1;
	
	int = Number(int);
	if(!userAgent.match(/(iPhone|iPad|iPod)/)){

		var db;
		var request = window.indexedDB.open(DBName,dbversion);

		request.onerror = function(event) {
			  window.alert("Database error: " + event.target.errorCode);
		};
		request.onsuccess = function(event) {
			  db = this.result;
			var objectStore = db.transaction(["RegistQuestion"],"readwrite").objectStore("RegistQuestion");
			var storeData = objectStore.get(int);
			storeData.onerror = function(event) {
			};
			storeData.onsuccess = function(event) {
				// request.result に対して行う処理!
				var data = this.result;
				if(data.check === 0){
					data.check = 1;
					var requestUpdate = objectStore.put(data);
					requestUpdate.onerror= function(evt){
					};
					requestUpdate.onsuccess = function(evt){
						MyPageDB[int].check = 1;
					};
				}else{
					data.check = 0;
					var requestUpdate_ = objectStore.put(data);
					requestUpdate_.onerror= function(evt){
					};
					requestUpdate_.onsuccess = function(evt){
						MyPageDB[int].check = 0;
					};
				}
			};
		};
	}else{
		//ちゃんとはいってるかチェックしたい場合は上の関数をcallbackとして引数に入れる。
		if(MyPageDB[int].check === 1){
			quizDBOBJ.update(int,1);
			MyPageDB[int].check = 1;
		}else{
			quizDBOBJ.update(int,0);
			MyPageDB[int].check = 0;
		}
	}
}

var usrdbCallback = function(arr){
	"use strict";
	userDataArray = new userOBJ(arr);
	initDB();
};

var usrdbCallbackUpdate = function(arr){
	"use strict";
	var getAllUSERDATA = function(arr){
		userDataArray = new userOBJ(arr);
	};
	userDBOBJ.findById(1,getAllUSERDATA);
};


function resetDBArray(){
	"use strict";
	var dbCallbackQuiz = function(arr){
		for(var i in arr){
			if(arr.hasOwnProperty(i)){
				MyPageDB[arr[i].Qnum] = {check:arr[i].checkmark, part:arr[i].part};
			}
		}
		setMenuData(1);
	};
	quizDBOBJ.findAll(dbCallbackQuiz);
}

var DB_USER = function(){
	"use strict";
	var DBNameUser = "userData";
	var dbversion = 1;

	this.deleteDB = function(){
		window.indexedDB.deleteDatabase(DBNameUser);
	};

	//userデータのアップから初めて、次に問題一覧を取得し、それが終わったら画面を出す。
	this.initDB_user = function(){
		if(!userAgent.match(/(iPhone|iPad|iPod)/)){
			var db;
			var request = window.indexedDB.open(DBNameUser,dbversion);
			
			request.onerror = function(event) {
		  		deleteDB(DBNameUser);
		  		request = null;
				request = window.indexedDB.open(DBNameUser,1);
			};
			request.onupgradeneeded = function(event) {
		  		db = this.result;
		  		if(event.oldVersion > 1){
		  			db.deleteObjectStore("userDataSetting");
		  		}
				var store =  db.createObjectStore('userData', { keyPath : 'user'});
				store.createIndex("mode", "mode", {unique:false});
				store.createIndex("part", "part", {unique:false});
				store.createIndex("lastquiz", "lastquiz", {unique:false});
				store.createIndex("choices", "choices", {unique:false});
				store.createIndex("Mchoices", "Mchoices", {unique:false});
				store.createIndex("setting1", "setting1", {unique:false});
				store.createIndex("setting2", "setting2", {unique:false});
				store.createIndex("ReadingTxt", "ReadingTxt", {unique:false});
				store.createIndex("timer", "timer", {unique:false});
				store.createIndex("lstlgin", "lstlgin", {unique:false});
		  		db = event.target.result;
				store.transaction.oncomplete  = function(event) {
		    	// 新たに作成した objectStore に値を保存します。
		    	var customerObjectStore = db.transaction("userData", "readwrite").objectStore("userData");
		    		for (var i in userDataArrDefault) {
						if(userDataArrDefault.hasOwnProperty(i)){
						  customerObjectStore.add(userDataArrDefault[i]);
						}
					}
				};
			//db.onversionchange = function (event) { event.target.close(); }
			};
			request.onsuccess = function(event) {
		  		db = event.target.result;
				  
				var objectStore = db.transaction(["userData"]).objectStore("userData");
				var data = objectStore.getAll();
				data.onerror = function(event) {
			  		window.alert("getAll data error: " + event.target.errorCode);
				};
				//最初の段階で必要なデータを抜きます。ここでは登録問題の一覧を取得します。
				data.onsuccess = function(event) {
					var arr = event.target.result;
					userDataArray = new userOBJ(arr[0]);
					initDB();
				};
			};
		}else{
			userDBOBJ = new WebSqlDB();
		}
	};

	this.updateUserData_Individual = function(key, value, array){
		if(array === undefined || array ===""){
			array = [];
		} 
		if(!userAgent.match(/(iPhone|iPad|iPod)/)){
			var db;

			var request = window.indexedDB.open(DBNameUser,dbversion);
			var user = 0;
			request.onerror = function(event) {
		  		window.alert("Database error: " + event.target.errorCode);
			};
			request.onsuccess = function(event) {
		  		db = this.result;
				var objectStore = db.transaction(["userData"],"readwrite").objectStore("userData");
				var storeData = objectStore.get(user);
				storeData.onerror = function(event) {
				};
				storeData.onsuccess = function(event) {
					// request.result に対して行う処理!
					var data = this.result;
					if(array.length > 0){
						for(var i=0; i<array.length;i++){
							var KEY = array[i][0];
							var VALUE = array[i][1];
							data[KEY] = VALUE;
						}
					}else{
						data[key] = value;
					}
					var requestUpdate = objectStore.put(data);
					requestUpdate.onerror= function(evt){
					};
					requestUpdate.onsuccess = function(evt){
						var db2;
						var request2 = window.indexedDB.open(DBNameUser,1);
						request2.onsuccess = function(event) {
							db2 = event.target.result;
							var objectStore2 = db2.transaction(["userData"]).objectStore("userData");
			
							var data2 = objectStore2.getAll();
							data2.onsuccess = function(event) {
								var arr2 = event.target.result;
								userDataArray = new userOBJ(arr2[0]);
							};
						};			
					};
				};
			};
		}else{
			if(array.length > 0){
				for(var i=0; i<array.length;i++){
					var KEY = array[i][0];
					var VALUE = array[i][1];
					userDBOBJ.update(KEY, VALUE, usrdbCallbackUpdate);
				}
			}else{
				userDBOBJ.update(key, value, usrdbCallbackUpdate);
			}
		}
	};
	var DBName = "Database";
	function initDB(){
		deleteDB("DBQuiz");
		if(!userAgent.match(/(iPhone|iPad|iPod)/)){
			var db;
			var request = window.indexedDB.open(DBName,dbversion);
	
			request.onerror = function(event) {
				deleteDB(DBName);
				request = null;
				request = window.indexedDB.open(DBName,dbversion);
				window.alert("Database error: " + event.target.errorCode);
			};
	
			request.onupgradeneeded = function(event) { 
					db = this.result;
				var store =  db.createObjectStore('RegistQuestion', { keyPath : 'Qnum'});
				store.createIndex("part", "part", {unique:false});
				store.createIndex("check", "check", {unique:false});
					db = event.target.result;
				store.transaction.oncomplete  = function(event) {
				// 新たに作成した objectStore に値を保存します。
				var customerObjectStore = db.transaction("RegistQuestion", "readwrite").objectStore("RegistQuestion");
					for (var i=1;i<=200;i++) {
						  customerObjectStore.add({Qnum:i,check:0,part:quizArray[i].Part});
					}
				};
			//db.onversionchange = function (event) { event.target.close(); }
			};
			request.onsuccess = function(event) {
					db = event.target.result;
				var objectStore = db.transaction(["RegistQuestion"]).objectStore("RegistQuestion");
				
				var data = objectStore.getAll();
				data.onerror = function(event) {
					  window.alert("getAll data error: " + event.target.errorCode);
				};
				//最初の段階で必要なデータを抜きます。ここでは登録問題の一覧を取得します。
				data.onsuccess = function(event) {
					var arr = event.target.result;
					setDBArray(arr);
					//実際のページ作成はこちらから
					setMenuData(1);
					DataBaseScore = new DB_Score();
					DataBaseScore.initDB();
				};
			};
		}else{
			quizDBOBJ =  new WebSqlDBQuiz();
		}
		//配列を問題番号からアクセスできるように並べ直します。
		function setDBArray(array){
			for(var i in array){
				if(array.hasOwnProperty(i)){
					MyPageDB[array[i].Qnum] = {check:array[i].check, part:array[i].part};
				}
			}
		}
	}
};

var dbCallbackQuiz = function(arr){
	"use strict";
	for(var i in arr){
		if(arr.hasOwnProperty(i)){
			MyPageDB[arr[i].Qnum] = {check:arr[i].checkmark, part:arr[i].part};
		}
	}
	setMenuData(1);
	DataBaseScore = new DB_Score();
	DataBaseScore.initDB();
};

var DB_Score = function(){
	"use strict";
	var DBName = "scoreData";
	var tableName = "userScore";
	var dbversion = 1;

	this.deleteDB = function(){
		window.indexedDB.deleteDatabase(DBName);
	};

	this.initDB = function(){
			//userデータのアップから初めて、次に問題一覧を取得し、それが終わったら画面を出す。
		if(!userAgent.match(/(iPhone|iPad|iPod)/)){
			var db;
			var request = window.indexedDB.open(DBName,dbversion);
			request.onerror = function(event) {
				deleteDB(DBName);
				request = null;
				request = window.indexedDB.open(DBName,dbversion);
			};
			request.onupgradeneeded = function(event) {
				db = this.result;
				if(event.oldVersion > 1){
					db.deleteObjectStore("userDataSetting");
				}
				var store =  db.createObjectStore(tableName, { keyPath : 'id'});
				store.createIndex("mode", "mode", {unique:false});
				store.createIndex("part", "part", {unique:false});
				store.createIndex("ans", "ans", {unique:false});
				db = event.target.result;
				// 新たに作成した objectStore に値を保存します。
			//db.onversionchange = function (event) { event.target.close(); }
			};
			request.onsuccess = function(event) {
				db = event.target.result;
				var objectStore = db.transaction([tableName]).objectStore(tableName);
				var dt;
				var arr = [];
				try{
					dt=objectStore.getAll();
				}
				catch(error){
					
				}
				dt.onsuccess = function(event) {
					var arr = event.target.result;
					MyScoreDB = new scoreOBJ(arr);
				};
			};
		}else{
			scoreDBOBJ = new WebSqlDBScore();
			var arr = scoreDBOBJ.findAll(function(arr){
				MyScoreDB = new scoreOBJ(arr);
			});
			//userDBOBJ = new WebSqlDB();
		}
	};

	//個別のデータで逐一変更を反映するときはこちらでいく。
	this.updateData_Score = function(arr){
		if(!userAgent.match(/(iPhone|iPad|iPod)/)){
			var db;
			var request = window.indexedDB.open(DBName,dbversion);

			request.onerror = function(event) {
			};
			request.onsuccess = function(event) {
				db = this.result;
				var objectStore = db.transaction([tableName],"readwrite").objectStore(tableName);
				// request.result に対して行う処理!
				var requestUpdate = objectStore.add(arr);
				requestUpdate.onerror= function(evt){
				};
				requestUpdate.onsuccess = function(evt){
					var db2 = event.target.result;
					var objectStore2 = db2.transaction([tableName]).objectStore(tableName);
					var data2 = objectStore2.getAll();
					data2.onsuccess = function(event) {
						var arr2 = event.target.result;
						MyScoreDB = new scoreOBJ(arr2);
					};

				};
			};
		}else{
			scoreDBOBJ.insert(arr,scrdbCallback);
			//ちゃんとはいってるかチェックしたい場合は上の関数をcallbackとして引数に入れる。
		}
	};

	//個別のデータを削除する。
	this.deleteData_Score = function(arr){
		if(!userAgent.match(/(iPhone|iPad|iPod)/)){
			var db;
			var request = window.indexedDB.open(DBName,dbversion);

			request.onerror = function(event) {
			};
			request.onsuccess = function(event) {
				db = this.result;
				var objectStore = db.transaction([tableName],"readwrite").objectStore(tableName);
				// request.result に対して行う処理!
				var requestUpdate = objectStore.delete(arr);
				requestUpdate.onerror= function(evt){
				};
				requestUpdate.onsuccess = function(evt){
					var db2 = event.target.result;
					var objectStore2 = db2.transaction([tableName]).objectStore(tableName);
					var data2 = objectStore2.getAll();
					data2.onsuccess = function(event) {
						var arr2 = event.target.result;
						MyScoreDB = new scoreOBJ(arr2);
					};

				};
			};
		}else{
			scoreDBOBJ.delete(arr,scrdbCallback);
			//ちゃんとはいってるかチェックしたい場合は上の関数をcallbackとして引数に入れる。
		}
		makeAlertModal("deleteComplete");
	};
	
};

var scrdbCallback = function(flg){
	"use strict";
	if(flg){
		var arr = scoreDBOBJ.findAll(function(arr){
			MyScoreDB = new scoreOBJ(arr);
		});
	}
};

