// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.

/*---------------
   グローバル変数
  ---------------*/
var mAppUrl = "https://mobile-otk220.azurewebsites.net/";
var client;

var authority = "https://login.windows.net/common";
//var authority = "https://login.windows.net/97dbf009-f446-43ed-af21-8ac7a396314c";
var redirectUri = "http://MyDirectorySearcherApp";
var resourceUri = "https://graph.windows.net";
//var clientId = "d893135a-9f2e-4f8d-a98b-9df007307509";
var clientId = "a5d92493-ae5a-4a9f-bcbf-9f1d354067d3";
var graphApiVersion = "2013-11-08";


(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

        // MobileApps接続
        client = new WindowsAzure.MobileServiceClient(mAppUrl);
    }
         
    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();
