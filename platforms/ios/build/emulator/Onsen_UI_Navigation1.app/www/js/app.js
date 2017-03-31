    (function(){
    'use strict';

    var page;
    var today;

    window.app = {};

    //対象ユーザ（今回は決め打ちで対応）
    var targetUser = {
        tUser: 'z2h3542',
        tName: '大竹 一弘'
    };
    
    //ログイン
    app.login = function(){
    /*
        client.login('aad').then(function () {
            app.pagePush('menu.html');
        }, app.authError());
    */
        //該当のテナントで初期化する
        alert('login !!' + authority);
        var authContext = new Microsoft.ADAL.AuthenticationContext(authority);
        alert(authContext);
        //alert('authContext:' + JSON.stringify(authContext));
        //Tokenがキャッシュに存在するかチェック
        authContext.tokenCache.readItems().then(function(items){
                if(items.length > 0){
                    //存在する場合、保持しているテナントで再初期化
                    authority = items[0].authority;
                    alert('キャッシュあり' + JSON.stringify(items));
                    authContext = new Microsoft.ADAL.AuthenticationContext(authority);
                }
                alert('2');
                //Tokenを要求する
                authContext.acquireTokenSilentAsync(resourceUri, clientId)
                .then(function(authresult){
                    alert('3');
                    app.userInfo(authresult);
                    app.pagePush('menu.html');
                    }, function(){
                        //上記のToken要求に失敗した場合、ユーザに認証を求めるプロンプト表示してTokenを取得する
                        authContext.acquireTokenAsync(resourceUri,clientId,redirectUri)
                        .then(function(authresult){
                            alert('4');
                            app.userInfo(authresult);
                            app.pagePush('menu.html');
                        }, function(err){
                            alert("Failed to authenticate: " + err);
                        });
                });
        });
        //app.pagePush('menu.html');
    };
    
    //ユーザ情報
    app.userInfo = function(authresult){
        alert('authresult: ' + JSON.stringify(authresult));
    };

    //ログアウト
    app.logout = function(){
        client.logout().then(function () {
            app.pagePop();
        }, app.authError());
    };

    app.authError = function() {
        //ons.notification.alert('認証失敗!');
    };

    app.alertMessage = function(){
        ons.notification.alert('現在使用できません!');
    };

    app.attendance = function () {
        //日時、位置情報取得
        var attendDate = new Date();
        var year = attendDate.getFullYear();
        var month = attendDate.getMonth()+1;
        var day = attendDate.getDate();
        var week = attendDate.getDay();
        var youbi = new Array("日", "月", "火", "水", "木", "金", "土");

        var hour = attendDate.getHours();
        var minute = attendDate.getMinutes();

        var option = { timeout: 6000 };
        var ido;
        var keido;

        navigator.geolocation.getCurrentPosition(function (position) {
            ido = position.coords.latitude;
            keido = position.coords.longitude;
            alert(year + "年" + month + "月" + day + "日" + youbi[week] + "曜日  " + hour + "時" + minute + "分で受け付けました\n位置情報：緯度" + ido + "\n位置情報：経度" + keido);
        }, function () { alert("失敗"); }, option);

    };

    app.showDetail_menu = function (index) {
        if (index == 0) {
            document.querySelector('#myNavigator').pushPage('ctc_phiro.html');
        } else if (index == 1) {
            document.querySelector('#myNavigator').pushPage('emp_support.html');
        } else if (index == 2) {
            app.alertMessage();
        } else if (index == 3) {
            document.querySelector('#myNavigator').pushPage('kaeru_ref.html');
        } else if (index == 4) {
            document.querySelector('#myNavigator').pushPage('kintai_record.html');
        }
    };
    
    app.pagePush = function(pageTo){
        document.querySelector('#myNavigator').pushPage(pageTo);
    };

    app.pagePop = function(toPage){
        
        if(toPage === 'dtime_ref.html'){
            document.querySelector('#myNavigator').popPage();
            app.selectAttendTime();
        } else {
            document.querySelector('#myNavigator').popPage();
        }
        
    };

    app.getToday = function(){
        var now = new Date();
        var year = now.getFullYear();
        var mon = now.getMonth()+1;
        var day = now.getDate();
        var you = now.getDay();
        var youbi = new Array("日", "月", "火", "水", "木", "金", "土", "月");
        
        var hiduke = year + "年" + mon + "月" + day + "日 " + youbi[you] + "曜日";
        return hiduke;
    };

    app.depTimeReg = function(){
        //画面入力値を取得
        var time = $('#depTime').val();
        //基準日
        var cDate = app.getToday();

        //登録・更新
        if(time === ""){
            ons.notification.alert('時間を設定してください');
        } else {
            //テーブル参照
            var table = client.getTable('DepartureTime');
                    
            table
                .where({empId: targetUser.tUser,depDate: cDate })
                .read()
                .then(
                    //read成功時の処理
                    function(results){
                        alert('results:' + JSON.stringify(results));
                        if(results.length > 0){
                            //データが存在する場合、更新
                            alert('id:' + results[0].id);
                            var updateItem = {
                                id: results[0].id,
                                depTime: time
                            };
                            table
                                .update(updateItem)
                                .then(function(){
                                    //var id = updatedItem.id;
                                    alert('更新成功 :' + id);
                                    },dataAccessfailure);
                        } else {
                            var insertItem = {
                                empId: targetUser.tUser,
                                empName:targetUser.tName,
                                depTime: time,
                                depDate: cDate,
                                order: 9
                            };
                            table
                                .insert(insertItem)
                                .done(function(insertedItem){
                                    var id = insertedItem.id;
                                    alert('登録成功 :' + id);
                                },dataAccessfailure);
                        }

                    })
        }
        //参照画面へ遷移する
        setTimeout(function(){
            //リセットでは、参照画面に戻った際にtoolbarからbackボタンが消えてしまう
            //document.querySelector('#myNavigator').resetToPage('kaeru_ref.html');
            app.pagePop('dtime_ref.html');
        },2000);
    };

    app.selectAttendTime = function(){
        alert('select!');
        //検索日
        var cDate = app.getToday();
        //alert('cDate:' + cDate);
        
            var table = client.getTable('DepartureTime');
            //alert('table:' + table);
            table
                .where({empId: targetUser.tUser,depDate: cDate })
                .read()
                .then(
                    //read成功時の処理
                    function(results){
                        alert('results:' + JSON.stringify(results));
                        if(results.length > 0){
                            //画面に取得したデータをセットする
                            app.setData(results);
                        } else {
                            ons.notification.alert('本日の登録はありません');
                        }
                    })
    };

    app.setData = function(results){
        //kaeru_itemsへ取得したレコードをセット
        alert('setData results: ',JSON.stringify(results));
        
        var kaeru_items;
        for(var i = 0; i < results.length; i++){
            var kaeru_items = [{ emp_name: results[i].empName, emp_time: results[i].depTime, emp_desc: 'ビジネスソリューション推進課' }];
        }

        //画面にkaeru_itemsの内容をリスト表示する
            //var onsListContent = document.querySelector('#kaeru-list').innerHTML;
            var onsListContent = '<onsListItem>' + 
                
                '<div class="center">メンバーの退社時間</div>' + 
                '</onsListItem>'
                ;

            kaeru_items.forEach(function (kaeru_item, index) {
                var onsListItem = '<ons-list-item >' +
                    '<div class="left">' +
                    '<div class="list__item__thumbnail picture"></div>' +
                    '</div>' +
                    '<div class="center">' +
                    '<div class="list__item__title">' + kaeru_item.emp_name + '</div>' +
                    '<div class="list__item__subtitle">' + kaeru_item.emp_desc + '</div>' +
                    '</div>' +
                    '<div class="right">' +
                    '<span class="label">' + kaeru_item.emp_time + '</span>' +
                    '</div>' +
                '</ons-list-item>'
                ;

                onsListContent += onsListItem;
            });
            document.querySelector('#kaeru-list').innerHTML = onsListContent; };
    
    app.dataAccessfailure = function(error){
        ons.notification.alert('データ操作エラー');
    };

    var menu_items = [
        {
            title: 'CTC企業理念',
            label: '',
            desc: 'Challenging Tomorrow`s Changes'
        },
        {
            title: '従業員支援プログラム',
            label: '',
            desc: ''
        },
        {
            title: '社内ポータル',
            label: '',
            desc: '現状、未連携'
        },
        {
            title: '何時にカエル',
            label: '',
            desc: '今日の退社時間を宣言'
        },
    {
        title: '出退勤',
        label: '',
        desc: '今日も健康！打刻忘れず！'
    }
    ];
    /*
    var kaeru_items = [
        {
            emp_name: '宮崎　恵',
            emp_time: '18:00',
            emp_desc: 'ビジネスソリューション推進課'
        },
        {
            emp_name: '岩垂　大輔',
            emp_time: '17:30',
            emp_desc: 'ビジネスソリューション推進課'
        },
        {
            emp_name: '池田　修一',
            emp_time: '17:30',
            emp_desc: 'ビジネスソリューション推進課'
        },
        {
            emp_name: '比留間　紀夫',
            emp_time: '未登録',
            emp_desc: 'ビジネスソリューション推進課'
        },
        {
            emp_name: '佐々木　理乃',
            emp_time: '18:30',
            emp_desc: 'ビジネスソリューション推進課'
        },
        {
            emp_name: '渡邊　史比古',
            emp_time: '17:30',
            emp_desc: 'ビジネスソリューション推進課'
        },
        {
            emp_name: '早川　聡',
            emp_time: '18:30',
            emp_desc: 'ビジネスソリューション推進課'
        },
        {
            emp_name: '田中　卓也',
            emp_time: '18:00',
            emp_desc: 'ビジネスソリューション推進課'
        },
        {
            emp_name: '大竹　一弘',
            emp_time: '未登録',
            emp_desc: 'ビジネスソリューション推進課'
        }
    ];
    */
    document.addEventListener('init', function(event) {
        page = event.target;
        if(page.id === "menu-page") {
        var onsListContent = document.querySelector('#main-list').innerHTML;

        menu_items.forEach(function(menu_item, index) {
            var onsListItem = '<ons-list-item tappable onclick="app.showDetail_menu(' + index + ')">' +
                '<div class="left">' +
                '<div class="list__item__thumbnail picture"></div>' +
                '</div>' +
                '<div class="center">' +
                '<div class="list__item__title">' + menu_item.title + '</div>' +
                '<div class="list__item__subtitle">' + menu_item.desc + '</div>' +
                '</div>' +
                '<div class="right">' +
                '<span class="label">' + menu_item.label + '</span>' +
                '</div>' +
            '</ons-list-item>'
            ;

            onsListContent += onsListItem;
        });

        document.querySelector('#main-list').innerHTML = onsListContent;

        } else if (page.id === "kaeru-ref-page") {
            app.selectAttendTime();

        } else if (page.id === "kaeru-reg-page") {
            var viewToday = document.querySelector('#view_today').innerHTML;
            document.querySelector('#view_today').innerHTML = app.getToday();
        }

    });

    })();
