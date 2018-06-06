//メニュー初期設定からいどうしてきた始め。
function start_Quiz(part,fromSaveDataFlg) {
	"use strict";
	//モードとパートに合わせて問題番号をセッティングします。
	if(fromSaveDataFlg===undefined){
		modeCheck();
	}else{
		currentQNo = quizNumberData[part].first;
		startFlag =1;
	}
	makeQuiz(currentQNo);
}

//モードのチェックと前の問題の設定を作る。
function modeCheck(){
	"use strict";
	if(userDataArray.mode==="Mybook"){
		return StartQuizForMybook();
	}
	//LQはlastquizの変数。
	var LQ = 0;
	//前回から始めるの設定がオンの場合
	if(userDataArray.setting1 === 1){
		//lastquizの設定が面倒です。設定でモードやパートを変えた場合は前回の終了問題を0に変更しています。
		//1にしないのは一問目だけやって終わりにする人がいるからです。
		LQ = Number(userDataArray.lastquiz);
		//200が最終問題だとエラーがでるので196にする。
		if(LQ===200){LQ=196;}
		//LQが１か０で、パート１ ではない場合は、各パートの最初の問題を登録
		if(LQ === 1 || LQ === 0 ){
			switch(userDataArray.mode){
				case "Mogi":
				if(userDataArray.part !== 1){
					userDataArray.set("part",1);
				}
				if(LQ === 1){
					currentQNo = 2;
				}else if(LQ === 0){
					currentQNo = 1;
					startFlag = 1;
				}
				break;

				case "Part": case "Ichi":
				if(userDataArray.part !== 1){
					currentQNo = quizNumberData[userDataArray.part].first;
					startFlag = 1;
				}else{
					if(LQ===0){
						currentQNo = 1;
						startFlag = 1;
					}else{
						currentQNo = 2;
					}
				}
				break;

			}
		}else if(LQ === quizNumberData[userDataArray.part].last){
			switch(userDataArray.mode){
				case "Mogi":
				//模擬問題のリスニングとリーディングの境目は検討が必要。
				if(LQ === 100){
					currentQNo = 98;
				}else if(LQ === 200){
					currentQNo = 198;
				}else{
					var newPart = userDataArray.part + 1;
					userDataArray.set("part", userDataArray.part+1);
					currentQNo = quizNumberData[newPart].first;
				}
				break;

				case "Part": case "Ichi": case "Mybook":
				//前回各パートの最終問題で終わった場合はその次のパートへ進む。
				if(LQ === quizNumberData[userDataArray.part].last){
					if(LQ === 200){
						userDataArray.initAll();
						currentQNo = quizNumberData[1].first;
					}else{
						var newPart_ = userDataArray.part + 1;
						userDataArray.set("part", userDataArray.part+1);
						currentQNo = quizNumberData[newPart_].first;
					}
				}
				break;
			}
		}else{
			switch (userDataArray.part){
				case 3: case 4: case 6: case 7:
				currentQNo = Number(quizArray[LQ+1].Section);
				break;

				default:
				currentQNo = LQ+1;
				break;
			}
		}

	//前回から始めるの設定が無い場合はそれぞれのモードにそった開始番号にセットする。	
	}else{
		switch (userDataArray.mode){
		case 'Mogi':
		currentQNo = 1;
		startFlag = 1;
		break;

		case 'Part': 	case 'Ichi':
		currentQNo = quizNumberData[userDataArray.part].first;
		startFlag = 1;
		break;
		}	
	}
}

//ヘッドのアイコンを消す
function InitialIndexBtn(){
	"use strict";
	document.getElementById("player").style.display = 'none';
	document.getElementById("HeaderCalender").style.display = 'none';
	document.getElementById("ReadingSet").style.display = 'none';
}

function setIndexBtn(p){
	"use strict";
	if(p<5){
		document.getElementById("player").style.display = 'flex';
		document.getElementById("ReadingSet").style.display = 'none';
		document.getElementById("choice").style.display = 'none';
	}else{
		document.getElementById("player").style.display = 'none';
		document.getElementById("ReadingSet").style.display = 'flex';
		if(p===5){
			document.getElementById("choice").style.display = 'none';
		}else{
			document.getElementById("choice").style.display = 'block';
		}
	}
}

//問題をセットする。
function makeQuiz(No){
	"use strict";
	//スクロールをトップに戻す。
	document.getElementById("wrapMain").scrollTop = 0;

	//選択肢がある場合は選択肢をトップに戻す
	if(document.getElementById("choiceDIVContents")!==undefined){
		document.getElementById("choiceDIVContents").scrollTop=0;
	}
	
	//footerのセット
	if(userDataArray.mode==="Ichi"){
		document.getElementById('footerDIV').innerHTML = footerDiv_ichi;
	}else{
		document.getElementById('footerDIV').innerHTML = footerDiv_main;
	}
	if(!mp3player.paused&&mp3player.src!==""){
		checkPlayer("stop");
	}
	InitialIndexBtn();
	var p = quizArray[No].Part;
	var divtxt = "";
	var arr = [];
	switch(p){
		case 1:
		divtxt = makePart1Div(No);	break;

		case 2:
		divtxt = makePart2Div(No);	break;

		case 3: case 4:
		divtxt = makePart34Div(quizArray[No].Section);	break;

		case 5:
		divtxt = makePart5Div(No);	break;

		case 6:
		arr = makePart6Div(quizArray[No].Section);
		divtxt = arr[0];
		document.getElementById('choiceDIVContents').innerHTML = arr[1];
		break;

		case 7:
		arr = makePart7Div(quizArray[No].Section);	
		divtxt = arr[0];
		document.getElementById('choiceDIVContents').innerHTML = arr[1];
		break;
	}
	var contents = document.getElementById('wrapMain');
	contents.innerHTML = divtxt;
	fadeIn(contents);
	//リーディング・リス二ングでボタンの選別
	setIndexBtn(p);
	//選択済みの解答をセットし直す。
	setselectedChoiceCSS(No);


	if(p===6||p===7){
		//もともとの設定の値を読み込む。
		var flg = userDataArray.ReadingTxt;
		if(flg){
			document.getElementById("TXT").checked=true;
		}else{
			document.getElementById("JPG").checked=true;
		}
	}
	//リスニングは音を再生。
	if(p<5){	
		addEvent(p,startFlag);
	}

	//はじめましょうフラッグが少し邪魔なので一回止めます。
	if(startFlag){
		makeAlertModal("StartPage");
	}
	if(!touchModule.usePCFLG){
		touchModule.swipeOK = 1;
	}

	function setselectedChoiceCSS(No){
		//前回の続きや前に解答したデータがある場合はセットし直す。
		var p = quizArray[No].Part;
		var str = "";
		switch (p) {
			case 1: case 2: case 5:
			if(ansResult[No]){
				str = "1" + ansResult[No][0];
				document.getElementById(str).checked = true;
			}
			break;
	
			case 3: case 4:
			if(ansResult[No]){
				str = "1" + ansResult[No][0];
				document.getElementById(str).checked = true;
			}
			if(ansResult[No+1]){
				str = "2" + ansResult[No+1][0];
				document.getElementById(str).checked = true;
			}
			if(ansResult[No+2]){
				str = "3" + ansResult[No+2][0];
				document.getElementById(str).checked = true;
			}
			break;
	
			case 6:
			if(ansResult[No]){
				str = "1" + ansResult[No][0];
				document.getElementById(str).checked = true;
			}
			if(ansResult[No+1]){
				str = "2" + ansResult[No+1][0];
				document.getElementById(str).checked = true;
			}
			if(ansResult[No+2]){
				str = "3" + ansResult[No+2][0];
				document.getElementById(str).checked = true;
			}
			if(ansResult[No+3]){
				str = "4" + ansResult[No+3][0];
				document.getElementById(str).checked = true;
			}
			break;
	
			case 7:
			if(ansResult[No]){
				str = "1" + ansResult[No][0];
				document.getElementById(str).checked = true;
			}
			if(ansResult[No+1]){
				str = "2" + ansResult[No+1][0];
				document.getElementById(str).checked = true;
			}
	
			var num = returnHowManyQuiz(No);
			switch (num){
				case 3:
				if(ansResult[No+2]){
					str = "3" + ansResult[No+2][0];
					document.getElementById(str).checked = true;
				}
				break;
	
				case 4:
				if(ansResult[No+2]){
					str = "3" + ansResult[No+2][0];
					document.getElementById(str).checked = true;
				}
				if(ansResult[No+3]){
					str = "4" + ansResult[No+3][0];
					document.getElementById(str).checked = true;
				}
				break;
	
				case 5:
				if(ansResult[No+2]){
					str = "3" + ansResult[No+2][0];
					document.getElementById(str).checked = true;
				}
				if(ansResult[No+3]){
					str = "4" + ansResult[No+3][0];
					document.getElementById(str).checked = true;
				}
				if(ansResult[No+4]){
					str = "5" + ansResult[No+4][0];
					document.getElementById(str).checked = true;
				}
				break;
			}
			break;
		}
	}
	function addEvent(part,startflg){
		//それぞれのpartに沿った設定を入れる。
		switch(part){
			case 1: case 2:　case 3: case 4:
			mp3player.addEventListener("loadedmetadata", function() {
				duration = mp3player.duration;
				countTime(duration);
				if(startflg===0){
					checkPlayer("play",startFlag);
				}else{
					checkPlayer("pause",startFlag);
				}
			});
			break;
	
			default:
			break;
		}
	}
}

//ボタンのオンオフをリセット。
function checkPlayer(btn,flg2){
	"use strict";
	switch(btn){
		case "play":
		if(flg2 !== 1){
		//再生時間で作動するタイマーをセット
		countTime(duration);
		document.getElementById("play").checked=true;
		mp3player.play();
		} 		
		break;

		case "pause":
		//再生時間で作動するタイマーを止める
		countTime();

		document.getElementById("pause").checked=true;
		mp3player.pause();		
		break;

		//stopは初期化
		case "stop":
		//再生時間のタイマーを止めます
		countTime();

		document.getElementById("play").checked=false;
		document.getElementById("pause").checked=false;
		mp3player.pause();
		mp3player.currentTime = 0;
		mp3player.src = "";
		break;

		case "":
		if(flg2 === 1){
			document.getElementById("play").checked=true;
			mp3player.play();
		}else{
			document.getElementById("pause").checked=true;
			mp3player.pause();		
		}
		break;
	}
}

//アラートやメニューボタン時にボタンを一時停止するなどの処理
function waitMP3player(){
	"use strict";
	if(!mp3player.paused){
		checkPlayer('',0);
		mp3playerWaitFlg = 1;
	}else if(mp3playerWaitFlg===1){
		checkPlayer('',1);
		mp3playerWaitFlg = 0;
	}
}

//選択肢をクリックしたときの挙動の設定。
function ClickedChoice(id){
	"use strict";
	var selectedChoice = id.slice(-1);

	//答えが合っているかを配列に入れていく。
	switch (quizArray[currentQNo].Part){
		case 1: case 2: case 5:
		if(quizArray[currentQNo].Answer  === selectedChoice){
			ansResult[currentQNo] = [selectedChoice,1];
		}else{
			ansResult[currentQNo] = [selectedChoice,0];
		}

//part5でクリックしたときに自動で次に行きたければ以下をオンにする		
//		if(quizArray[currentQNo].Part==5)	go_back(go);
		break;
		
		default:
		var QNo = quizArray[currentQNo].Section;
		var quizgroup = Number(id.slice(0,1));
		switch (quizgroup){
			case 1:  break;
			case 2:  QNo += 1;	break;
			case 3:  QNo += 2;	break;
			case 4:  QNo += 3;	break;
			case 5:  QNo += 4;	break;
		}
		if(quizArray[QNo].Answer === selectedChoice){
			ansResult[QNo] =[selectedChoice,1];
		}else{
			ansResult[QNo] =[selectedChoice,0];
		}
		break;
	}
	if(userDataArray.mode ==="Mogi"){
		MogiModeData.choices[currentQNo] = selectedChoice;
	}
	setUserChoices(currentQNo, selectedChoice);
}

//あとから戻れるように配列に解答を入れておく。
function setUserChoices(No, choices){
	"use strict";
	No = "Q"+No;
	userChoices[No] = choices;
	var str = "";
	if(userDataArray.mode==="Mogi"){
		var arr = MogiModeData.choices;
		var str_ = '' + currentQNo + '@';
		for(var i in arr){
			if(arr.hasOwnProperty(i)){
				str_ += i + ":" + MogiModeData.choices[i] + '_';
			}
		}
		userDataArray.set("Mchoices", str_);
	}
	for(var key in userChoices){
		if(userChoices.hasOwnProperty(key)){
			str += key + ':' + userChoices[key] + '_';
		}
	}
	userDataArray.set("choices", str);
}

function go_back(count) {
	"use strict";
	//playerを止めて、初期化
	if(!mp3player.paused&&mp3player.src!==""){
		checkPlayer("stop");
	}
	//startflagの情報をなしにする
	startFlag = 0;
	
	var part = quizArray[currentQNo].Part;
	var startQNo = quizNumberData[part].first;
	var endQNo;
	if(userDataArray.mode ==="Mybook"){
		endQNo = mpQArr.last;
	}else{
		endQNo = quizNumberData[part].last;
	}
	//選択肢が表示されている場合は閉じる
	if(document.getElementById("choiceTag").checked){
		document.getElementById("choiceTag").checked = false;
	}
	if(count){
		if(currentQNo === endQNo){
			if(userDataArray.mode === "Part"){
				userDataArray.set('lastquiz', currentQNo);
				return go_result();
			}else if(userDataArray.mode ==="Ichi"){
				userDataArray.set('lastquiz', currentQNo);
				IchiMaker();
			}else if(userDataArray.mode ==="Mybook"){
				userDataArray.set('lastquiz', 0);
				return go_result();
			}else{
				if(part === 7){
					userDataArray.set('lastquiz', currentQNo);
					return go_result(ansResult);
				}else{
					userDataArray.set('lastquiz', currentQNo);
					userDataArray.set('part', part+1);
					return makeQuiz(currentQNo+1);
				}
			}
		}else{
			if(userDataArray.mode==="Mybook"){
				userDataArray.set('lastquiz', mpQArr.current);
				var current = mpQArr.current;
				for(var i = 0;i<mpQArr.quiz.length;i++){
					if(mpQArr.quiz[i] === current){
						mpQArr.current = mpQArr.quiz[i+1];
					}
				}
				return makeQuiz(mpQArr.current);
			}else if(userDataArray.mode==="Ichi"){
				userDataArray.set('lastquiz', currentQNo);
				IchiMaker();
			}else{
				userDataArray.set('lastquiz', currentQNo);
				MogiModeData.lastquiz = currentQNo;
				currentQNo += 1;
				return makeQuiz(currentQNo);
			}
		}
	}else{
		switch(quizArray[currentQNo].Part){
			case 3: case 4: case 6: case 7:
			//クイズをグループで戻るために、セクションの前の問題のセクションを手に入れる。
			//セクションは各問題、始まりの番号が入っている。
			//セクションの前の問題のセクション番号はそのセクションの始まりの問題番号とイコールになる。
			var currentSection = quizArray[currentQNo].Section;
			var keytolastsection = currentSection -1;
			var lastsection = quizArray[keytolastsection].Section;
		
			if(userDataArray.mode === "Part" || userDataArray.mode === "Ichi" || userDataArray.mode==="Mybook"){
				if(currentSection !== startQNo){
					currentQNo = Number(lastsection);
				}else{
					alert("もどれません");	
				}
				makeQuiz(currentQNo);		
			}else if(userDataArray.mode === "Mogi"){
				currentQNo = Number(lastsection);
				makeQuiz(currentQNo);		
			}
			break;
		
			default: 
			if(userDataArray.mode === "Part" || userDataArray.mode === "Part"||userDataArray.mode==="Mybook"){
				if(currentQNo !== startQNo){
					currentQNo -= 1;
				}else{
					alert("もどれません"); 	
				}
				makeQuiz(currentQNo); 	
			}else if(userDataArray.mode === "Mogi"){
				currentQNo -= 1;
				if(currentQNo < 1){
					alert("もどれません"); 	
				}else{
					makeQuiz(currentQNo); 
				}
			}
			break;
		}
	}

	function go_result(){
		if(userDataArray.mode === "Mogi"){
			startQNo = 1;
			endQNo =200; 
			part = 0;
			setNoAnswerData();
		}else if(userDataArray.mode ==="Mybook"){
			for (var i = 0;i<mpQArr.quiz.length;i++){
				if(!ansResult[mpQArr.quiz[i]]){
					ansResult[mpQArr.quiz[i]] = ["E",0];
				}
			}
		}else {
			part = quizArray[currentQNo].Part;
			startQNo = quizNumberData[part].first;
			endQNo = quizNumberData[part].last; 
			setNoAnswerData();
		}
		resultDataReceive(part);
		function setNoAnswerData(){	
			var resultString = "";
			for (var i = startQNo; i<=endQNo;i++){
				if(!ansResult[i]){
					ansResult[i] = ["E",0];
				}
			}
		}	
	}

	function IchiMaker(){
		scrollObj.topPosition = window.pageYOffset;
		return showExp(currentQNo);
	}
}

function resultDataReceive(part, markSheet){
	"use strict";
	var mode = userDataArray.mode;
	if(markSheet){
		mode = "Mogi";
	}
	var currentPart;
	var HowManyQuiz;
	var startQNo;
	var endQNo;
	var partText = 1;
	if(mode === "Mogi"){
		currentPart = 1;
		partText  = 1;
		HowManyQuiz = 200;
 		startQNo = 1;
		endQNo =200; 
	}else if(mode === "Part" || mode==="Ichi"){
		currentPart = part;
		partText = part;
		HowManyQuiz = quizNumberData[part].howmany;
		startQNo = quizNumberData[part].first;
		endQNo = HowManyQuiz + startQNo -1;
	}else if(mode === "Mybook"){
		startQNo = mpQArr.first;
		endQNo = mpQArr.last;
		partText = quizArray[startQNo].Part;
		currentPart = quizArray[startQNo].Part;
		HowManyQuiz = mpQArr.howmany;
	}
	var HowManyCorrectAnswers = 0;
	var ResultTxt = "";
	var PartTextForTable = "";
	var resultTemplates = '<div id="listIndex"></div><div class="listPartIndex">Part ' + partText + '</div>';
	var checkNumArr = [];
	if(mode === "Mybook"){
		for(var z in ansResult){
			if(ansResult.hasOwnProperty(z)){
				makeResult(z);
			}
		}
	}else{
		for (var t = startQNo; t<=endQNo; t++){
			makeResult(t);
		}
	}

	function makeResult(quizNum){
		var i = quizNum;
		if(quizArray[i].Part !== partText){
			partText = Number(quizArray[i].Part);
			PartTextForTable = '<div class="listPartIndex">Part ' + partText + '</div>';
		}else{
			PartTextForTable = "";
		}
		if(ansResult[i][1] === 1){
				ResultTxt = '<div class="RQNo">Q' + i + '</div><div class="maruBatsu"><div class="Answer_circle"></div></div>' + '<div class="QuizAns"><span class="iconAns">正解</span>' + quizArray[i].Answer + '</div>';
				HowManyCorrectAnswers++;
		}else if(ansResult[i][1]=== 0){
			if(ansResult[i][0]==="E"){
				ResultTxt = '<div class="RQNo">Q' + i + '</div><div class="maruBatsu">未</div><div class="QuizAns"><span class="iconAns">正解</span>' + quizArray[i].Answer + '</div>';
			}else{
				ResultTxt = '<div class="RQNo">Q' + i + '</div><div class="maruBatsu"><div class="Answer_batsu"></div></div><div class="QuizAns"><span class="iconAns">正解</span>' + quizArray[i].Answer + '［' + ansResult[i][0] + '］</div>';
			}
		}
		var divtxt =  PartTextForTable + '<div id="R' + i + '" class="listCellWrapper">' + 
			'<div class="listLeftDiv">' + 
			'<input type="checkbox" class="result_checkbox" id="check_' + i + '">' + 
			ResultTxt + 
			'</div><div class="spacer"></div>' + 
			'<div class="listRightDiv">' + 
			'<div class="showExp button" id="' + i + '">解説</div>' + 
			'<!--listRightDiv--></div>' + 
			'<!--result--></div>';
		
		resultTemplates += divtxt;
		if(MyPageDB[i].check===1){
			checkNumArr.push(i);
		}

	}

	resultTemplates += '<div class="listCellWrapper">チェックボックスのオンオフで練習問題への登録や削除ができます。</div></form></div>';
	document.getElementById("wrapMain").innerHTML = resultTemplates;
	scrollObj.topPosition = 0;
	scrollObj.scrollLock(0);

	//footer入れる
	if(mode==="Part"){
		document.getElementById("footerDIV").innerHTML = '<div class="goback" id="backPart_">◀ パートの最初</div><div></div><div class="goback" id="goPart_">次のパート ▶</div>';
	}else{
		document.getElementById("footerDIV").innerHTML = '<div id="copyRight">&copy Nullarbor Press Inc. </div>';
	}

	for(var c in checkNumArr){
		if(checkNumArr.hasOwnProperty(c)){
			document.getElementById("check_"+checkNumArr[c]).checked = true;
		}
	}

	var percent = Math.floor(HowManyCorrectAnswers/HowManyQuiz*100);
	var text;
	if(mode === "Mogi"){
		text = '模擬問題　正解率：'　+ percent + '％　　'+ HowManyCorrectAnswers + '／' + HowManyQuiz;
	}else if(mode === "Part"){
		text = 'パート別　正解率：'　+ percent + '％　　'+ HowManyCorrectAnswers + '／' + HowManyQuiz;
	}else if(mode === "Ichi"){
		text = '一問一答';
	}else if(mode === "Mybook"){
		text = 'マイ練習帳';
	}
	document.getElementById('listIndex').innerHTML = text;

	userDataArray.set('choices', '');

	//ヘッダーをみえなくする
	switch(currentPart){
		case 1: case 2: case 3: case 4:
		document.getElementById("player").style.display="none";
		break;

		case 5: case 6: case 7:
		document.getElementById("ReadingSet").style.display="none";
		break;
	}

	//データベースにセーブするための作業
	if(mode==="Mogi"||mode==="Part"){
		if(checkAnsArr()){
			setScore();
		}
	}
	function checkAnsArr(){
		for(var a in ansResult){
			if(ansResult[a][0]!=="E"){
				return true;
			}
		}
		return false;
	}
	function setScore(){
		var ScoreArr = [];
		var daytime = setDateToTime();
		var pid=daytime;
		var ppart = 0;
		if(mode==="Mogi"){
			ppart=0;
		}else{
			ppart = userDataArray.part;
		}
		var pans=makeStringfromAnsResult(ansResult);
		ScoreArr.id= pid;
		ScoreArr.mode= mode;
		ScoreArr.part= ppart;
		ScoreArr.ans= pans;
		DataBaseScore.updateData_Score(ScoreArr);
		return;
		function setDateToTime(){
			var nowTime = new Date();
			var year = nowTime.getFullYear();
			year = String(year).slice(2);
			var month= (nowTime.getMonth() + 1);
			if(month<10) {month = "0"+month;}
			var day= nowTime.getDate();
			if(day<10) {day = "0"+day;}
			var hour = nowTime.getHours();
			if(hour<10) {hour = "0"+hour;}
			var min = nowTime.getMinutes();
			if(min<10) {min = "0"+min;}
			var sec = nowTime.getSeconds();
			if(sec<10) {sec = "0"+sec;}
			var returnTime = Number(year+month+day+hour+min+sec);
			return returnTime;
		}
		function makeStringfromAnsResult(arr){
			var txt="";
			for(var i in arr){
				if(arr.hasOwnProperty(i)){
					txt += i + arr[i][0] + arr[i][1]+"@";
				}
			}
			var returnText = txt.slice(0,-1);
			return returnText;
		}
	}
}

function changemodal(elm){
	"use strict";
	var arr = document.getElementsByClassName("modalContentsSelected");
	arr[0].className="modalContents";
	var arr2 = document.getElementsByClassName("expMenuesSelected");
	arr2[0].className = "expMenues";

	elm.target.className = "expMenuesSelected";
	var SelectedId = elm.target.id;
	document.getElementById(SelectedId).className = 'expMenuesSelected';
	SelectedId = SelectedId.slice(1);
	document.getElementById(SelectedId).className = 'modalContentsSelected';
}

function changemodalQuiz(id){
	"use strict";
	var SelectedNo = id.replace(/Tmcu/, '');

	document.getElementById('expContentsWrapper').innerHTML = makeExDivTxt(SelectedNo);

	var arr = document.getElementsByClassName("modalContentsSelected");
	for (var i = 0;i<arr.length;i++){
		arr[i].className="modalContents";
	}
	var arr2 = document.getElementsByClassName("expMenuesSelected");
	for (var t = 0;t<arr2.length;t++){
		arr2[t].className = "expMenues";
	}

	document.getElementById("QuizScript").className = "modalContentsSelected";
	document.getElementById("MQuizScript").className = "expMenuesSelected";
}


function showExpFromQuiz(){
	"use strict";
	if(quizArray[currentQNo].Section !== 0){
		showExp(quizArray[currentQNo].Section);
	}else{
		showExp(currentQNo);
	}
}

function showExp(No){
	"use strict";
	waitMP3player();
	No = Number(No);

	var htElm = ""+ makeEXDiv(No);

	switch(quizArray[No].Part){
		case 3: case 4: case 6: case 7:
		No = quizArray[No].Section;
		break;

		case 1: case 2: case 5:
		break;
	}

	document.getElementById('kaisetsuDivWrap').innerHTML = htElm;
	document.getElementById('expContentsWrapper').innerHTML = makeExDivTxt(No);
	document.getElementById('kaisetsuDiv').style.display = 'block';

	fadeIn(document.getElementById('kaisetsuDiv'));

	switch(quizArray[No].Part){
		case 3: case 4: case 6: case 7:
		var node = document.getElementById("Tmcu"+No);
		node.checked=true;
		break;

		case 1: case 2: case 5:
		break;
	}

	document.getElementById("QuizScript").className = "modalContentsSelected";
	document.getElementById("MQuizScript").className = "expMenuesSelected";

	scrollObj.scrollLock(1);
}

function closeExp(element){
	"use strict";
	var el = document.getElementById('kaisetsuDiv');
	fadeOut(el);
	document.getElementById("kaisetsuDivWrap").innerHTML="";
	document.getElementById("kaisetsuDiv").style.display="none";
	scrollObj.scrollLock(0);

	waitMP3player();
}

function StartQuizForMybook(flg){
	"use strict";
	mpQArr = checkMyPage();
	if(userDataArray.setting1===1){
		if(userDataArray.lastquiz<1){
			currentQNo = mpQArr.first;
		}else if(userDataArray.lastquiz===1){
			currentQNo = mpQArr.quiz[1];
		}else{
			for(var i = 0;i<mpQArr.quiz.length;i++){
				if(i === mpQArr.quiz.length){
					currentQNo = mpQArr.quiz[i];
				}else if(mpQArr.quiz[i] === userDataArray.lastquiz){
					currentQNo = mpQArr.quiz[i+1];
				}else{
					currentQNo = mpQArr.first;
				}
			}
		}
	}else{
		currentQNo = mpQArr.first;
		startFlag = 1;
	}
	mpQArr.current = currentQNo;
	if(flg===1){
		userDataArray.initAll();
	}
	userDataArray.set("mode", 'Mybook');
	makeQuiz(mpQArr.first);
}

function checkMyPage(){
	"use strict";
	var arr = {quiz:[], first:0, last:0, howmany:0,current:0};
	var first=0;
	var last=0;
	var howman = 0;
	for(var i=1;i<=200;i++){
		if(MyPageDB[i].check===1&&first===0){
			first = i;
			howman++;
			arr.quiz.push(i);
		}else if(MyPageDB[i].check===1){
			last = i;
			howman++;
			arr.quiz.push(i);
		}
	}
	if(howman===1){last = first;}
	arr.first = first;
	arr.last = last;
	arr.howmany = howman;
	arr.quiz[0] = arr.first;
	mpQArr = arr.quiz;
	return arr;
}



/*-以下アニメーションなど-*/
//フェードイン・アウトのイベント
function fadeIn(el) {
	"use strict";
	el.style.opacity = 0;
	var last = +new Date();
	var tick = function() {
		el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
		last = +new Date();
	
		if (+el.style.opacity < 1) {
			if(window.requestAnimationFrame){
				requestAnimationFrame(tick);
			}else{
				setTimeout(tick, 16);
			}
		}
	};
	tick();
}
  
function fadeOut(el) {
	"use strict";
	el.style.opacity = 1;

	var last = +new Date();
	var tick = function() {
	el.style.opacity = +el.style.opacity - 0.02;
	last = +new Date();

	if (+el.style.opacity > 0) {
		if(window.requestAnimationFrame){
			requestAnimationFrame(tick);
		}else{setTimeout(tick, 1000);}
	}
	};
	tick();
}

//mp3関連のイベント
var mp3playing;
function countTime(durationTime){
	"use strict";
	if(durationTime===undefined){
		return cancelAnimationFrame(mp3playing);
	}
	var tic = function(){
		if(durationTime <= mp3player.currentTime){
			cancelAnimationFrame(mp3playing);
			go_back(1);
		}else{
			mp3playing = requestAnimationFrame(tic);
		}
	};
	mp3playing = requestAnimationFrame(tic);
}

function centeringModal(el){
	"use strict";
	var w = window.innerWidth;
	var h = window.innerHeight;
	
	var cw = el.outerWidth;
	var ch = el.innerWidth;

	var pxleft = ((w-cw)/2);
	var pxtop = ((h-ch)/2);
	
	el.style.left =  pxleft + "px";
	el.style.left =  pxleft + "px";
}

/*--タイマーの設定--*/
function setTimerTime(indexTimerTime){
	"use strict";
	var time = document.getElementById(indexTimerTime);
	if(!time){
	time= 75*60;
	}
	var timeTime = setIndexTime(time);

	return timeTime;
}

function setIndexTime(time){
	"use strict";
	var min = Math.floor(time/60);
	var sec = Math.floor(time - min*60);
	if(sec<10){
	sec = "0"+sec;
	}
	var timeTime = min + ':' + sec;
	return timeTime;
}

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
							window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
var ReadingTimer;

function startIndexTimer(){
	"use strict";
	var originalTime = document.getElementById("indexTimerTime").textContent; //タイマーのもともとの時間をとっておきます。
	var setTime = document.getElementById("indexTimerTime").textContent;
	var arr = setTime.split(":");
	var minM = Number(arr[0]*60);
	var secS = Number(arr[1]);
	var textForIndex;
	if(secS === "00"){
	secS = 0;
	}
	setTime = minM + secS;
	var nowTime = new Date().getTime()/1000;
	var tic = function(){
		var second = new Date().getTime()/1000;
		var sec = second - nowTime ;

		var time = (setTime - sec);
		textForIndex = setIndexTime(time);

		document.getElementById("indexTimerTime").textContent = textForIndex;

		if(0 < time){
			ReadingTimer = requestAnimationFrame(tic);
		}else if(0.005>time){
			//0分になったらタイマーを止めて、アラートを出す。
			makeAlertModal("timeOut");
			
			document.getElementById("indexTimerTime").textContent = originalTime;　//インデックスを元の数字に戻す
			document.getElementById("TimerSwitch").checked=false;　//スイッチをオフにする
			return cancelAnimationFrame(ReadingTimer);
		}
	};
	ReadingTimer= requestAnimationFrame(tic);
}  

function checkTimer(direct){
	"use strict";
	if(!timerWaitFlg){
	startIndexTimer();
	timerWaitFlg=1;
	}else if(timerWaitFlg){
		if(ReadingTimer){
		cancelAnimationFrame(ReadingTimer);
		}
	timerWaitFlg=0;
	}
}

var touchModule = {
	StartYPoint:0,
	StartXPoint:0,
	EndYPoint:0,
	EndXPoint:0,
	differenceY:0,
	differenceX:0,
	usePCFLG : 1,
	usrsDevice:"",
	swipeDirection :"",
	noVmove : 1,
	

	setStartPosition : function(event){
		"use strict";
		if(event.changedTouches){
			this.StartYPoint = event.changedTouches[0].clientY;
			this.StartXPoint = event.changedTouches[0].clientX;
		}else{
			this.StartYPoint = event.clientY;
			this.StartXPoint = event.clientX;
		}
	},

	setEndPosition : function(event){
		"use strict";
		if(event.changedTouches){
			this.EndYPoint = event.changedTouches[0].clientY;
			this.EndXPoint = event.changedTouches[0].clientX;
		}else{
			this.EndYPoint = event.clientY;
			this.EndXPoint = event.clientX;
		}
		if(this.StartYPoint < this.EndYPoint){
			this.differenceY = this.EndYPoint - this.StartYPoint;
		} else{
			this.differenceY = this.StartYPoint - this.EndYPoint;
		}
		if(this.differenceY < 10){this.noVmove=1;}else{this.noVmove=0;} 

		this.differenceX = this.StartXPoint-this.EndXPoint;
		if(this.differenceX > 40){
			this.swipeDirection = "swipeleft";
		}else if(this.differenceX < -40){
			this.swipeDirection = "swiperight";
		}else{
			this.swipeDirection = "";
		}

		//swipeを感知したらファンクションを起動
		if(this.swipeDirection!=="undefined"){
			var content = document.getElementById("wrapMain");
			if(content.firstChild.id === "quizContents"){
				this.swipeMoveQuiz();
				return;
			}
		}
	},
	
	swipeMoveQuiz : function (){
		"use strict";
		if(this.differenceY>30){
			return;
		}
		if(this.differenceX===0||this.swipeDirection===""){
			return;
		}else if(this.differenceX>0||this.swipeDirection!==""){
			if(this.swipeDirection === "swiperight"){
				go_back();
			}else if(this.swipeDirection === "swipeleft"){
				go_back(1);
			}
			this.swipeOK = 0;
			return;
		}
	}

};
