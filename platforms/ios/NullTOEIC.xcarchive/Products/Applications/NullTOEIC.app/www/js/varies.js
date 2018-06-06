//各パートの開始問題と終了問題の番号、現在の問題番号、何問あるか。
var currentQNo;

//解答結果の配列
var ansResult = [];
var userChoices = [];
var userDataArray = [];

//
var MyPageDB = [];
var mpQArr = [];
//スコアの一覧
var MyScoreDB;
var DataBaseScore;

//セーブ前の設定を一時保存」
var temp_userDataArray = [];
//mp3プレイヤーの設定
var mp3player = new Audio();
//seがあるんだけど、使っていない。使うようなら
//var OKSE = new Audio("./se/OK.mp3");
//var NGSE = new Audio("./se/NG.mp3");

var duration;
var readingTxt;

var FlagSetting1 = 0;
var startFlag = 0;

var userDBOBJ;
var quizDBOBJ;
var scoreDBOBJ;

//touchstartに対応してたらtouchstart、してなければclick
var mytap = window.ontouchstart===null?"touchstart":"mousedown";
var mytapend = window.ontouchstart===null?"touchend":"mouseup";
var mp3playerWaitFlg = 0;
var timerWaitFlg = 0;

var userAgent = window.navigator.userAgent;
var ua = window.navigator.userAgent;
ua += ua.toLowerCase();
if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1){
    userAgent = "Safari";
}

var scrollPosition;
var MogiModeData = {lastquiz:0, choices:{}};

//カレンダーやスコアの遷移履歴の記録用
var webRecord = [];