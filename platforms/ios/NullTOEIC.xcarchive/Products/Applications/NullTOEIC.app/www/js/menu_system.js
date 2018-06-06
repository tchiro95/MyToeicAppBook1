//ロードしたときに最初に読みに来るのは
//setMenuData
//なので、検索してジャンプしてください。

//capturePhase 上から下の要素にアクセス
document.body.addEventListener(mytap, function(event){
	"use strict";
	touchModule.setStartPosition(event);
	//バックボタンが押されたら
	document.addEventListener("backbutton",function(){
		checkHeaderMenu("backIcon");
	});

	//選択肢
	var targetObject = event.target;
	var id;
	/*タッチが移動した時にyの値をとってるんだけど、これが判定されると色々間違いが起こりそう。
	if(event.changedTouches){
		touchModule.StartYPoint = event.changedTouches[0].clientY;
	}else{
		touchModule.StartYPoint = event.clientY;
	}
	*/
	//アラートモーダルを閉じる
	if(event.target.id==="switchAlertModal"||event.target.id==="alertModalWrapper"){
		event.stopPropagation();
		closeAlert();
		if(event.target.id === "StartPage" || userDataArray.part < 5 ){
			checkPlayer("play",0);
			document.getElementById("play").checked = true;
			startFlag = 0;
		}
		return;
	}
	//データ削除が終わったあとにでるアラートを閉じるを押した時にバックする。
	if(event.target.id === "dataDeleteCompleteFinish"){
		event.stopPropagation();
		closeAlert();
		backPageFunction();
	}

	//menuのイベント　直接ジャンプする項目の設定
	//p6とp7の画像スイッチ
	if(event.target.className==="switchBox"){
		event.stopPropagation();
		id = event.target.id.replace(/^tag/,'');
		return checkHeaderMenu(id);
	}

	if(event.target.className==="qtab"){
		event.stopPropagation();
		id = event.target.previousSibling.id;
		document.getElementById(id).checked = true;
		return changemodalQuiz(id);
	}

	//解説クローズ
	if(event.target.id==="kaisetsuDiv"){
		event.stopPropagation();
		closeExp();
		return;
	}

	//スコアページ一覧
	if(event.target.className==="button showScore"){
		event.stopPropagation();
		id = event.target.id;
		scrollObj.topPosition = window.pageYOffset;
		return showScore(id);
	}

	if(event.target.className==="button closeScore"){
		event.stopPropagation();
		if(event.target.id===undefined){
			checkNavMenu("score");
			return;
		}else{
			var tid = "" + event.target.id;
			var y = Number("20" + tid.slice(0,2));
			var m = tid.slice(2,4);
			makeCalender(y, m);
			return;
		}
	}

	if(event.target.className==="calIcon goback"){
		event.stopPropagation();
		id = ""+event.target.id;
		var year = id.slice(0,4);
		var month = id.slice(-2);
		return makeCalender(year, month);
	}

	if(event.target.classList[0]==="dayBlue"){
		event.stopPropagation();
		calDayBlue(event.target.id);
		return;
	}

	if(event.target.className==="goback"||event.target.id==="footerDIV"){
		event.stopPropagation();
		footorMenuSetting(event,event.target.id);
		return;
	}

}, true);

//bubbling 下から上
document.body.addEventListener(mytap, function(event){
	"use strict";
	//メニュー
	var id;
	var targetObject = event.target;

	//最初にタッチスタートの位置を取得します。
	touchModule.setStartPosition(event);

 	//タイマーアラート閉じる
	if(event.target.id==="timerSetupClose"){
		event.stopPropagation();
		document.getElementById('timerSetting').checked = false;
		var time_ten = ""+document.getElementById("timerSelect_ten").value;
		var time = ""+document.getElementById("timerSelect").value;
		var totalTime = Number(time_ten+time);
		if(totalTime<1){
			navigator.notification.alert("1分以上に設定してください。", "", "設定時間エラー", "閉じる");
		}else{
			userDataArray.set("timer",totalTime);
			totalTime = totalTime + ":00";
			document.getElementById("indexTimerTime").textContent= totalTime;
			closeAlert();
			return;
		}
	}

	if(event.target.className==="goback"||event.target.id==="footerDIV"){
		event.stopPropagation();
		footorMenuSetting(event,event.target.id);
		return;
	}

	//スコア詳細をオープン
	if(event.target.id==="showOverviewLabel"){
		event.stopPropagation();
		if(document.getElementById("showOverview").checked){
			document.getElementById("showOverview").checked = false;
			document.getElementById("showOverviewLabel").textContent = "詳　細";
		}else{
			document.getElementById("showOverview").checked = true;
			document.getElementById("showOverviewLabel").textContent = "閉じる";
		}
		return;
	}

	//データ削除のもーダルを出す
	if(event.target.id==="deleteDataLabel"){
		event.stopPropagation();
		makeAlertModal("data");
	}
	//モーダルのデータ削除
	if(event.target.id==="dataYes"||event.target.id==="dataNo"){
		event.stopPropagation();
		closeAlert();
		if(event.target.id==="dataYes"){
			var dateId = document.getElementById("score_date").innerText;
			dateId = Number(dateId.replace(/[年月日時分秒]/g, ""));
			DataBaseScore.deleteData_Score(dateId);
		}
	}

	//解説オープン
	if(event.target.className.match(/showExp/)){
		event.stopPropagation();
		scrollObj.topPosition = window.pageYOffset;
		showExp(event.target.id);
		return;
   	}
	
	//一問一答モードの場合は次へを押されたら次の問題へ行く
	if(event.target.id==="iconGoNext"){
		event.stopPropagation();
		closeExp();
		currentQNo += 1;
		//partが進むとずれるので矯正する。
		if(userDataArray.part!==quizArray[currentQNo].Part){
			userDataArray.set("part",quizArray[currentQNo].Part);
		}
		return makeQuiz(currentQNo);
	}

	//モーダルクローズ
	if(event.target.id==="modalCloseBtn"){
		event.stopPropagation();
		closeAlert();
		return;
	}
	
	//解説クローズ
	if(event.target.id==="closeButton"){
		event.stopPropagation();
		closeExp();
		return;
   	}

	//解説のモーダルを変える
	if(event.target.className==="expMenues"){
		event.stopPropagation();
		changemodal(event);
		return;
	}

	//解説のクイズタブを変える
	if(event.target.className==="quizTab"){
		event.stopPropagation();
		changemodalQuiz(event);
		return;
	}

	if(event.target.id==="backConfirmPage"){
		event.stopPropagation();
		return MakeMyPage();
	}

	if(event.target.id==="alertModal"){
		event.stopPropagation();
		return;
	}

	//ヘッダーのスイッチが反応悪いのでイベントを作ります。
	if(event.target.className==="headerBtnImg"){
		event.stopPropagation();
		id = event.target.alt;
		checkHeaderMenu(id);
		return;
	}

	if(event.target.className==="indexIcon2em"){
		event.stopPropagation();
		if(event.target.innerText==="選択肢"){
			id="choiceTag";
		}else if(event.target.id==="indexTimerTime"){
			checkHeaderMenu("timerSetting");
			//時計の文字を押してもタイマー設定ができるようにする。
		}else{
			id=event.target.previousSibling.id;			
		}
		checkHeaderMenu(id);
		return;
	}

	if(event.target.id==="choiceDIV"){
		event.stopPropagation();
		checkHeaderMenu("choiceTag");
		return;
	}

	if(event.target.className.match(/RQNo/)){
		event.stopPropagation();
		id = event.target.previousSibling.id.replace(/check_/, '');
		if(event.target.previousSibling.checked===false){
			event.target.previousSibling.checked=true;
			MyPageDB[id].check = 1;
		}else{
			event.target.previousSibling.checked=false;
			MyPageDB[id].check = 2;
		}
		updateData_Individual(id);
	}
	//これトップページのリンクタッチで移動するためのものです。
	if(event.target.className==="alertCalCell"||event.target.className==="alertCallCell_"){
		event.stopPropagation();
		if(event.target.className==="alertCallCell_"){
			id = Number(event.target.parentElement.id);
		}else{
			id = Number(event.target.id);
		}
		closeAlert();
		showScore(id,"cal");
	}

	//模擬モードのモーダル
	if(event.target.id==="MogiYes"||event.target.id==="MogiNo"){
		event.stopPropagation();
		checkMogiMode(event.target.id);
		closeAlert();
	}
	
	if(event.target.className==="togleLabelSpan"){
		if(document.getElementById('partSelect').checked){
			document.getElementById('partSelect').checked = false;
		}else{
			document.getElementById('partSelect').checked = true;
			var ptxt = event.target.innerText;
			ptxt = "p"+ptxt.slice(-1);
			document.getElementById(ptxt).checked=true;
		}
	}


	//メニューボタン　上にかぶるものがないので一番下で大丈夫。
	if(event.target.classList[0]==="menuBtn_" || event.target.className ==="menuBtn"||event.target.className==="closeMenu"){
		var wrapMain = document.getElementById("wrapMain");
		if(document.getElementById('mainMenuButton').checked===true){
			document.getElementById("mainMenuButton").checked = false;
			scrollObj.scrollLock(0);
		}else{
			//メニューのスクロールをトップに戻す
			var navdiv = document.getElementById("navDIVscroll").scrollTop;
			document.getElementById("navDIVscroll").scrollTop = 0; 

			document.getElementById("mainMenuButton").checked = true;
			scrollObj.scrollLock(1);
		}
		if(!mp3player.paused){
			waitMP3player();
		}
		return;
	}


},false);

//スクロールを止める
var scrollObjClass =function(position) {
	"use strict";
	this.topPosition = position;
	//モーダルがひらいたときにスクロール位置を止める。止めるにはbodyにclassを付けるだけ。toppositionとかは現段階ではやらないでオーケー。
	var scrollNum;
	this.scrollLock = function(flg){
		if(flg){
			scrollNum = Number(this.topPosition);
			document.getElementById("wrapMain").style.position = "fixed";
			document.getElementById("wrapMain").style.overflowY = "hidden";

			//document.body.classList.add("modal-open");
		}else{
			scrollNum = Number(this.topPosition);
			document.getElementById("wrapMain").style.position = "absolute";
			document.getElementById("wrapMain").style.overflowY = "auto";
			//document.body.classList.remove("modal-open");
		}
	};
};

var scrollObj = new scrollObjClass(0);


function checkMogiMode(id){
	"use strict";
	if(event.target.id==="MogiYes"){
		var quizNum = makeMogiData();
		makeQuiz(quizNum+1);
	}else{
		setMogiDB(1,"clear");
		ansResult= [];
		MogiModeData.lastquiz = 1;
		MogiModeData.choices = [];
		userDataArray.set("lastquiz",1);
		makeQuiz(1);
	}

	function makeMogiData(){
		var txt = userDataArray.Mchoices;
		var arr = txt.split('@');
		MogiModeData.lastquiz = Number(arr[0]);
		var arr2txt = ""+arr[1];
		arr2txt = arr2txt.slice(0,-1);
		var arr2 = arr2txt.split('_');
		var arr3;
		for(var i =0;i<arr2.length;i++){
			arr3 = arr2[i].split(':');
			var Qnum = Number(arr3[0]); var choice = arr3[1];
			MogiModeData.choices[Qnum] = choice;
		}
		currentQNo = MogiModeData.lastquiz;
		ansResult = [];
		var lastQuiz = MogiModeData.lastquiz;
		for(var key in MogiModeData.choices){
			if(MogiModeData.choices.hasOwnProperty(key)){
				var s = Number(key);
				var mogiAns = MogiModeData.choices[s];
				if(quizArray[s].Answer === mogiAns){
					ansResult[s] = [mogiAns,1];
				}else{
					ansResult[s] = [mogiAns,0];
				}
				if(lastQuiz < s){
					lastQuiz = s;
				}
			}
		}
		MogiModeData.lastquiz = lastQuiz;
		userDataArray.set("lastquiz", lastQuiz);
		return lastQuiz;
	}

	function setMogiDB(num, order){
		if(num===1&&order==="clear"){
			MogiModeData.lastquiz=1;
			MogiModeData.choices = [];
			userDataArray.set("Mchoices","");
			return;
		}else if(order==="set"){
			var txt = MogiModeData.lastquiz + '@';
			for(var i=0;i<MogiMode.choices.length;i++){
				if(MogiModeData.choices[s]){
					txt += MogiModeData.choices[i]+'_';
				}
			}
			userDataArray.set("Mchoices",txt);
		}
		return;
	}
}

//タップ終わりに反応 縦に動けば反応しないようにしてあります。
document.body.addEventListener(mytapend,function(event){
	"use strict";
	//縦移動のフラッグを入れながら終わりのポジションをセットします。
	//スワイプを感知したら問答無用でスワイプします。
	touchModule.setEndPosition(event);
	var id;

	//縦移動の動きがあればスルーしてチェックを終わらせます。
	if(!touchModule.noVmove){
		event.stopPropagation();
		return;
	}

	//もし文字をタップしても選択肢が点灯するようにしたければ、labelchoiceもチェックに入れる。
	if(event.target.className==="ChoicesButton"){
		event.stopPropagation();
		var labelTarget = event.target.id.replace(/_/g, "");
		var tgtButton = document.getElementById(labelTarget);
		if(document.getElementById(labelTarget).checked===false){
			document.getElementById(labelTarget).checked = true;
		}else{
			document.getElementById(labelTarget).checked = false;
		}
		return ClickedChoice(labelTarget);
	}
	//マークシートのボタン
	if(event.target.className==="MSChoices"){
		event.stopPropagation();
		var cid = ""+event.target.id;
		if(document.getElementById(cid).previousSibling.checked){
			document.getElementById(cid).previousSibling.checked = false;
		}else{
			document.getElementById(cid).previousSibling.checked = true;
			var q = cid.slice(1);
			q = Number(q.slice(0,-1));
			var ans = cid.slice(-1);
			if(quizArray[q].Answer  === ans){
				ansResult[q] = [ans,1];
			}else{
				ansResult[q] = [ans,0];
			}
		}
		return;
	}

	//マークシートのボタン
	if(event.target.id==="mssubmit"){
		event.stopPropagation();
		event.stopPropagation();
		for (var i = 1;i<=200;i++){
			if(!ansResult[i]){
				ansResult[i] = ["E",0];
			}
		}
		//スクロール戻す。
		document.getElementById("wrapMain").scrollTop = 0;
		resultDataReceive(0,1);
		return;
	}else if(event.target.id==="scrollTop"){
		document.getElementById("wrapMain").scrollTop = 0;
		return;
	}

	//扉のインデックスページのジャンプ設定 ここはもっと考えないとだめ。
	if(event.target.className==="indexDiv"||event.target.className==="indexSpan"){
		event.stopPropagation();
		if(event.target.className==="indexSpan"){
			id = event.target.parentElement.id;
		}else{
			id = event.target.id;
		}
		event.stopPropagation();
		checkNavMenu(id);
		return;
	}
	
	//mypageの編集ボタン
	if(event.target.id==="startMypage"||event.target.id==="editQnum"){
		event.stopPropagation();
		return checkNavMenu(event.target.id);
	}

	//インデックスのメニューとボタン
	if(event.target.className==="IndexButton"){
		event.stopPropagation();
		id=""+event.target.id;

		if(id==="indexMogi"){
			temp_userDataArray.mode = "Mogi";
		}else if(id==="editMy"){
			hideMenu();
			return MakeMyPage();
		}else if(id==="indexMy"){
			hideMenu();
			var arr = checkMYQuizDB();
			return StartQuizForMybook_setup(arr);
		}else{
			var section = id.slice(0,1);
			temp_userDataArray.part = id.slice(-1);
			if(section==="p"){
				temp_userDataArray.mode="Part";
			}else{
				temp_userDataArray.mode="Ichi";
			}
		}

		//saveDataの引数があれば、トップから、なければメニューからのジャンプとなる。
		if(document.getElementById('mainMenuButton').checked===true){
			return saveData();
		}else{
			return saveData(1);
		}
	}

	//これはMypageの編集のボタン
	if(event.target.className==="menuSpan"){
		event.stopPropagation();
		var classname;
		if(event.target.previousSibling.className){
			classname = event.target.previousSibling.className;
		}
		id = event.target.previousElementSibling.id;
		if(document.getElementById(id).checked===false){
			document.getElementById(id).checked = true;
		}else{
			document.getElementById(id).checked = false;
		}
		checkHeaderMenu(id,classname);
		return;
	}

	//タイマーが終わったあとの処理
	if(event.target.id==="timer_makeAnswer"){
		event.stopPropagation();
		closeAlert();
		//途中の問題を切り上げて結果を出す
		if(userDataArray.mode==="Mogi"){
			currentQNo = 200;
		}else{
			var part_ = userDataArray.part;
			currentQNo = quizNumberData[part_].last;
		}
		go_back(1);
	}else if(event.target.id==="timer_Continue"){
		closeAlert();
	}
	
},true);



//ナビメニューの項目。ここでチェックしてイベントを起こします。
function checkNavMenu(id){
	"use strict";
	//mp3playerが再生中なら止めます。
	checkPlayer(stop);
	event.stopPropagation();
	switch(id){
		//マイページの問題セットのところ。あとでチェック。
		case "startMyPage":
			document.getElementById('footerDIV').innerHTML = copyRightDiv;
			hideMenu();
			var arr = checkMYQuizDB();
			StartQuizForMybook_setup(arr);
			break;

		case "editQnum":
			document.getElementById('footerDIV').innerHTML = copyRightDiv;
			hideMenu();
			showCheckBoxList();
			break;

		case "score":
			document.getElementById('footerDIV').innerHTML = copyRightDiv;
			hideMenu();
			InitialIndexBtn();
			document.getElementById("HeaderCalender").style.display = 'flex';
			document.getElementById("calenderIcon").checked = false;
			document.getElementById("scoreList").checked = true;
			MakeScorePage();
			break;
	
		case "calender":
			hideMenu();
			var date = new Date();
			var year = date.getFullYear();
			var month = date.getMonth();
				month += 1;
			if(month < 10){
				month = "0"+month;
			}
			InitialIndexBtn();
			document.getElementById("HeaderCalender").style.display = 'flex';
			document.getElementById("calenderIcon").checked = true;
			document.getElementById("scoreList").checked = false;
			makeCalender(year,month);
			break;
	
		case "MarkSheet":
			document.getElementById('footerDIV').innerHTML = copyRightDiv;
			hideMenu();
			makeMarkSheet();
			break;

		case "home":
			document.getElementById('footerDIV').innerHTML = copyRightDiv;
			hideMenu();
			document.body.innerHTML = topMenu;
			document.getElementById('wrapMain').innerHTML = startDiv;
			settingEvent();
			break;

		default:
			break;
	}
}

//labelだと反応しないので、これで逐一チェックを付けたり外したりした方が無難です。
function checkHeaderMenu(id,classname){
	"use strict";

	if(id==="choiceTag"){
 		if(userDataArray.part>5){
			btnCheck();
			if(document.getElementById(id).checked){
				scrollObj.scrollLock(1);
			}else{
				scrollObj.scrollLock(0);
			}
		}
		return;
 	}

	if(classname==="setting"){
		check_userData('', id);
		return;
	}

	//リーディングスイッチの変更があった場合は送信する。
	if(id==="TXT"){
		document.getElementById("TXT").checked = true;
		return userDataArray.set("ReadingTxt",1);
	}
	if(id==="JPG"){
		document.getElementById("JPG").checked = true;
		return userDataArray.set("ReadingTxt",0);
	}

	if(id==="TimerSwitch"){
		btnCheck();
		if(document.getElementById(id).checked){
			return startIndexTimer();
		}else{
			if(ReadingTimer){
				return cancelAnimationFrame(ReadingTimer);
	   		}
		}
	}

	//オーディオ関連
	if(id==="play"||id==="pause"){
		btnCheck();
		return checkPlayer(id);
	}
	//カレンダーとリスト
	if(id==="calenderIcon"||id==="scoreList"){
		if(id==="calenderIcon"){
			checkNavMenu("calender");
		}else{
			checkNavMenu("score");
		}
	}

	//戻るボタン
	if(id==="backIcon"){
		webRecord.pop();
		backPageFunction();
	}

	//インデックスの模擬問題とか 模擬問題とかはもっと考える。
	if(id==="toWeb"){
		var ref = cordova.InAppBrowser.open('http://www.nullarbor.co.jp/ebook/index.html', '_blank', 'location=yes');
	}

	//タイマー
	if(id==="timerSetting"){
		btnCheck();
		return makeAlertModal('timer');
 	}

	function btnCheck(pid){
		if(pid!==undefined){
			id = pid;
		}
		if(document.getElementById(id).checked){
			document.getElementById(id).checked=false;
		}else{
			document.getElementById(id).checked=true;
		}
	}
}

//戻るボタンの関数。普通のバックは配列からマイナス１するけれど、それをしたくない時もあるので別関数にします。
function backPageFunction(){
	"use strict";
	if(webRecord[webRecord.length-1].page==="calender"){
		makeCalender(webRecord[webRecord.length-1].year, webRecord[webRecord.length-1].month);
		document.getElementById("calenderIcon").checked = true;
		document.getElementById("scoreList").checked = false;
		webRecord.pop();
	}else if(webRecord[webRecord.length-1].page==="score"){
		checkNavMenu("score");
		webRecord.pop();
	}else if(webRecord[webRecord.length-1].page==="home"){
		webRecord = [];
		document.body.innerHTML = topMenu;
		document.getElementById('wrapMain').innerHTML = startDiv;
		settingEvent();
	}
}

function calDayBlue(id){
	"use strict";
	id = "" + id;
	var arr = MyScoreDB.arr;
	var txt = "<div>見たいデータを選択してください。</div>";
	for(var i= 0;i<arr.length;i++){
		var arrayId = ""+arr[i].id;
		var arrIdDate = arrayId.slice(0,6);
		if(id===arrIdDate){
			var mode;
			var part;
			if(arr[i].mode==="Part"){mode = "パート";}else{mode="模擬";}
			if(mode==="パート"){part = "P" + arr[i].part;}else{part = "";}
			var arrId = ""+arr[i].id;
			var h = arrId.slice(6,8); var m = arrId.slice(8,10); var s = arrId.slice(10,12);
			var date = h +':'+m+':'+s;
			var div = '<div class="alertCalCell" id="'+ arrId +'"><div class="alertCallCell_">' +date+ '：</div><div class="alertCallCell_">'+mode+'</div>　<div class="alertCallCell_">'+part+'</div></div>';
			txt += div;
		}
	}
	var alertDIV = document.getElementById("alertModal");
	alertDIV.innerHTML = txt;
	alertDIV.style.height = "auto";
	alertDIV.style.visibility = 'visible';
	
	fadeIn(document.getElementById("alertModalWrapper"));
	document.getElementById("alertModalWrapper").style.display="block";
	scrollObj.scrollLock(1);
	//		checkNavMenu("score");

}

//ロード時に設定を読み込む
function setMenuData(flg){
	"use strict";
	if(userDataArray.setting1){ 
		document.getElementById('setting1').checked = true;
	}
	if(userDataArray.setting2){ 
		document.getElementById('setting2').checked = true;
	}
	var mode = userDataArray.mode;
	var part = userDataArray.part;
	
	if(mode === "Part"){
		document.getElementById("p"+part+"_").checked=true;
	}else if(mode === "Ichi"){
		document.getElementById("i"+part+"_").cheked=true;
	}
	
	document.getElementById("indexTimerTime").textContent=userDataArray.timer+":00";
	readingTxt = userDataArray.ReadingTxt;

	//flgあるとロードしたてという意味です。アプリスタートしたばっかり。
	if(flg){
		if(userDataArray.setting1){
			document.getElementById('setting1').checked = true;
			FlagSetting1 = true;
			if(userDataArray.choices !== ""){
				setChoicesOnDataLoad();
			}
			startFlag = 1;
			var MogiChoice = userDataArray.Mchoices;
			if(userDataArray.mode === "Mogi"){
				if(MogiChoice===""){
					userDataArray.set("choices","");
					userDataArray.set("lastquiz",0);
					return start_Quiz();
				}else if(MogiChoice !== undefined||MogiChoice !== ""){
					return makeAlertModal("Mogi");
				}
			}
			return start_Quiz();
		}else{
			document.getElementById("wrapMain").innerHTML = startDiv;
			return;
		}
	}
}

//ロード時にセーブした選択肢を読み込む
function setChoicesOnDataLoad(){
	"use strict";
	var str = userDataArray.choices + "";
	if(!str.match(/:/)){
		userChoices = [];
		return;
	}
	var tempArr = str.replace(/_$/, '').split('_');
	for(var i in tempArr){
		if(tempArr.hasOwnProperty(i)){
			var value = tempArr[i];
			var arrr = value.split(':');
			userChoices[arrr[0]] = arrr[1];
			checkAnswerForInitial(userDataArray.part, arrr[1], Number(arrr[0].replace(/Q/, '')));
		}
	}
}

function checkAnswerForInitial(part, choices, No){
	"use strict";
	//答えが合っているかを配列に入れていく。
	if(No===undefined){
		No = currentQNo;
	}
	switch (part){
		case 1: case 2: case 5:
		if(quizArray[No].Answer  === choices){
			ansResult[No] = [choices,1];
		}else{
			ansResult[No] = [choices,0];
		}
		break;
		
		default:
		var QNo = quizArray[No].Section;
		var quizgroup = No+1-QNo;
		switch (quizgroup){
			case 2:  QNo += 1;	break;
			case 3:  QNo += 2;	break;
			case 4:  QNo += 3;	break;
			case 5:  QNo += 4;	break;
		}
		if(quizArray[QNo].Answer === choices){
			ansResult[QNo] =[choices,1];
		}else{
			ansResult[QNo] =[choices,0];
		}
		break;
	}
}

//footerのメニューからのジャンプ項目
function footorMenuSetting(elm){
	"use strict";
	elm.stopPropagation();
	if(elm.target.id === "leftBlock" || elm.target.id === "back_"){
		go_back(null);
	}else if(elm.target.id === "rightBlock" || elm.target.id === "go_"){
		go_back(1);
	}else if(elm.target.id === "exp_"){
		showExpFromQuiz();
	}else if(elm.target.id === "backPart_"){
		userDataArray.set('choices', "");
		userDataArray.set('lastquiz', 0);
		currentQNo = quizNumberData[userDataArray.part].first;
		userDataArray.set('choices', '');
		ansResult= [];
		makeQuiz(currentQNo);
	}else if(elm.target.id === "goPart_"){
		currentQNo = quizNumberData[userDataArray.part+1].first;
		userDataArray.set("part", userDataArray.part+1);
		userDataArray.set('choices', "");
		userDataArray.set('lastquiz', 0);
		ansResult= [];
		makeQuiz(currentQNo);
	}
}



//初期設定
function settingEvent(){
	"use strict";
	var time = userDataArray.timer;
 	document.getElementById("indexTimerTime").textContent = time;
	//インデックスメニューを空にします。
	InitialIndexBtn();
	webRecord[0] = {page:"home", date:""};
}

//メニューボタンの設定
function check_userData(elm,id){
	"use strict";
	var key;
	var value;
	if(id===undefined){
		id = elm.currentTarget.id;
	}
	switch (id){
		case "setting1":  case "setting2":
		value = document.getElementById(id).checked ? 1 : 0;
		userDataArray.set(id,value);
		break;
		
		case "Mogi": case "Part": case "Ichi": case "Mybook":
		key = 'mode';
		temp_userDataArray[key] =  id;
		if(id === "Part"){
			document.getElementById("toggleIchi").innerHTML = "";
			var txt = '<input type="checkbox" class="toggle" id="partSelect">'+
			'<span class="togleLabelSpan" id="spanPart">Part 1</span>'+
			'<div class="selectWrap" id="selectWrapPart">' + selectMenuPart + '</div>' + 
			'</div>';
			document.getElementById("togglePart").innerHTML = txt;
		}else if(id === "Ichi"){
			document.getElementById("togglePart").innerHTML = "";
			var txt2 = '<input type="checkbox" class="toggle" id="partSelect">'+
			'<span class="togleLabelSpan" id="spanIchi">Part 1</span>'+
			'<div class="selectWrap" id="selectWrapPart">' + selectMenuPart + '</div>' + 
			'</div>';
			document.getElementById("toggleIchi").innerHTML = txt2;
		}
		break;
	}

}


function hideMenu(){
	"use strict";
	var nav = document.getElementById('mainMenuButton');
	nav.checked = false;
	scrollObj.scrollLock(0);
	temp_userDataArray　=[];
}

function saveData(fromTop){
	"use strict";
	var setPart = userDataArray.part;
	var setMode = userDataArray.mode;
	if(temp_userDataArray.mode){
		if(userDataArray.mode !== temp_userDataArray.mode){
			temp_userDataArray.lastquiz = 0;
			temp_userDataArray.choices = "";
			ansResult= [];
			setMode = temp_userDataArray.mode;
			if(setMode === "Mogi"){
				setPart = 1;
				temp_userDataArray.part = 1;
			}
		}
	}
	if(temp_userDataArray.part){
		if(userDataArray.part !== temp_userDataArray.part){
			temp_userDataArray.lastquiz = 0;
			temp_userDataArray.choices = "";
			ansResult= [];
			setPart = temp_userDataArray.part;
			if(setMode === "Mogi"){
				setPart = 1;
				temp_userDataArray.part = 1;
			}
		}
	}
	var array = [];
	var count = 0;
	for(var key in temp_userDataArray){
		if(temp_userDataArray.hasOwnProperty(key)){
			array[count] = [key,temp_userDataArray[key]];
			count++;
		}
	}
	//ここでDBにデータを入れる
	if(array.length>0){
		userDataArray.set('','',array);
		for(var k=0;k<array.length;k++){
			var keyword = array[k][0];
			userDataArray[keyword]= array[k][1];
		}
	}
	if(fromTop===undefined){
		hideMenu();
	}
	if(setMode === "Mybook"){
		var arr = checkMYQuizDB();
		return StartQuizForMybook_setup(arr);
	}else if(setMode === 'Mogi'&&userDataArray.Mchoices!==""){
		makeAlertModal("Mogi");
	}else{
		start_Quiz(setPart,1);
	}

}
