(function(){
  'use strict';
  var page;

  window.app = {};

  app.alertMessage = function(){
      ons.notification.alert('現在使用できません!');
  };

  app.attendance = function () {
      //日時取得
      var attendDate = new Date();
      var year = attendDate.getFullYear();
      var month = attendDate.getMonth();
      var day = attendDate.getDate();
      var week = attendDate.getDay();
      var youbi = new Array("日", "月", "火", "水", "木", "金", "土", "月");

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

  app.showDetail_kaeru = function (index) {
      app.alertMessage();
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
        emp_time: '18:30',
        emp_desc: 'ビジネスソリューション推進課'
    }
  ];

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

    } else if (page.id === "kaeru-page") {
        var onsListContent = document.querySelector('#kaeru-list').innerHTML;

        kaeru_items.forEach(function (kaeru_item, index) {
            var onsListItem = '<ons-list-item tappable onclick="app.showDetail_kaeru(' + index + ')">' +
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

        document.querySelector('#kaeru-list').innerHTML = onsListContent;
    }

  });

})();
