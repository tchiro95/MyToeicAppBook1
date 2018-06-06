var IS_ANDROID = (/android/gi).test(navigator.appVersion);
 
(function() {
  "use strict";
  var phonegapJs = '';
 
  // PhoneGapライブラリの設定
  if(IS_ANDROID) {
    phonegapJs = 'phonegap-android.js';
  } else {
    phonegapJs = 'phonegap-ios.js';
  }
 
  // 読み込むファイルのリスト生成
  var scripts = [
    // 各種ライブラリ
      //    'js/vendor/phonegap/' + phonegapJs,
      'js/lib/fastclick.js',
      'js/lib/Chart.js',

    // 自前js
      'js/varies.js',
      'js/quizObj.js',
      'js/templates.js',
      'js/dataBase.js',
      'js/menu_system.js',
      'js/makingQuizCore.js',
      'js/websql.js',
      'js/index.js'
  ];
 
  for (var i = 0, len = scripts.length; i < len; i++) {
    loadScript(scripts[i]);
  }
})();
 
function loadScript(filename) {
  "use strict";
  
  // 以下のように書かないと、xcodeでのハイライトがおかしくなる
  // 実際には、普通にdocument.writeでタグを書きだしても良い
  var script = '%3Cscript type="text/javascript" src="' + filename + '"%3E%3C/script%3E';
  document.write(unescape(script));
}