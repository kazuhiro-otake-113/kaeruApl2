// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";
    var mAppUrl = "https://mobile-otk220.azurewebsites.net/";
    var client;
    var today;

    //document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        //document.addEventListener( 'pause', onPause.bind( this ), false );
        //document.addEventListener( 'resume', onResume.bind( this ), false );

        // MobileApps接続
        client = new WindowsAzure.MobileServiceClient(mAppUrl)
            .then(function(){
                ons.notification.alert('Azure接続成功!');
            },
            function(){
                ons.notification.alert('Azure接続エラー!');
            });
        };
         
    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();
