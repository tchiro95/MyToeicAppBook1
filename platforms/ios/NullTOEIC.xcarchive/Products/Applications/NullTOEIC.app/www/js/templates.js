var header_menu = '<input type="checkbox" class="HamburgarMenuCheck" id="mainMenuButton">' +
'<label class="menuBtn">' +
'<span class="menuBtn_ bar top"></span>' +
'<span class="menuBtn_ bar middle"></span>' +
'<span class="menuBtn_ bar bottom"></span>' +
'<span class="menuBtn_ menuBtn_text">MENU</span>' +
'</label>' +
//これがメニューボタンの黒幕
'<label id="forMenuLabel" class="closeMenu"></label>';

//playerボタン
var header_player = '<div class="headerBtnWrapper" id="player">' +
'<input type="radio" id="play" name="audio" class="playerButton" ><span class="indexIcon"><img class="headerBtnImg" src="./img/icons/play.png" alt="play"></span>' +
'<input type="radio" id="pause" name="audio" class="playerButton" ><span class="indexIcon"><img class="headerBtnImg" src="./img/icons/pause.png" alt="pause"></span>' +
'</div>';

//リーディングのセット
//リーディングタイマーなど
var header_Reading = '<div class="headerBtnWrapper" id="ReadingSet">' +
'<div class="RIcon">' +
'<input type="checkbox" id="timerSetting" class="ReadingBtn"><span class="indexIcon2em" id="timerSettingBtn">&#128338; Set</span>' +
'<input type="checkbox" id="TimerSwitch" name="timer" class="ReadingBtn" >' +
'<span class="indexIcon2em">&#128338; ON</span>' +
//タイマーのラベル
'<span class="indexIcon2em" id="indexTimerTime"></span>' +
'</div>'+
'<div class="RIcon">' +
'<input type="checkbox" id="choiceTag" class="ReadingBtn" >' + 
'<span class="indexIcon2em"  id="choice">選択肢</span>' +
'<div id="choiceDIV"><div id="choiceDIVContents"></div></div>' +
'</div>'+
'<!--headerBtnWrapper--></div>';

//calenderボタン
var header_calender = '<div class="headerBtnWrapper" id="HeaderCalender">' +
'<span class="indexIcon"><img class="headerBtnImg" src="./img/icons/back.png" alt="backIcon"></span>' +
'<input type="radio" id="calenderIcon" name="calenderIcon" class="playerButton" ><span class="indexIcon"><img class="headerBtnImg" src="./img/icons/calIcon.png" alt="calenderIcon"></span>' +
'<input type="radio" id="scoreList" name="scoreList" class="playerButton" ><span class="indexIcon"><img class="headerBtnImg" src="./img/icons/listIcon.png" alt="scoreList"></span>' +
'</div>';

//パートのセレクト
var selectMenuPart =  ''+'<input type="radio" name="psel" class="menuRadio" id="p1"><div class="PSelect">Part 1</div>'+
'<input type="radio" name="psel" class="menuRadio" id="p2"><div class="PSelect">Part 2</div>'+
'<input type="radio" name="psel" class="menuRadio" id="p3"><div class="PSelect">Part 3</div>'+
'<input type="radio" name="psel" class="menuRadio" id="p4"><div class="PSelect">Part 4</div>'+
'<input type="radio" name="psel" class="menuRadio" id="p5"><div class="PSelect">Part 5</div>'+
'<input type="radio" name="psel" class="menuRadio" id="p6"><div class="PSelect">Part 6</div>'+
'<input type="radio" name="psel" class="menuRadio" id="p7"><div class="PSelect">Part 7</div>';

//navigation トップと表示が同じ
var header_nav = '<div class="navMenu" id="navDIVscroll">' + 
'<div class="mainTile"><div class="indexDiv" id="home"><span class="indexSpan" id="home">ホームに戻る</span></div>' + 
'<div class="indexDiv" id="Mogi"><span class="indexSpan">模擬問題モード</span><br>200問のテストを受験するモードです。<br><div class="IndexButtonWrap"><div class="IndexButton" id="indexMogi">問題をはじめる</div></div></div>' +
'<div class="indexDiv" id="Part"><span class="indexSpan">パート別モード</span><br>パート別に問題を進めます。<br><div class="IndexButtonWrap"><input type="radio" name = "p1" id="p1_" class="radioChoice"><div class="IndexButton" id="p1">1</div><input type="radio" name = "p2" id="p2_" class="radioChoice"><div class="IndexButton" id="p2">2</div><input type="radio" name = "p3" id="p3_" class="radioChoice"><div class="IndexButton" id="p3">3</div><input type="radio" name = "p4" id="p4_" class="radioChoice"><div class="IndexButton" id="p4">4</div><input type="radio" name = "p5" id="p5_" class="radioChoice"><div class="IndexButton" id="p5">5</div><input type="radio" name = "p6" id="p6_" class="radioChoice"><div class="IndexButton" id="p6">6</div><input type="radio" name = "p7" id="p7_" class="radioChoice"><div class="IndexButton" id="p7">7</div></div></div>' +
'<div class="indexDiv" id="Ichi"><span class="indexSpan">一問一答モード</span><br>一問ずつ解答や解説の確認をすることができます。<br><div class="IndexButtonWrap"><input type="radio" name = "i1" id="i1_" class="radioChoice"><div class="IndexButton" id="i1">1</div><input type="radio" name = "i2" id="i2_" class="radioChoice"><div class="IndexButton" id="i2">2</div><input type="radio" name = "i3" id="i3_" class="radioChoice"><div class="IndexButton" id="i3">3</div><input type="radio" name = "i4" id="i4_" class="radioChoice"><div class="IndexButton" id="i4">4</div><input type="radio" name = "i5" id="i5_" class="radioChoice"><div class="IndexButton" id="i5">5</div><input type="radio" name = "i6" id="i6_" class="radioChoice"><div class="IndexButton" id="i6">6</div><input type="radio" name = "i7" id="i7_" class="radioChoice"><div class="IndexButton" id="i7">7</div></div></div>' +
'<div class="indexDiv"><span class="indexSpan">My練習帳モード</span><br>あらかじめ登録した問題だけを演習するモードです。<br><div class="IndexButtonWrap"><div class="IndexButton" id="editMy">問題集を編集する</div><div class="IndexButton" id="indexMy">問題をはじめる</div></div></div>' +
'<div class="subTile">'+
'<div class="indexDiv" id="score"><span class="indexSpan">得点記録</span><br>学習記録の一覧を参照できます。</div>' +
'<div class="indexDiv" id="calender"><span class="indexSpan">学習カレンダー</span><br>学習の記録を参照できます。</div>' +
'<div class="indexDiv" id="setting_"><span class="indexSpan">設定</spann><br>' +
  '<div><input type="checkbox" class="setting" id="setting1"><span class="menuSpan">問題を途中から始める</span></div>' +
  '<div><input type="checkbox" class="setting" id="setting2"><span class="menuSpan">模擬問題のセーブ</span></div>' +
'<!--index_Setting--></div></div>' +
'<div class="indexDiv" id="MarkSheet"><span class="indexSpan">マークシート入力</span><br>あらかじめ用意した解答を入力することができます。</div>' +
'<div class="indexDiv" id="toWeb"><span class="indexSpan">ナラボー・プレスの書籍・電子書籍</span><br>このアプリの制作元である株式会社ナラボー・プレスについて</div><!--subTile--></div>'+
'<!--navDiv--></div>';


//メニュー
var headerDiv = '' +
'<div id="header">' +
header_menu +
header_player +
header_calender +
header_Reading +
header_nav +
'<!--header--></div>';

var copyRightDiv = '<div id="copyRight">&copy Nullarbor Press Inc. </div>';

var footerDiv_main = '<div class="goback" id="back_">◀ 戻る</div><div class="goback" id="go_">次へ ▶</div>';
var footerDiv_ichi = '<div class="goback" id="back_">◀ 戻る</div><div class="goback" id="go_">解答する</div>';

var topMenu = ''+
headerDiv +
'<div id="alertModalWrapper" class="wrapperDIV_bgGrey"><div id="modalCloseWrap"><div></div><div id="modalCloseBtn">close</div></div><div id="alertModal" for="alertModalBtn"></div></div>' +
'<div id="kaisetsuDiv" class="wrapperDIV_bgGrey"><div id="kaisetsuDivWrap"></div></div>' +
'<div id="wrapMain">' +
'<div id="loadingDiv">Now Loading...</div>' +
'<!--wrapMain--></div>' +
'<div class="footer" id="footerDIV">' + copyRightDiv + '</div>';




var optionLoop = function(start, end, id, this_day) {
	"use strict";
    var i, opt;
    opt = null;
    for (i = 1; i <= end ; i++) {
      if (i === 75) {
        opt += "<option value='" + i + "' selected>" + i + "</option>";
      } else {
        opt += "<option value='" + i + "'>" + i + "</option>";
      }
    }
    document.getElementById(id).innerHTML = opt;
};
  


var expDiv = '<span for="showbox" class="button expButton">解説</span><input type="checkbox" class="showbox">';

var startDiv = '<div id="startDiv">' + 
'<div id="bookTitle">TOEIC<sup>Ⓡ</sup> L&R TEST<br>完全模擬問題集 第1集</div>' + 
'<div class="mainTile"><div class="indexDiv" id="Mogi"><span class="indexSpan">模擬問題モード</span><br>200問のテストを受験するモードです。<br><div class="IndexButtonWrap"><div class="IndexButton" id="indexMogi">問題をはじめる</div></div></div>' +
'<div class="indexDiv" id="Part"><span class="indexSpan">パート別モード</span><br>パート別に問題を進めます。<br><div class="IndexButtonWrap"><input type="radio" name = "p1" id="p1_" class="radioChoice"><div class="IndexButton" id="p1">1</div><input type="radio" name = "p2" id="p2_" class="radioChoice"><div class="IndexButton" id="p2">2</div><input type="radio" name = "p3" id="p3_" class="radioChoice"><div class="IndexButton" id="p3">3</div><input type="radio" name = "p4" id="p4_" class="radioChoice"><div class="IndexButton" id="p4">4</div><input type="radio" name = "p5" id="p5_" class="radioChoice"><div class="IndexButton" id="p5">5</div><input type="radio" name = "p6" id="p6_" class="radioChoice"><div class="IndexButton" id="p6">6</div><input type="radio" name = "p7" id="p7_" class="radioChoice"><div class="IndexButton" id="p7">7</div></div></div>' +
'<div class="indexDiv" id="Ichi"><span class="indexSpan">一問一答モード</span><br>一問ずつ解答や解説の確認をすることができます。<br><div class="IndexButtonWrap"><input type="radio" name = "i1" id="i1_" class="radioChoice"><div class="IndexButton" id="i1">1</div><input type="radio" name = "i2" id="i2_" class="radioChoice"><div class="IndexButton" id="i2">2</div><input type="radio" name = "i3" id="i3_" class="radioChoice"><div class="IndexButton" id="i3">3</div><input type="radio" name = "i4" id="i4_" class="radioChoice"><div class="IndexButton" id="i4">4</div><input type="radio" name = "i5" id="i5_" class="radioChoice"><div class="IndexButton" id="i5">5</div><input type="radio" name = "i6" id="i6_" class="radioChoice"><div class="IndexButton" id="i6">6</div><input type="radio" name = "i7" id="i7_" class="radioChoice"><div class="IndexButton" id="i7">7</div></div></div>' +
'<div class="indexDiv"><span class="indexSpan">My練習帳モード</span><br>あらかじめ登録した問題だけを演習するモードです。<br><div class="IndexButtonWrap"><div class="IndexButton" id="editMy">問題集を編集する</div><div class="IndexButton" id="indexMy">問題をはじめる</div></div></div>' +
'<div class="subTile">' +
'<div class="indexDiv" id="score"><span class="indexSpan">得点記録</span><br>学習記録の一覧を参照できます。</div>' +
'<div class="indexDiv" id="calender"><span class="indexSpan">学習カレンダー</span><br>学習の記録を参照できます。</div>' +
'<div class="indexDiv" id="MarkSheet"><span class="indexSpan">マークシート入力</span><br>あらかじめ用意した解答を入力することができます。</div>' +
'<div class="indexDiv" id="toWeb"><span class="indexSpan">ナラボー・プレスの書籍・電子書籍</span><br>このアプリの制作元である株式会社ナラボー・プレスについて</div><!--subTile--></div>'+
'<!--startDiv--></div>';


function setQuizModeText(No){
	"use strict";
	var mode = userDataArray.mode;
	var part = quizArray[No].Part;
	var modeText = "";
	switch(mode){
		case "Mogi":
		modeText = "【模擬問題】　"; break;
		case "Part":
		modeText = "【パート別】　"; break;
		case "Ichi":
		modeText = "【一問一答】　"; break;
		case "Mybook":
		modeText = "【My練習帳】　"; break;
	}
	var quizNumText = "";

	var No2 = No+1;
	var No3 = No+2;
	var No4 = No+3;
	var No5 = No+4;
	switch (part) {
		case 3: case 4:
		quizNumText = 'Q ' + No + ' 〜 Q'+ No3;
		break;

		case 6:
		quizNumText = 'Q ' + No + ' 〜 Q' + No4;
		break;

		case 7:
		var nana = returnHowManyQuiz(No);
		switch (nana) {
			case 2:
			quizNumText = 'Q ' + No + ', Q ' + No2;
			break;

			case 3:
			quizNumText = 'Q ' + No + ' 〜 Q ' + No3;
			break;

			case 4:
			quizNumText = 'Q ' + No + ' 〜 Q ' + No4;
			break;

			case 5:
			quizNumText = 'Q ' + No + ' 〜 Q '+ No5;
			break;
		}
		break;

		default:
		quizNumText = 'Q ' + No;
		break;
	}
	var PartQnum = '<div id="PartAndQNo">'+ modeText +'Part ' + part + ' ' + quizNumText + '</div>';
	return PartQnum;
}

//part1
function makePart1Div(No){
	"use strict";
	var partQuiz = new quizObj(No);
	var PandQnum = setQuizModeText(No);
	var quizDIV = '<div id="quizContents">' +
'<div id="upperWrapper">' + PandQnum + '</div>' +
'<div id="imgPic"><img src="' + partQuiz.picsrc + '" alt="img"></div>' +
'<div class="choicesButtonWrapper">' +
'<input type="radio" name = "c1" id="1A" class="radioChoice"><div class="ChoicesButton" id="1A_">A</div>' +
'<input type="radio" name = "c1" id="1B" class="radioChoice"><div class="ChoicesButton" id="1B_">B</div>' +
'<input type="radio" name = "c1" id="1C" class="radioChoice"><div class="ChoicesButton" id="1C_">C</div>' +
'<input type="radio" name = "c1" id="1D" class="radioChoice"><div class="ChoicesButton" id="1D_">D</div>' +
'</div>' +
'<!--quizDiv--></div>';
mp3player.src = partQuiz.mp3src;
return quizDIV;
}

//Part2
function makePart2Div(No){
"use strict";
var partQuiz = new quizObj(No);
var PandQnum = setQuizModeText(No);
var quizDIV = '<div id="quizContents">' +
'<div id="upperWrapper">' + PandQnum + '</div>' +
'<div class="choicesButtonWrapper">' +
'<input type="radio" name = "c1" id="1A" class="radioChoice"><div class="ChoicesButton" id="1A_">A</div>' +
'<input type="radio" name = "c1" id="1B" class="radioChoice"><div class="ChoicesButton" id="1B_">B</div>' +
'<input type="radio" name = "c1" id="1C" class="radioChoice"><div class="ChoicesButton" id="1C_">C</div>' +
'</div>' +
'<!--quizDiv--></div>';
mp3player.src = partQuiz.mp3src;
return quizDIV;
}

//Part34
function makePart34Div(No){
	"use strict";
	var Num = No;
	var part34Quiz1 = new quizObj(Num);
	if(part34Quiz1.Section !== part34Quiz1.Number){
		part34Quiz1 = new quizObj(part34Quiz1.Section);
		Num = part34Quiz1.Number;
	}
	var part34Quiz2 = new quizObj(Num+1);
	var part34Quiz3 = new quizObj(Num+2);
	var pictxt = "";
	if(part34Quiz1.picsrc){
		pictxt = '<div id="imgPic"><img src="' + part34Quiz1.picsrc + '" alt="img"></div>';
	}
	var Choices1 = part34Quiz1.makeChoices(part34Quiz1.Choice);
	var Choices2 = part34Quiz2.makeChoices(part34Quiz2.Choice);
	var Choices3 = part34Quiz3.makeChoices(part34Quiz3.Choice);
	var PandQnum = setQuizModeText(No);
	var quizDIV = '<div id="quizContents">' +
'<div id="upperWrapper">' + PandQnum + '</div>' +
pictxt +
'<div class="NO" id="NO1">' + part34Quiz1.Number + ': ' + part34Quiz1.Mondai + '</div>' +
'<div class="choiceWrapper">' +
'<div class="labelChoice" id="1A_">' + Choices1.A + '</div>' +
'<div class="labelChoice" id="1B_">' + Choices1.B + '</div>' +
'<div class="labelChoice" id="1C_">' + Choices1.C + '</div>' +
'<div class="labelChoice" id="1D_">' + Choices1.D + '</div>' +
'<div class="choicesButtonWrapper">' +
'<input type="radio" name = "c1" id="1A" class="radioChoice"><div class="ChoicesButton" id="1A_">A</div>' +
'<input type="radio" name = "c1" id="1B" class="radioChoice"><div class="ChoicesButton" id="1B_">B</div>' +
'<input type="radio" name = "c1" id="1C" class="radioChoice"><div class="ChoicesButton" id="1C_">C</div>' +
'<input type="radio" name = "c1" id="1D" class="radioChoice"><div class="ChoicesButton" id="1D_">D</div>' +
'</div>' +
'</div>'+
'<div class="NO" id="NO2">' + part34Quiz2.Number + ': ' + part34Quiz2.Mondai + '</div>' +
'<div class="choiceWrapper">' +
'<div class="labelChoice" id="2A_">' + Choices2.A + '</div>' +
'<div class="labelChoice" id="2B_">' + Choices2.B + '</div>' +
'<div class="labelChoice" id="2C_">' + Choices2.C + '</div>' +
'<div class="labelChoice" id="2D_">' + Choices2.D + '</div>' +
'<div class="choicesButtonWrapper">' +
'<input type="radio" name = "c2" id="2A" class="radioChoice"><div class="ChoicesButton" id="2A_">A</div>' +
'<input type="radio" name = "c2" id="2B" class="radioChoice"><div class="ChoicesButton" id="2B_">B</div>' +
'<input type="radio" name = "c2" id="2C" class="radioChoice"><div class="ChoicesButton" id="2C_">C</div>' +
'<input type="radio" name = "c2" id="2D" class="radioChoice"><div class="ChoicesButton" id="2D_">D</div>' +
'</div>' +
'</div>'+
'<div class="NO" id="NO3">' + part34Quiz3.Number + ': ' + part34Quiz3.Mondai + '</div>' +
'<div class="choiceWrapper">' +
'<div class="labelChoice" id="3A_">' + Choices3.A + '</div>' +
'<div class="labelChoice" id="3B_">' + Choices3.B + '</div>' +
'<div class="labelChoice" id="3C_">' + Choices3.C + '</div>' +
'<div class="labelChoice" id="3D_">' + Choices3.D + '</div>' +
'<div class="choicesButtonWrapper">' +
'<input type="radio" name = "c3" id="3A" class="radioChoice"><div class="ChoicesButton" id="3A_">A</div>' +
'<input type="radio" name = "c3" id="3B" class="radioChoice"><div class="ChoicesButton" id="3B_">B</div>' +
'<input type="radio" name = "c3" id="3C" class="radioChoice"><div class="ChoicesButton" id="3C_">C</div>' +
'<input type="radio" name = "c3" id="3D" class="radioChoice"><div class="ChoicesButton" id="3D_">D</div>' +
'</div>' +
'</div>' +
'<!--quizDiv--></div>';
mp3player.src = part34Quiz1.mp3src;
return quizDIV;
}


function makePart5Div(No){
	"use strict";
	var partQuiz = new quizObj(No);
	var Choices = partQuiz.makeChoices(partQuiz.Choice);
	var PandQnum = setQuizModeText(No);
	var quizDIV = '<div id="quizContents">' +
'<div id="upperWrapper">' + PandQnum + '</div>' +
'<div class="NO"><span>' + partQuiz.Number + '<br>' + partQuiz.Mondai + '</div>' +
'<div class="choiceWrapper">' +
'<div class="labelChoice" id="1A_">' + Choices.A + '</div>' +
'<div class="labelChoice" id="1B_">' + Choices.B + '</div>' +
'<div class="labelChoice" id="1C_">' + Choices.C + '</div>' +
'<div class="labelChoice" id="1D_">' + Choices.D + '</div>' +
'<div class="choicesButtonWrapper">' +
'<input type="radio" name = "c1" id="1A" class="radioChoice"><div class="ChoicesButton" id="1A_">A</div>' +
'<input type="radio" name = "c1" id="1B" class="radioChoice"><div class="ChoicesButton" id="1B_">B</div>' +
'<input type="radio" name = "c1" id="1C" class="radioChoice"><div class="ChoicesButton" id="1C_">C</div>' +
'<input type="radio" name = "c1" id="1D" class="radioChoice"><div class="ChoicesButton" id="1D_">D</div>' +
'</div>' +
'</div>' +
'<!--quizDiv--></div>';
return quizDIV;
}

function makePart6Div(No){
	"use strict";
	var Num = No;
	var part6Quiz1 = new quizObj(Num);
	if(part6Quiz1.Section !== part6Quiz1.Number){
		part6Quiz1 = new quizObj(part6Quiz1.Section);
		Num = part6Quiz1.Number;
	}
	var part6Quiz2 = new quizObj(Num+1);
	var part6Quiz3 = new quizObj(Num+2);
	var part6Quiz4 = new quizObj(Num+3);
	var pictxt = '<img id="ReadingPic" src="' + part6Quiz1.picsrc + '" alt="img">';
	var Choices1 = part6Quiz1.makeChoices(part6Quiz1.Choice);
	var Choices2 = part6Quiz2.makeChoices(part6Quiz2.Choice);
	var Choices3 = part6Quiz3.makeChoices(part6Quiz3.Choice);
	var Choices4 = part6Quiz4.makeChoices(part6Quiz4.Choice);
	var PandQnum = setQuizModeText(No);
	var forTxt = '<div id="ExkaiwaForQuiz">' + part6Quiz1.Kaiwa + '</div>';

	var txtSwitch = '<input type="radio" class="forQuizRadio" name="forQuizRadio" id="JPG"><input type="radio" class="forQuizRadio" name="forQuizRadio" id="TXT">' +
	'<div class="switchWrawwper">'+
	'<div class="switchBox" id="tagJPG">画像</div>' +
	'<div class="switchBox" id="tagTXT">テキスト</div>' +
	'</div>' + 
	'<div class="quizWrapper">'+
	'<span class="quizLabel" for="JPG" id="showJPG">' + pictxt + '</span>' +
	'<span class="quizLabel" for="TXT" id="showTXT">' + forTxt + '</span>' +
	'</div>';
	var quizDIV = '<div id="quizContents">' +
'<div id="upperWrapper">' + PandQnum + '</div>' + txtSwitch;
	var choiceDIV = '<div class="NO" id="NO1">' + part6Quiz1.Number + ': ' + part6Quiz1.Mondai + '</div>' +
'<div class="choiceWrapper">' +
'<div class="labelChoice" id="1A_">' + Choices1.A + '</div>' +
'<div class="labelChoice" id="1B_">' + Choices1.B + '</div>' +
'<div class="labelChoice" id="1C_">' + Choices1.C + '</div>' +
'<div class="labelChoice" id="1D_">' + Choices1.D + '</div>' +
'<div class="choicesButtonWrapper">' +
'<input type="radio" name = "c1" id="1A" class="radioChoice"><div class="ChoicesButton" id="1A_">A</div>' +
'<input type="radio" name = "c1" id="1B" class="radioChoice"><div class="ChoicesButton" id="1B_">B</div>' +
'<input type="radio" name = "c1" id="1C" class="radioChoice"><div class="ChoicesButton" id="1C_">C</div>' +
'<input type="radio" name = "c1" id="1D" class="radioChoice"><div class="ChoicesButton" id="1D_">D</div>' +
'</div>' +
'</div>' +
'<div class="NO" id="NO2">' + part6Quiz2.Number + ': ' + part6Quiz2.Mondai + '</div>' +
'<div class="choiceWrapper">' +
'<div class="labelChoice" id="2A_">' + Choices2.A + '</div>' +
'<div class="labelChoice" id="2B_">' + Choices2.B + '</div>' +
'<div class="labelChoice" id="2C_">' + Choices2.C + '</div>' +
'<div class="labelChoice" id="2D_">' + Choices2.D + '</div>' +
'<div class="choicesButtonWrapper">' +
'<input type="radio" name = "c2" id="2A" class="radioChoice"><div class="ChoicesButton" id="2A_">A</div>' +
'<input type="radio" name = "c2" id="2B" class="radioChoice"><div class="ChoicesButton" id="2B_">B</div>' +
'<input type="radio" name = "c2" id="2C" class="radioChoice"><div class="ChoicesButton" id="2C_">C</div>' +
'<input type="radio" name = "c2" id="2D" class="radioChoice"><div class="ChoicesButton" id="2D_">D</div>' +
'</div>' +
'</div>' +
'<div class="NO" id="NO3">' + part6Quiz3.Number + ': ' + part6Quiz3.Mondai + '</div>' +
'<div class="choiceWrapper">' +
'<div class="labelChoice" id="3A_">' + Choices3.A + '</div>' +
'<div class="labelChoice" id="3B_">' + Choices3.B + '</div>' +
'<div class="labelChoice" id="3C_">' + Choices3.C + '</div>' +
'<div class="labelChoice" id="3D_">' + Choices3.D + '</div>' +
'<div class="choicesButtonWrapper">' +
'<input type="radio" name = "c3" id="3A" class="radioChoice"><div class="ChoicesButton" id="3A_">A</div>' +
'<input type="radio" name = "c3" id="3B" class="radioChoice"><div class="ChoicesButton" id="3B_">B</div>' +
'<input type="radio" name = "c3" id="3C" class="radioChoice"><div class="ChoicesButton" id="3C_">C</div>' +
'<input type="radio" name = "c3" id="3D" class="radioChoice"><div class="ChoicesButton" id="3D_">D</div>' +
'</div>' +
'</div>' +
'<div class="NO" id="NO4">' + part6Quiz4.Number + ': ' + part6Quiz4.Mondai + '</div>' +
'<div class="choiceWrapper">' +
'<div class="labelChoice" id="4A_">' + Choices4.A + '</div>' +
'<div class="labelChoice" id="4B_">' + Choices4.B + '</div>' +
'<div class="labelChoice" id="4C_">' + Choices4.C + '</div>' +
'<div class="labelChoice" id="4D_">' + Choices4.D + '</div>' +
'<div class="choicesButtonWrapper">' +
'<input type="radio" name = "c4" id="4A" class="radioChoice"><div class="ChoicesButton" id="4A_">A</div>' +
'<input type="radio" name = "c4" id="4B" class="radioChoice"><div class="ChoicesButton" id="4B_">B</div>' +
'<input type="radio" name = "c4" id="4C" class="radioChoice"><div class="ChoicesButton" id="4C_">C</div>' +
'<input type="radio" name = "c4" id="4D" class="radioChoice"><div class="ChoicesButton" id="4D_">D</div>' +
'</div>' +
'</div>' +
'<!--quizDiv--></div>';
var array = [quizDIV, choiceDIV];
return array;
}

function makePart7Div(No){
	"use strict";
	var Num = No;
	var part7Quiz1 = new quizObj(Num);
	var part7Quiz2 = new quizObj(Num+1);
	var part7Quiz3 = {};
	var part7Quiz4 = {};
	var part7Quiz5 = {};
	var Choices3 = "";
	var Choices4 = "";
	var Choices5 = "";
	var Choices1 = part7Quiz1.makeChoices(part7Quiz1.Choice);
	var Choices2 = part7Quiz2.makeChoices(part7Quiz2.Choice);

	if(part7Quiz1.Section !== part7Quiz1.Number){
		part7Quiz1 = new quizObj(part7Quiz1.Section);
		Num = part7Quiz1.Number;
	}

	var pictxt = '<div id="JPGForQUIZ"><img id="ReadingPic" src="' + part7Quiz1.picsrc + '" alt="img"></div>';

	//part7は問題数がバラバラなので、ここで問題数を調整する。
	var howmanyquiz = returnHowManyQuiz(No);
	var choicesTxt = "";
	//quizcountは次のセクションの問題番号なので、１つ問題を戻る必要がある。
	switch(howmanyquiz){
		case 3:
		part7Quiz3 = new quizObj(Num+2);
		Choices2 = part7Quiz2.makeChoices(part7Quiz2.Choice);
		Choices3 = part7Quiz3.makeChoices(part7Quiz3.Choice);
		choicesTxt = '<div class="NO" id="NO3">' + part7Quiz3.Number + ': ' + part7Quiz3.Mondai + '</div>' +
		'<div class="choiceWrapper">' +
		'<div class="labelChoice" id="3A_">' + Choices3.A + '</div>' +
		'<div class="labelChoice" id="3B_">' + Choices3.B + '</div>' +
		'<div class="labelChoice" id="3C_">' + Choices3.C + '</div>' +
		'<div class="labelChoice" id="3D_">' + Choices3.D + '</div>' +
		'<div class="choicesButtonWrapper">' +
		'<input type="radio" name = "c3" id="3A" class="radioChoice"><div class="ChoicesButton" id="3A_">A</div>' +
		'<input type="radio" name = "c3" id="3B" class="radioChoice"><div class="ChoicesButton" id="3B_">B</div>' +
		'<input type="radio" name = "c3" id="3C" class="radioChoice"><div class="ChoicesButton" id="3C_">C</div>' +
		'<input type="radio" name = "c3" id="3D" class="radioChoice"><div class="ChoicesButton" id="3D_">D</div>' +
		'</div>' +
		'</div>';
		break;

		case 4:
		part7Quiz3 = new quizObj(Num+2);
		part7Quiz4 = new quizObj(Num+3);
		Choices2 = part7Quiz2.makeChoices(part7Quiz2.Choice);
		Choices3 = part7Quiz3.makeChoices(part7Quiz3.Choice);
		Choices4 = part7Quiz4.makeChoices(part7Quiz4.Choice);
		choicesTxt = '<div class="NO" id="NO3">' + part7Quiz3.Number + ': ' + part7Quiz3.Mondai + '</div>' +
		'<div class="choiceWrapper">' +
		'<div class="labelChoice" id="3A_">' + Choices3.A + '</div>' +
		'<div class="labelChoice" id="3B_">' + Choices3.B + '</div>' +
		'<div class="labelChoice" id="3C_">' + Choices3.C + '</div>' +
		'<div class="labelChoice" id="3D_">' + Choices3.D + '</div>' +
		'<div class="choicesButtonWrapper">' +
		'<input type="radio" name = "c3" id="3A" class="radioChoice"><div class="ChoicesButton" id="3A_">A</div>' +
		'<input type="radio" name = "c3" id="3B" class="radioChoice"><div class="ChoicesButton" id="3B_">B</div>' +
		'<input type="radio" name = "c3" id="3C" class="radioChoice"><div class="ChoicesButton" id="3C_">C</div>' +
		'<input type="radio" name = "c3" id="3D" class="radioChoice"><div class="ChoicesButton" id="3D_">D</div>' +
		'</div>' +
		'</div>' + 
		'<div class="NO" id="NO4">' + part7Quiz4.Number + ': ' + part7Quiz4.Mondai + '</div>' +
		'<div class="choiceWrapper">' +
		'<div class="labelChoice" id="4A_">' + Choices4.A + '</div>' +
		'<div class="labelChoice" id="4B_">' + Choices4.B + '</div>' +
		'<div class="labelChoice" id="4C_">' + Choices4.C + '</div>' +
		'<div class="labelChoice" id="4D_">' + Choices4.D + '</div>' +
		'<div class="choicesButtonWrapper">' +
		'<input type="radio" name = "c4" id="4A" class="radioChoice"><div class="ChoicesButton" id="4A_">A</div>' +
		'<input type="radio" name = "c4" id="4B" class="radioChoice"><div class="ChoicesButton" id="4B_">B</div>' +
		'<input type="radio" name = "c4" id="4C" class="radioChoice"><div class="ChoicesButton" id="4C_">C</div>' +
		'<input type="radio" name = "c4" id="4D" class="radioChoice"><div class="ChoicesButton" id="4D_">D</div>' +
		'</div>' +
		'</div>';
		break;

		case 5:
		part7Quiz3 = new quizObj(Num+2);
		part7Quiz4 = new quizObj(Num+3);
		part7Quiz5 = new quizObj(Num+4);
		Choices3 = part7Quiz3.makeChoices(part7Quiz3.Choice);
		Choices4 = part7Quiz4.makeChoices(part7Quiz4.Choice);
		Choices5 = part7Quiz5.makeChoices(part7Quiz5.Choice);
		choicesTxt = '<div class="NO" id="NO3">' + part7Quiz3.Number + ': ' + part7Quiz3.Mondai + '</div>' +
		'<div class="choiceWrapper">' +
		'<div class="labelChoice" id="3A_">' + Choices3.A + '</div>' +
		'<div class="labelChoice" id="3B_">' + Choices3.B + '</div>' +
		'<div class="labelChoice" id="3C_">' + Choices3.C + '</div>' +
		'<div class="labelChoice" id="3D_">' + Choices3.D + '</div>' +
		'<div class="choicesButtonWrapper">' +
		'<input type="radio" name = "c3" id="3A" class="radioChoice"><div class="ChoicesButton" id="3A_">A</div>' +
		'<input type="radio" name = "c3" id="3B" class="radioChoice"><div class="ChoicesButton" id="3B_">B</div>' +
		'<input type="radio" name = "c3" id="3C" class="radioChoice"><div class="ChoicesButton" id="3C_">C</div>' +
		'<input type="radio" name = "c3" id="3D" class="radioChoice"><div class="ChoicesButton" id="3D_">D</div>' +
		'</div>' +
		'</div>' + 
		'<div class="NO" id="NO4">' + part7Quiz4.Number + ': ' + part7Quiz4.Mondai + '</div>' +
		'<div class="choiceWrapper">' +
		'<div class="labelChoice" id="4A_">' + Choices4.A + '</div>' +
		'<div class="labelChoice" id="4B_">' + Choices4.B + '</div>' +
		'<div class="labelChoice" id="4C_">' + Choices4.C + '</div>' +
		'<div class="labelChoice" id="4D_">' + Choices4.D + '</div>' +
		'<div class="choicesButtonWrapper">' +
		'<input type="radio" name = "c4" id="4A" class="radioChoice"><div class="ChoicesButton" id="4A_">A</div>' +
		'<input type="radio" name = "c4" id="4B" class="radioChoice"><div class="ChoicesButton" id="4B_">B</div>' +
		'<input type="radio" name = "c4" id="4C" class="radioChoice"><div class="ChoicesButton" id="4C_">C</div>' +
		'<input type="radio" name = "c4" id="4D" class="radioChoice"><div class="ChoicesButton" id="4D_">D</div>' +
		'</div>' +
		'</div>' + 
		'<div class="NO" id="NO5">' + part7Quiz5.Number + ': ' + part7Quiz5.Mondai + '</div>' +
		'<div class="choiceWrapper">' +
		'<div class="labelChoice" id="5A_">' + Choices5.A + '</div>' +
		'<div class="labelChoice" id="5B_">' + Choices5.B + '</div>' +
		'<div class="labelChoice" id="5C_">' + Choices5.C + '</div>' +
		'<div class="labelChoice" id="5D_">' + Choices5.D + '</div>' +
		'<div class="choicesButtonWrapper">' +
		'<input type="radio" name = "c5" id="5A" class="radioChoice"><div class="ChoicesButton" id="5A_">A</div>' +
		'<input type="radio" name = "c5" id="5B" class="radioChoice"><div class="ChoicesButton" id="5B_">B</div>' +
		'<input type="radio" name = "c5" id="5C" class="radioChoice"><div class="ChoicesButton" id="5C_">C</div>' +
		'<input type="radio" name = "c5" id="5D" class="radioChoice"><div class="ChoicesButton" id="5D_">D</div>' +
		'</div>' +
		'</div>';
		break;
	}
	var PandQnum = setQuizModeText(No);

	var forTxt = '<div id="ExkaiwaForQuiz">' + part7Quiz1.Kaiwa + '</div>';
	var txtSwitch = '<input type="radio" class="forQuizRadio" name="forQuizRadio" id="JPG"><input type="radio" class="forQuizRadio" name="forQuizRadio" id="TXT">' +
	'<div class="switchWrawwper">'+
	'<div class="switchBox" id="tagJPG">画像</div>' +
	'<div class="switchBox" id="tagTXT">テキスト</div>' +
	'</div>' + 
	'<div class="quizWrapper">'+
	'<span class="quizLabel" for="JPG" id="showJPG">' + pictxt + '</span>' +
	'<span class="quizLabel" for="TXT" id="showTXT">' + forTxt + '</span>' +
	'</div>';
	var quizDIV = '<div id="quizContents">' +
'<div id="upperWrapper">' + PandQnum + '</div>' + txtSwitch;
var chtxt ='<div class="NO" id="NO1">' + part7Quiz1.Number + ': ' + part7Quiz1.Mondai + '</div>' +
'<div class="choiceWrapper">' +
'<div class="labelChoice" id="1A_">' + Choices1.A + '</div>' +
'<div class="labelChoice" id="1B_">' + Choices1.B + '</div>' +
'<div class="labelChoice" id="1C_">' + Choices1.C + '</div>' +
'<div class="labelChoice" id="1D_">' + Choices1.D + '</div>' +
'<div class="choicesButtonWrapper">' +
'<input type="radio" name = "c1" id="1A" class="radioChoice"><div class="ChoicesButton" id="1A_">A</div>' +
'<input type="radio" name = "c1" id="1B" class="radioChoice"><div class="ChoicesButton" id="1B_">B</div>' +
'<input type="radio" name = "c1" id="1C" class="radioChoice"><div class="ChoicesButton" id="1C_">C</div>' +
'<input type="radio" name = "c1" id="1D" class="radioChoice"><div class="ChoicesButton" id="1D_">D</div>' +
'</div>' +
'</div>' +
'<div class="NO" id="NO2">' + part7Quiz2.Number + ': ' + part7Quiz2.Mondai + '</div>' +
'<div class="choiceWrapper">' +
'<div class="labelChoice" id="2A_">' + Choices2.A + '</div>' +
'<div class="labelChoice" id="2B_">' + Choices2.B + '</div>' +
'<div class="labelChoice" id="2C_">' + Choices2.C + '</div>' +
'<div class="labelChoice" id="2D_">' + Choices2.D + '</div>' +
'<div class="choicesButtonWrapper">' +
'<input type="radio" name = "c2" id="2A" class="radioChoice"><div class="ChoicesButton" id="2A_">A</div>' +
'<input type="radio" name = "c2" id="2B" class="radioChoice"><div class="ChoicesButton" id="2B_">B</div>' +
'<input type="radio" name = "c2" id="2C" class="radioChoice"><div class="ChoicesButton" id="2C_">C</div>' +
'<input type="radio" name = "c2" id="2D" class="radioChoice"><div class="ChoicesButton" id="2D_">D</div>' +
'</div>' +
'</div>' +  choicesTxt +
'<!--quizDiv--></div>';
var arr = [quizDIV, chtxt];
return arr;
}


//解説ページ
function makeEXDiv(No){
	"use strict";
	var part = Number(quizArray[No].Part);
	var exDiv =  "";
	switch (part){
		case 1: case 2: case 5:
		exDiv = makeEXDivFor125(No);
		break;

		case 3: case 4:
		exDiv = makeEXDivFor34(No);
		break;

		case 6:
		exDiv = makeEXDivFor6(No);
		break;

		case 7:
		exDiv = makeEXDivFor7(No);
		break;
	}
	return exDiv;
}

//125は複数問題がないので1問用
function makeEXDivFor125(No){
	"use strict";
	var ulTxt = '<div class="kaisetuupperWrapper"><div></div><div class="modalRightDiv" id="closeButton">close</div></div>' +
		'<div class="expMenu">'+
		'<div class="expMenues" id="MQuizScript">選択肢</div>'+
		'<div class="expMenues" id="MQuizKaisetsu">解説</div>'+
		'</div>';
	var closeDiv = '<div class = "lowerContentsWrapper" id = "expContentsWrapper"></div>';
	var exDiv =  ulTxt + closeDiv;
	return exDiv;
}

//34は複数問題なので３問用
function makeEXDivFor34(No){
	"use strict";
	var selectQnum1 = Number(quizArray[No].Section);
	var selectQnum2 = selectQnum1+1;
	var selectQnum3 = selectQnum1+2;		
	var partTxt = '<div class="questionTabWrap"><input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum1 + '"><div class="qtab">' + selectQnum1 + '</div>' +
		'<input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum2 + '"><div class="qtab">' + selectQnum2 + '</div>' +
		'<input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum3 + '"><div class="qtab">' + selectQnum3 + '</div></div>';

	var ulTxt = '<div class="kaisetuupperWrapper"><div></div><div class="modalRightDiv" id="closeButton">close</div></div>' +
		partTxt +
		'<div class="expMenu">'+
		'<div class="expMenues" id="MQuizScript">選択肢</div>'+
		'<div class="expMenues" id="MQuizKaiwa">会話</div>'+
		'<div class="expMenues" id="MQuizKaisetsu">解説</div>'+
		'</div>';
	var closeDiv = '<div class = "lowerContentsWrapper" id = "expContentsWrapper"></div>';
	var exDiv =  ulTxt + closeDiv;
	return exDiv;
}
	
function makeEXDivFor6(No){
	"use strict";
	var selectQnum1 = Number(quizArray[No].Section);
	var selectQnum2 = selectQnum1+1;
	var selectQnum3 = selectQnum1+2;
	var selectQnum4 = selectQnum1+3;
	var partTxt = '<div class="questionTabWrap"><input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum1 + '"><div class="qtab">' + selectQnum1 + '</div>' +
		'<input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum2 + '"><div class="qtab">' + selectQnum2 + '</div>' +
		'<input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum3 + '"><div class="qtab">' + selectQnum3 + '</div>' +
		'<input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum4 + '"><div class="qtab">' + selectQnum4 + '</div></div>';
		var ulTxt = '<div class="kaisetuupperWrapper"><div></div><div class="modalRightDiv" id="closeButton">close</div></div>' +
		partTxt +
		'<div class="expMenu">'+
		'<div class="expMenues" id="MQuizScript">選択肢</div>'+
		'<div class="expMenues" id="MQuizKaiwa">会話・長文</div>'+
		'<div class="expMenues" id="MQuizKaisetsu">解説</div>'+
		'</div>';
	var closeDiv = '<div class = "lowerContentsWrapper" id = "expContentsWrapper"></div>';
	var exDiv =  ulTxt + closeDiv;
	return exDiv;
}

//パート7で何問あるかを数える時に使う。
function returnHowManyQuiz(No){
	"use strict";
	//2問は絶対あるので2からスタート
	var howmanyquiz = 1;
	var tempQuiz = No+1;
	if(quizArray[No].Section !== 196 ){
		for (var i = 0; quizArray[tempQuiz+i].Section === No;i++){
			howmanyquiz++;
		}
	}else{
		howmanyquiz = 5;
	}
	return howmanyquiz;
}

//7は問題数が異なるのでこれで調整する。
function makeEXDivFor7(No){
	"use strict";
	var litext3 = "";
	var litext4 = "";
	var litext5 = "";
	var selectQnum1 = Number(quizArray[No].Section);
	var selectQnum2 = selectQnum1+1;
	var	selectQnum3 = selectQnum1+2;
	var	selectQnum4 = selectQnum1+3;
	var	selectQnum5 = selectQnum1+4;
	var howmanyquiz = returnHowManyQuiz(selectQnum1);
	switch (howmanyquiz){
		case 3:
		litext3 = '<input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum3 + '"><div class="qtab">' + selectQnum3 + '</div>';
		break;

		case 4:
		litext3 = '<input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum3 + '"><div class="qtab">' + selectQnum3 + '</div>';
		litext4 = '<input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum4 + '"><div class="qtab">' + selectQnum4 + '</div>';
		break;

		case 5:
		litext3 = '<input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum3 + '"><div class="qtab">' + selectQnum3 + '</div>';
		litext4 = '<input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum4 + '"><div class="qtab">' + selectQnum4 + '</div>';
		litext4 = '<input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum5 + '"><div class="qtab">' + selectQnum5 + '</div>';
		break;
	}
	var partTxt = '<div class="questionTabWrap"><input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum1 + '"><div class="qtab">' + selectQnum1 + '</div>' +
		'<input type="radio" name="quizTab" class="quizTab" id="Tmcu' + selectQnum2 + '"><div class="qtab">' + selectQnum2 + '</div>' +
		litext3 +
		litext4 +
		litext5 +
		'</div>';
	var ulTxt = '<div class="kaisetuupperWrapper"><div></div><div class="modalRightDiv" id="closeButton">close</div></div>' +
	 partTxt  +
		'<div class="upperContentsWrapper"><div class="expMenu">'+
		'<div class="expMenues" id="MQuizScript">選択肢</div>'+
		'<div class="expMenues" id="MQuizKaiwa">会話・長文</div>'+
		'<div class="expMenues" id="MQuizKaisetsu">解説</div>'+
		'</div></div>';
	var closeDiv = '<div class = "lowerContentsWrapper" id = "expContentsWrapper"></div>';
	var exDiv =  ulTxt + closeDiv;
	return exDiv;
}

//解説の下の欄
function makeExDivTxt(No){
	"use strict";
	var obj = new quizObj(No,1);

	var audioTxt = (obj.mp3src ? '<div id ="audio"><audio id="modalPlayer" class="mp3" controls="controls" src="' + obj.mp3src + '" > </audio></div>' : '');
	var part = quizArray[No].Part;
	var pictxt = "";
	var pictxtJ = "";
	switch(part){
		case 1: case 3: case 4:
		pictxt = (obj.picsrc ? '<div id="imgPic"><img src=' + obj.picsrc + ' ></div>' : '');
		break;

		case 1: case 3: case 4:
		pictxt = (obj.picsrc ? '<div id="imgPic"><img src=' + obj.picsrc + ' ></div>' : '');
		pictxtJ = (obj.picsrc ? '<div id="imgPic"><img src=' + obj.picsrcJ + ' ></div>' : '');
		break;

		default:
		pictxt ="";
		pictxtJ ="";
		break;
	}
	var goNext = "";
	var resultTxt = "";
	var resultImg = "";	
	//一問一答用に「次へ」のボタンを押す
	var arr = IchiChecker(No);
	resultTxt = makeResultTxt(arr);
	if(arr.result === 1){resultImg = '<div class="maruBatsu"><div class="Answer_circle"></div></div>';}else{resultImg = '<div class="maruBatsu"><div class="Answer_batsu"></div></div>';}
	var last = quizNumberData[part].last;
	if(userDataArray.mode==="Ichi"){
		if(part === 1||part === 2 || part === 5 ){
			if(No === last){ goNext = '<div id = "iconGoNext" class="button">次パート</div>';}else{goNext = '<div id = "iconGoNext" class="button">次へ</div>';}
		}else if(part === 7){
			if(No > 195){ goNext = '';}else{goNext = '<div id = "iconGoNext" class="button">次へ</div>';}
		}else{
			if(quizArray[last].Section===quizArray[No].Section){goNext = '<div id = "iconGoNext" class="button">次パート</div>';}else{goNext = '<div id = "iconGoNext" class="button">次へ</div>';}
		}
	}
	//解説の<br>を<p>で分割
	//解説
	var exparr = obj.Expranation.split("<br>"); 
	var expTxt = "";
	for (var t = 0;t<exparr.length;t++){
		expTxt += "<p>" +  exparr[t] + "</p>";
	}
	//会話英文
	var kaiwaarr = obj.Kaiwa.split("<br>");
	var kaiwaTxt = "";
	for (var p = 0;p<kaiwaarr.length;p++){
		if(part===3){
			kaiwaTxt += "<p class='part3'>" +  kaiwaarr[p] + "</p>";
		}else{
			kaiwaTxt += "<p'>" +  kaiwaarr[p] + "</p>";
		}
	}
	//会話和文
	var kaiwaJarr = obj.KYaku.split("<br>");
	var kaiwaJTxt = pictxtJ + "";
	for (var z = 0;z<kaiwaJarr.length;z++){
		if(part===3){
			kaiwaJTxt += "<p class='part3J'>" +  kaiwaJarr[z] + "</p>";
		}else{
			kaiwaJTxt += "<p>" +  kaiwaJarr[z] + "</p>";
		}
	}
	//ここで下の解説を作る
	var text = '<div class ="listCellWrapper"><div class="listLeftDiv"><div class="RQNo">Q'+ obj.Number + "</div>"+ resultImg + resultTxt + '</div>' + 
	'<div class="spacer"></div>' + '<div class="listRightDiv">' + goNext + '</div></div>' +
	audioTxt +
	pictxt +
	'<div class="modalContents" id="QuizScript">'+
	'<div id="Exmondai">' + obj.Mondai + '</div>'+
	'<div id="Exchoices">'+ obj.Choice +'</div>'+
	'<div id="Exyaku">'+ obj.CYaku +'</div>'+
	'<!--ID:QuizScript--></div>'+
	'<div class="modalContents" id="QuizKaiwa">'+
	'<div id="Exkaiwa">'+ kaiwaTxt +'</div>' +
	'<div id="Exkyaku">'+ kaiwaJTxt +'</div>' +
	'<!--ID:Quizkaiwa--></div>'+
	'<div class="modalContents" id="QuizKaisetsu">'+
	'<div id="EXexp">' + expTxt + '</div>' +  
	'<!--ID:kaisetsu--></div>';
	return text;

	function makeResultTxt(){
		var txt = "";
		if(arr.result === 1){
			txt += '<div class="QuizAns"><span class="iconAns">正解</span>' + arr.choice + '</div>';
		}else{
			var choiceTxt;
			if(arr.choice==="E"){choiceTxt ="未";}else{choiceTxt =arr.choice;}
			txt += '<div class="QuizAns"><span class="iconAns">正解</span>' + quizArray[No].Answer + '［' + choiceTxt + '］</div>';
		}
		return txt;
	}

	function IchiChecker(num){
		var arr = [];
		if(ansResult[num]!==undefined){
			arr= {choice:ansResult[num][0],result:ansResult[num][1]};
		}else{
			arr= {choice:"E",result:0};
		}
		return arr;
	}


}


//MY問題集の一覧ページ
function MakeMyPage(){
	"use strict";
	//最初のパートがわからないのでそれだけ入れる。
	var part = 0;
	var mainTxt = "";
	var PartTextForTable = '<div id="listIndex"><div>登録した問題</div></div><div class="listPartIndex">Part ' + part + '</div>';
	var checkNumArr = [];
	for(var i = 1; i <=200; i++){
		if(MyPageDB[i].check){
			var divtxt;

			if (part !== MyPageDB[i].part){
				part = MyPageDB[i].part;
				PartTextForTable = '<div class="listPartIndex">Part ' + part + '</div>';
				divtxt =  PartTextForTable + '<div id="R' + i + '" class="listCellWrapper">' +
				'<div class="listLeftDiv"><div class="RQNo">Q'+ i + '</div></div><div class="spacer"></div>' +
				'<div class="listRightDiv"><div class="button showExp" id="' + i + '">問題</div><!--listRightDiv--></div>' +
				'<!--divwrap--></div>';
			}else{
				divtxt =  '<div id="R' + i + '" class="listCellWrapper">' +
				'<div class="listLeftDiv"><div class="RQNo">Q'+ i + '</div></div><div class="spacer"></div>' +
				'<div class="listRightDiv"><div class="button showExp" id="' + i + '">問題</div><!--listRightDiv--></div>' +
				'<!--divwrap--></div>';
			}

			mainTxt += divtxt;
			checkNumArr.push(i);
		}
	}
	if(checkNumArr.length<1){
		mainTxt = '<div id="listIndex"><div>登録した問題</div></div><div class="listPartIndex">Part</div>' +
				'<div id="R0" class="listCellWrapper"><div class="listLeftDiv">' +
				'<div class="RQNo">登録された問題はまだありません</div><!--listLeftDiv--></div>' +
				'<div class="listRightDiv"><!--listRightDiv--></div>' +
				'<!--divwrap--></div>'+
				'<div></div>';
	}
	var templateMYpage = '<h2>マイ練習帳</h2>' +
	'<h3>問題を選択し自分だけの問題集を作ることができます。</h3>' +
	'<div class="basicPassages">下が現在登録されている問題の一覧です。問題を始める場合は『問題を始める』ボタンを、登録されている問題の追加・削除をする場合は『編集する』のボタンを押してください。</div>' +
	'<div class="basicPassages"><div id="startMyPage" class="button" style="display:inline-block;">問題を始める</div>　<div id="editQnum" class="button" style="display:inline-block;">編集する</div></div>' +
	mainTxt;

	document.getElementById('wrapMain').innerHTML = templateMYpage;
}


//アラートモーダルを作る
function makeAlertModal(elm,date){
	"use strict";
	if(mp3player.paused ==="false"||mp3player.onplaying){
		if(mp3player.src !== ""){
			checkPlayer("pause");
		}
	}
	var txt ='';
	switch (elm){
		case "mypage":
		txt += '<div class="modalTitle">Caution</div><div>';
		txt += '<div class="alertModalContents">登録されている問題がありません。<br>『編集をする』ボタンをおして問題を登録してください。</div>' + 
			   '<div class="alertModalContents"><span class="button" id="switchAlertModal">"閉じる"</span></div>';
		break;
		//ちょっと面倒なので、あとで設定します。
		case "Mogi":
		txt += '<div class="modalTitle">模擬問題モード</div>'　+
		'<div class="alertModalContents">前回途中で終了した模擬問題のデータがあります。前回のデータから始めますか？<br>いいえを選んだ場合、前回のデータはリセットされます。</div>'+
		'<div class="alertModalContents"><div class="button" id="MogiYes">はい</div>　　<div class="button" id="MogiNo">いいえ</div></div>';
		break;

		//データを削除する
		case "data":
		txt += '<div class="modalTitle">データ削除</div>'　+
		'<div class="alertModalContents">選択したデータを削除します。データの復元はできません。<br>よろしいですか？</div>'+
		'<div class="alertModalContents"><div class="button" id="dataYes">はい</div>　　<div class="button" id="switchAlertModal">いいえ</div></div>';
		break;

		//データ削除終了
		case "deleteComplete":
		txt += '<div class="alertModalContents">選択したデータを削除しました。</div><div class="alertModalContents"><div class="button" id="dataDeleteCompleteFinish">閉じる</div>';
		break;
		

		case "StartPage":
		var part = userDataArray.part;
		txt += '<div class="modalTitle">問題を始めましょう</div><div>';
		if(part < 5){
			txt += '<div class="alertModalContents">これから問題を始めます。下のスタートボタンを押してください。<br>音声が流れ問題がスタートします。<br>リスニング問題では一度問題が始まると自動で次の問題へ移行します。<br>' +
			'音声が始まらない場合は、左上の『PLAY』ボタンを押してください。</div>' +
			'<div class="alertModalContents"><div class="button" id="switchAlertModal">START</div></div>';
		}else{
			txt += '<div class="alertModalContents">これから問題を始めます。下の『閉じる』ボタンを押して問題をスタートさせてください。<br>リーディングパートは解答を終えた後、下のメニューの次へを押し問題を進めてください。<br>タイマーの設定は自由です。ご自分の都合のよい時間に設定をしてください。</div>' +
			'<div class="alertModalContents"><div class="button" id="switchAlertModal" style="display:inline-block">"START"</div></div>';
		}
		break;

		case "timer":
		txt += '<div class="modalTitle">タイマー設定</div>' +
		'<div class="alertModalContents">下の目安を参考にタイマーの設定をしましょう。<br>リーディング用タイマー設定<br>時間設定の目安<br>リーディングパート全体：75分<br>Part 5:10分<br>Part 6:10分<br>Part 7:55分</div>' +
		'<div class="alertModalContents"><select id = "timerSelect_ten"></select><select id = "timerSelect"></select>　分</div>' +
		'<div class="alertModalContents"><div class="button" id="timerSetupClose">セットして閉じる</div></div>';
		break;

		case "timeOut":
		txt += '<div class="modalTitle">制限時間終了</div>' +
		'<div class="alertModalContents">設定した時間が終了しました。この問題までで解答を終了する場合は『採点する』を、問題を続ける場合は『続ける』を押してください。</div>' +
		'<div class="alertModalContents"><div class="button" id= "timer_makeAnswer">採点する</div><div class="button" id = "timer_Continue">続ける</div></div>';
		break;

	}

 	var alertDIVWrapper = document.getElementById("alertModalWrapper");
 	var alertDIV = document.getElementById("alertModal");

	alertDIV.innerHTML = txt;
	if(elm === "timer"){
		var userTime = userDataArray.timer;
		var time_;
		var time_ten;
		if(userTime<10){
			time_ten = 0;
			time_ = userTime;
		}else{
			time_ten = parseInt(userTime/10);
			time_ = userTime-time_ten*10;
		}

		var selectId_ten = document.getElementById('timerSelect_ten');
		for(var i=0;i<=9;i++){
			var option = document.createElement('option');
			option.innerHTML = i;
			selectId_ten.appendChild(option);
		}
		selectId_ten.value = time_ten;
		var selectId = document.getElementById('timerSelect');
		for(var c=0;c<=9;c++){
			var option_ = document.createElement('option');
			option_.innerHTML = c;
			selectId.appendChild(option_);
		}
		selectId.value = time_;
	}
	alertDIV.style.height = "auto";
	alertDIV.style.visibility = 'visible';



	fadeIn(alertDIVWrapper);
	alertDIVWrapper.style.display="block";
	scrollObj.scrollLock(1); 
}

function closeAlert(element){
	"use strict";
	if(document.getElementById('timerSetting').checked){
		document.getElementById('timerSetting').checked=false;
	}
	event.stopPropagation();

	var el = document.getElementById('alertModalWrapper');
	fadeOut(el);
	document.getElementById("alertModal").innerHTML="";
	document.getElementById("alertModalWrapper").style.display="none";
	scrollObj.scrollLock(0);
}


function StartQuizForMybook_setup(array){
	"use strict";
	if(array.length < 1){
		makeAlertModal("mypage");
	}else{
		StartQuizForMybook(1);
	}
}

//My問題集の編集ページ
function showCheckBoxList(){
	"use strict";
	var part = 1;
	var txt = '<div class="listPartIndex">Part 1</div>';
	var checkNumArr = [];

	for(var i=1; i<200;i++){
		if(part !== Number(MyPageDB[i].part)){
			part = MyPageDB[i].part;
			txt += '<div class="listPartIndex">Part ' + MyPageDB[i].part + '</div>';
		}
		txt += '<div id="R' + i + '" class="listCellWrapper">' +
			'<div class="listLeftDiv">' +
			'<input type="checkbox" name="check" class="result_checkbox" id="check_' + i + '">' +
			'<div class="RQNo">Q'+ i + '</div>' +
			'<!--listLeftDiv--></div><div class="spacer"></div>' +
			'<div class="listRightDiv"><div class="button showExp" id="' + i + '">問題</div></div>' +
			'<!--divwrap--></div>';
		if(MyPageDB[i].check === 1){
			checkNumArr.push(i);
		}
	}
		txt += '<div id="R200" class="listCellWrapper">' +
			'<div class="listLeftDiv">' +
			'<input type="checkbox" name="check" class="result_checkbox" id="check_200">' +
			'<div class="RQNo">Q200</div>' +
			'<!--listLeftDiv--></div><div class="spacer"></div>' +
			'<div class="listRightDiv"><div class="button showExp" id="200">問題</div></div>' +
			'<!--divwrap--></div>';
		txt += '<div id="R201" class="listCellWrapper"></div>';

	if(MyPageDB[200].check === 1){checkNumArr.push(200);}				

	var templateRegList = '<div id="listIndex"><div>問題一覧</div></div><p>登録・削除したい問題のチェックをオン・オフしてください。問題が登録・削除されます。</p>' +
	'<div class="basicPassages"><div id="backConfirmPage" class="button" style="display:inline-block;">一覧ページに戻る</div></div>' +
	txt;
	document.getElementById('wrapMain').innerHTML = templateRegList;
	for(var c in checkNumArr){
		if(checkNumArr.hasOwnProperty(c)){
			document.getElementById("check_"+checkNumArr[c]).checked = true;
		}
	}
}

function checkMYQuizDB(){
	"use strict";
	var arr = [];
	for(var i=1; i<200;i++){
		if(MyPageDB[i].check === 1){
			arr.push(i);
		}
	}
	if(MyPageDB[200].check === 1){arr.push(200);}
	return arr;
}

//MY問題集の一覧ページ
function MakeScorePage(){
	"use strict";
	webRecord.push({page:"score",date:""});

	//最初のパートがわからないのでそれだけ入れる。
	var mainTxt = '<div id="listIndex"><div>学習記録</div></div>';

	var dbarr = MyScoreDB.arr;
	for(var i in dbarr){
		if(dbarr.hasOwnProperty(i)){
			var date = ""+dbarr[i].id;
			var sMode;
			if(dbarr[i].mode==="Mogi"){
				sMode = "模擬";
			}else{
				sMode = "Part ";
			}
			var sPart;
			if(sMode==="模擬"){
				sPart = "";
			}else{
				sPart = dbarr[i].part;
			}

			var sAns = dbarr[i].ans;
			var resultScore = MyScoreDB.checkHowManyAns(sAns);
			var txt = MyScoreDB.makeCalDB(date);


			var divtxt =  '<div id="' + date + '" class="listCellWrapper">' +
			'<div class="listLeftDiv">' +
			'<div class="scoreDate">'+ txt +'<br>'+ sMode + sPart + '　' + resultScore + '</div>' +
			'<!--lsitLeftDiv--></div><div class="spacer"></div>' +
			'<div class="listRightDiv"><span class="button showScore" id="' + date + '">詳細</span><!--listRightDiv--></div>' +
			'<!--listCellWrapper--></div>';

			mainTxt += divtxt;
		}
	}
	var templateMYpage = '<h2>学習記録</h2>' +
	'<h3>これまでの学習記録です。</h3>' +
	'<div class="basicPassages">学習記録は模擬問題モードとパート別攻略モードだけ記録されます。全問未解答だった場合は記録されません。<br>下が現在登録されている記録の一覧です。どの問題を正解したのか、または不正解だったのかは『詳細』のボタンを押してください。</div>' +
	mainTxt;
	var arr1 = document.getElementsByClassName("showScore");
	//スクロール位置を戻します。
	document.getElementById("wrapMain").scrollTop = 0;
	document.getElementById('wrapMain').innerHTML = templateMYpage;
}

function showScore(id, from){
	"use strict";

	var score = 0;
	var smode = MyScoreDB.idArr[id].mode;
	var spart;
	if(smode==="Mogi"){
		spart = 1;
	}else{
		spart = MyScoreDB.idArr[id].part;
	}
	var answer =  MyScoreDB.idArr[id].ans;
	var dateTxt = MyScoreDB.makeCalDB(""+id);
	var mogiArr = [];
	var infoA = checkAns(answer);
	//scoreの表を作成　点数とグラフ
	//各問題のoverview（詳細）を作成
	var mainDiv = makeOverviewDiv(answer);
	var scoreOverviewDiv = makeScorePage(infoA);

	var chartRadar = makeChartArr(smode);
	//ここでdivをインサートする
	insertScoreOverview();



	//詳細情報に必要なデータを配列にしてリターンする
	function checkAns(txt){
		var scoreInfo = {"date":id, "Mode":smode, "CA":0, "CAPP":0, "CAP":{1:0, 2:0, 3:0, 4:0, 5:0, 6:0,7:0}};
		var arr = txt.split("@");
		var NumOfQuiz = arr.length;
		var correctAns = 0;
		var checkNumArr = [];
		var count = 0;
		var QuestionsNum = 0;
		for(var i=0;i<arr.length;i++){
			var t = arr[i];
			var q = Number(t.slice(0,-2));
			var ans = t.slice(-2).slice(0,1);
			var boo = Number(t.slice(-1));
			var txt2 = "";
			QuestionsNum++;
			if(smode==="Mogi"){
				if(quizArray[i+1].Part !== spart){
					count = 0;
					QuestionsNum = 0;
					spart = quizArray[i+1].Part;
				}
			}
			if(boo){
				scoreInfo.CAP[spart]++; 
				correctAns++;
				count++;
			}
			if(smode==="Mogi"){
				if(i+1===200){
					count = 0;
					QuestionsNum = 0;
				}
			}
		}
		score = Math.round(correctAns/NumOfQuiz * 100);
		scoreInfo.CAPP = score;
		scoreInfo.CA = correctAns;
		return scoreInfo;
	}
	
	//各問題の正解と不正解を一覧にする。
	function makeOverviewDiv(txt){
	var mainTxt = '';
		var arr = txt.split("@");
		var NumOfQuiz = arr.length;
		var correctAns = 0;
		var checkNumArr = [];
		var PartTextForTable = "";
		var count = 0;
		var QuestionsNum = 0;
		for(var i=0;i<arr.length;i++){
			var t = arr[i];
			var q = Number(t.slice(0,-2));
			var ans = t.slice(-2).slice(0,1);
			var boo = Number(t.slice(-1));
			var txt2 = "";
			QuestionsNum++;
			if(smode==="Mogi"){
				if(quizArray[i+1].Part !== spart){
					mogiArr[spart]= [count,QuestionsNum];
					count = 0;
					QuestionsNum = 0;
					spart = quizArray[i+1].Part;
					PartTextForTable = '<div class="listPartIndex">Part ' + spart + '</div>';
				}else{
					PartTextForTable = "";
				}
			}
			if(boo){
				txt2 = '<div class="RQNo">Q' + q + '</div><div class="maruBatsu"><div class="Answer_circle"></div></div>' + '<div class="QuizAns"><span class="iconAns">正解</span>' + ans + '</div>';
				correctAns++;
				count++;
			}else{
				var cA =quizArray[q].Answer;
				if(ans !== "E"){
					txt2 = '<div class="RQNo">Q' + q + '</div><div class="maruBatsu"><div class="Answer_batsu"></div></div><div class="QuizAns"><span class="iconAns">正解</span>' + cA + '［' + ans + '］</div>';
				}else{
					txt2 = '<div class="RQNo">Q' + q + '</div><div class="maruBatsu">未</div><div class="QuizAns"><span class="iconAns">正解</span>' + cA + '</div>';
				}
			}
			var divtxt =  PartTextForTable + '<div id="R' + q + '" class="listCellWrapper">' +
			'<div class="listLeftDiv">' +
			'<input type="checkbox" class="result_checkbox" id="check_' + q + '">' +
			txt2 +
			'</div><div class="spacer"></div>' +
			'<div class="listRightDiv">' +
			'<div class="button showExp" id="' + q + '">解説</div>' +
			'<!--listRightDiv--></div>' +
			'<!--result--></div>';
			mainTxt += divtxt;
			if(MyPageDB[q].check===1){
				checkNumArr.push(q);
			}
			if(smode==="Mogi"){
				if(i+1===200){
					mogiArr[spart] = [count,QuestionsNum];
					count = 0;
					QuestionsNum = 0;
				}
			}
		}

		return　"<input type='radio' id='showOverview'><div id='overviewWrapper'>" +  mainTxt + "</div>";
	}

	function insertScoreOverview(){
		document.getElementById('wrapMain').innerHTML = scoreOverviewDiv;
		if(smode==="Mogi"){
			makeChartMogi(chartRadar);
		}
		//詳細を表示ボタンをオフにしておく。
		document.getElementById("showOverview").checked = false;
	}

	function makeChartArr(mode){
		var Array0 = [];
		if(mode ==="Mogi"){
			for(var t = 1;t<8;t++){
				Array0.push(Math.round(mogiArr[t][0]/mogiArr[t][1]*100));
			}
		}else if(smode==="Part"){
			for(var i=0;i<MyScoreDB.arr.length;i++){
				if(MyScoreDB.arr[i].part===spart){
					var txt = makeScoreId(""+MyScoreDB.arr[i].id);
					Array0.push({id:txt, score:MyScoreDB.arr[i].score.percent});
				}
			}
			Array0 = Array0.reverse();
		}
		return Array0;
	}



	function makeScoreId(txt){
		var year = txt.slice(0,2);
		var month = txt.slice(2,4);
		var day = txt.slice(4,6);
		var DayOBJ = new Date();
		var dateYear = DayOBJ.getFullYear();
		var returnTxt;
		//年が異なれば年を入れる。
		if(Number(20+year)===dateYear){
			returnTxt = month + "/" +　day;
		}else{
			returnTxt = year + '/' + month + "/" +　day;
		}
		return returnTxt;
	}
	
	function makeScorePage(arr){
		var infoArray = arr;
		/* 参照元の配列
		var scoreInfo = {"date":id, "Mode":smode, "CA":0, "CAPP":0, "CAP":{1:0, 2:0, 3:0, 4:0, 5:0, 6:0,7:0}};
		*/
		var Lscore = infoArray.CAP[1]+infoArray.CAP[2]+infoArray.CAP[3]+infoArray.CAP[4];
		var Rscore = infoArray.CAP[5]+infoArray.CAP[6]+infoArray.CAP[7];
		var dateid = "" + infoArray.date;
		var datetxt = dateid.slice(0,2) + "年" + dateid.slice(2,4) + "月" + dateid.slice(4,6) + "日" + dateid.slice(6,8) + "時" + dateid.slice(8,10) + "分" + dateid.slice(10,12) + "秒";

		var showOverviewbuttonDiv = "<label class='button' id='showOverviewLabel'>詳　細</label>　<label class='button' id='deleteDataLabel'>削　除</label>";

		var txt_mogi = "<h2>スコア詳細</h2>" + 
		"<table class='tableScoreUpper'><tr><th>Total Score</th><td>" + infoArray.CA + "/200</td></tr>" + 
		"<tr><th>Listening</th><td>" + Lscore + "/100</td><th>Reading</th><td>" + Rscore +  "/100</td></tr>" +
		"<tr><th>Part 1</th><td>" + infoArray.CAP[1] +  "/" + quizNumberData[1].howmany + "</td><th>Part 5</th><td>" + infoArray.CAP[5] +  "/" + quizNumberData[5].howmany + "</td></tr>" +
		"<tr><th>Part 2</th><td>" + infoArray.CAP[2] +  "/" + quizNumberData[2].howmany + "</td><th>Part 6</th><td>" + infoArray.CAP[6] +  "/" + quizNumberData[6].howmany + "</td></tr>" +
		"<tr><th>Part 3</th><td>" + infoArray.CAP[3] +  "/" + quizNumberData[3].howmany + "</td><th>Part 7</th><td>" + infoArray.CAP[7] +  "/" + quizNumberData[7].howmany + "</td></tr>" +
		"<tr><th>Part 4</th><td>" + infoArray.CAP[4] +  "/" + quizNumberData[4].howmany + "</td><th></th><td></td></tr>" +
		"<tr><td style='width:auto;' colspan='4'>" + showOverviewbuttonDiv + "</td></tr>" + 
		"</table>" + mainDiv; 


		var txt_part = "<h2>スコア詳細_パート別</h2>" + 
		"<div id='score_date'>" + datetxt + "</div>" + 
 		"<table class='tableScoreUpper'><tr><th>Part "+ spart +  "</th><td>" + infoArray.CAP[spart] +  "/" + quizNumberData[spart].howmany + "</td><td style='Width:auto;'>" + showOverviewbuttonDiv + "</td></tr></table>" + 
		mainDiv;

		if(infoArray.Mode === "Mogi"){
			txt_mogi += '<canvas id="chart" width="95vw" height = "95vw"></canvas>';
			return txt_mogi;
		}else{
			return txt_part;
		}
	}
}

function makeChartMogi(scoreArr){
	"use strict";
	var ctx = document.getElementById("chart").getContext('2d');
	var myChart = new Chart(ctx,{
		type: 'radar',
		data:{
			labels:["Part 1","Part 2","Part 3","Part 4","Part 5","Part 6","Part 7"],
			datasets:[{
				//タイトル
				label:'模擬問題スコア比率',
				//グラフのデータ
				fillColor: "#183D4B",
                strokeColor: "green",
                pointColor: "green",
                pointStrokeColor: "green",
                pointHighlightFill: "green",
                pointHighlightStroke: "green",
				data:scoreArr
			}]
		},
		options: {
			title: {
				display: true,
				text: '模擬問題正解率',
				padding:3
			},
			scale:{
				ticks: {
					stepSize: 25, // 目盛の間隔
					max: 100, //最大値
					beginAtZero: true
				}
			},
			responsive: true
		}
	});
}
function makeChartPart(scoreArr){
	"use strict";
	var dataArr = [];
	var labelsArray= [];
	for (var i=0;i<scoreArr.length;i++){
		dataArr[i] = scoreArr[i].score;
		labelsArray[i]= scoreArr[i].id;
	}
	if(dataArr.length>6){
		var arr = [];
		for(var s=0;s<6;s++){
			arr[s]=dataArr[s];
		}
		dataArr = [];
		dataArr = arr;
	}
	var ctx = document.getElementById("chart").getContext('2d');
	var myChart = new Chart(ctx,{
		type: 'line',
		data:{
			labels:labelsArray,
			datasets:[{
				//グラフのデータ
				data:dataArr,
				//面の表示
				fill: false,
				//線のカーブ
				lineTension: 0,
				//背景色
				backgroundColor: "white",
				//枠線の色
				borderColor: "royalblue",
				//結合点の枠線の色
				pointBorderColor: "rgba(179,181,198,1)",
				//結合点の背景色
				pointBackgroundColor: "#fff",
				//結合点のサイズ
				pointRadius: 2,
				//結合点のサイズ（ホバーしたとき）
				pointHoverRadius: 8,
				//結合点の背景色（ホバーしたとき）
				pointHoverBackgroundColor: "rgba(179,181,198,1)",
				//結合点の枠線の色（ホバーしたとき）
				pointHoverBorderColor: "rgba(220,220,220,1)",
				//結合点より外でマウスホバーを認識する範囲（ピクセル単位）
				pointHitRadius: 15,
			
			}]
		},
		options: {
			title: {
				display: true,
				text: '過去5回正解率',
				padding:3
			},
 
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true,
						min:0,
						max:100
					}
				}]
			},
			responsive: false
		}
	});
}
//カレンダー
function makeCalender(calYear,calMonth){
	"use strict";
	webRecord.push({page:"calender",year:calYear,month:calMonth});
	var arr = makeCalArray(calYear,calMonth);
	document.getElementById('wrapMain').innerHTML = arr[0];
	document.getElementById('footerDIV').innerHTML = arr[1];
}	

function makeCalArray(calYear,calMonth){
	"use strict";
	var txt = calYear + '/' + calMonth + '/01';

	var DBIds = checkScoreDB();
	//今日をチェックする
	var todaysDate = new Date();
	var todaysMonth = todaysDate.getMonth();
	var todaysYear = todaysDate.getFullYear();
		todaysMonth += 1;
	if(todaysMonth < 10){
		todaysMonth = "0"+todaysMonth;
	}
	var currentDate = new Date(txt);
	var DayOfWeek = currentDate.getDay();
	var lastDay = last_day(calYear, calMonth);

	var arr = makeArray(calMonth, DayOfWeek);
	return makeCalenderDiv(arr,calYear, calMonth);

	function last_day(year, month) {
		return (new Date(year, month, 0)).getDate();
	}

	function makeArray(m,dayofweek){
		var _calYear = calYear;
		var _lastMonth;
		var today;
		if(calMonth===todaysMonth||calYear===todaysYear){
			today = new Date().getDate();
		}
		if(m===1){
			_lastMonth=12;
			_calYear -=1; 

		}else{
			_lastMonth=m-1;
		}
		var calenderArr0 = [];
		var lastMonthLastDay = last_day(_calYear, _lastMonth);
		if(dayofweek>0){
			for(var i=dayofweek;i>0;i--){
				var day = lastMonthLastDay-i;
				var txt = '<div class="dayGrey">' + day + '</div>';
				calenderArr0.push(txt);
			}
		}
		var yearForId = ""+calYear;
		yearForId = yearForId.slice(2,4);
		var calenderArr = [];
		var s = calenderArr0.length;
		var z = 0;
		for (var t=1;t <= lastDay;t++){
			
			var id= Number(yearForId + "" + calMonth + "" + (t<10 ? "0"+t : t));
			var txt_ = "";
			if(DBIds[id]){
				if(t===today){
					txt_ =  '<div class="dayBlue dayRed" id="'+ id +'">' + t + '<br></div>';
				}else{
					txt_ =  '<div class="dayBlue" id="'+ id +'">' + t + '<br></div>';
				}
			}else{
				if(t===today){
					txt_ =  '<div class="day dayRed" id="'+ id +'">' + t + '</div>';
				}else{
					txt_ =  '<div class="day" id="'+ id +'">' + t + '</div>';
				}
			}
			if(s<6){
				calenderArr0.push(txt_);
				s++;
			}else{
				calenderArr0.push(txt_);
				calenderArr[z]= calenderArr0;
				calenderArr0 = [];
				s=0;
				z++;
			}
			if(t===lastDay){
				if(calenderArr0.length!==7&&calenderArr0.length>0){
					for(var x = 1;calenderArr0.length<7;x++){
						var txt0 =  '<div class="dayGrey">' + x + '</div>';
						calenderArr0.push(txt0);
					}
				}
				calenderArr[z]= calenderArr0;
			}
		}
		return calenderArr;
	}

	function isLeapYear(y) {
		if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0 )){
			return true;
		}else{
			return false;
		}
	}

	function checkScoreDB(){
		var dateNum = [];
		var arr = MyScoreDB.arr;
		var checkNum = calYear + "" + calMonth;
		checkNum = checkNum.replace(/^20/,'');
		for(var i=0;i<arr.length;i++){
			var txt = ""+arr[i].id;
			var calId = txt.slice(0,6);
			txt = txt.slice(0,4);
			if(txt ===checkNum){
				dateNum[calId] = arr[0].id;
			}
		}
		return dateNum;
	}
}

function makeCalenderDiv(arr,year, month){
	"use strict";
	var t=0;
	var td = "";
	for(var i=0;i<arr.length;i++){
		for(var s= 0;s<arr[i].length;s++){
			if(t===0){
				td += '<div class="calRow">';
				td += arr[i][t];
				t++;
			}else if(t<6){
				td += arr[i][t];
				t++;
			}else{
				td += arr[i][t] + '<!--calRow--></div>';
				t=0;
			}
		}
	}
	var calenderIdDiv = '<div class="calTitle" id = "' + year + "" +  month + '">'+ year + '年' + month + '月</div>';
	month = Number(month);
	year = Number(year);
	var preM;
	var preY = year;
	if(month === 1){
		preM =  12;
		preY = year -1;
	}else{
		preM =  month-1;
	}
	preM = preM <10 ? "0"+preM : preM;
	var nextM;
	var nextY = year;
	if(month === 12){
		nextM =  1;
		nextY = year + 1;
	}else{
		nextM =  month+1;
	}
	nextM = nextM <10 ? "0"+nextM : nextM;
	var title = '<div class="calTitleRow"><div></div>' + calenderIdDiv + '<div></div></div>';
	var footerCalender = '<div class="calIcon goback" id="' + preY + "" + preM + '"">◀ 前月</div>' +
	'<div></div>' +
	'<div class="calIcon goback" id="' + nextY + "" + nextM + '">次月　▶</div>';	
	var htmlTxt = '<div class="calWrap">' + title +  td + '<!--calWrap--></div>';
	return [htmlTxt,footerCalender];
}

function makeMarkSheet(){
	"use strict";
	userDataArray.set("mode","Mogi");
	var div ='<div id="MarkSheetWrapper"></div>';
	var txt = "<h2>解答提出用ページ</h2>あらかじめ用意した解答を入力し、採点することができます。問題PDF、音声はナラボープレスのサイトからダウンロードできます。<br><span class='toWeb button'>ダウンロードページに移動する</span>";
	for(var i= 1;i < 8; i++){
		var partDiv = '<div class="MarkSheetPart">part'+i+'</div>';
		var s = quizNumberData[i].first;
		var e = quizNumberData[i].last;
		for(var t= s;t<=e;t++){
			partDiv +=  '<div class="MarkSheetCell">'+
			'<div class="MarkSheetQ">'+ t + '</div>' +
			'<input type="radio" name = "M'+t+'" id="A" class="radioMS"><div class="MSChoices" id = "M'+t+'A">A</div>'+
			'<input type="radio" name = "M'+t+'" id="B" class="radioMS"><div class="MSChoices" id = "M'+t+'B">B</div>'+
			'<input type="radio" name = "M'+t+'" id="C" class="radioMS"><div class="MSChoices" id = "M'+t+'C">C</div>'+
			'<input type="radio" name = "M'+t+'" id="D" class="radioMS"><div class="MSChoices" id = "M'+t+'D">D</div>'+
			'</div>';
		}
		txt += partDiv;
	}
	txt +='<div id="stickyBanner" class="banner_bottom"><div class="button" id="mssubmit">送信する</div><div></div><div class="button" id="scrollTop">トップへ</div></div>';
	//インデックスのボタンをけす
	document.getElementById("HeaderCalender").style.display="none";

	document.getElementById('wrapMain').innerHTML = div;
	document.getElementById('MarkSheetWrapper').innerHTML = txt;
	//スクロール位置を戻す
	document.getElementById("wrapMain").scrollTop = 0;
}
