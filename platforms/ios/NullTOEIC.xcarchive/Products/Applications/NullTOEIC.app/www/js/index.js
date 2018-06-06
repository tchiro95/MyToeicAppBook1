/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application varructor
    initialize: function() {
        "use strict";
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        } else {
            this.onDeviceReady();
        }
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        "use strict";
        this.receivedEvent('deviceready');
    },

    receivedEvent:function(){
        "use strict";
        document.body.innerHTML = topMenu;

        // Update DOM on a Received Event
        var DBUSER = new DB_USER();
        // DBUSER.deleteDB();
        // deleteDB("Databese");
        DBUSER.initDB_user();       

        settingEvent();
        if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
            touchModule.usrsDevice = device.cordova;
            touchModule.usePCFLG = 0;
        }
        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body);
            }, false);
        }
    }
};

app.initialize();
