cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ms-azure-mobile-apps/www/MobileServices.Cordova.Ext.js",
        "id": "cordova-plugin-ms-azure-mobile-apps.AzureMobileServices.Ext",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ms-azure-mobile-apps/www/MobileServices.Cordova.js",
        "id": "cordova-plugin-ms-azure-mobile-apps.AzureMobileServices",
        "clobbers": [
            "WindowsAzure"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "id": "cordova-plugin-geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "id": "cordova-plugin-geolocation.PositionError",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/utility.js",
        "id": "cordova-plugin-ms-adal.utility",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationContext.js",
        "id": "cordova-plugin-ms-adal.AuthenticationContext",
        "clobbers": [
            "Microsoft.ADAL.AuthenticationContext"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/CordovaBridge.js",
        "id": "cordova-plugin-ms-adal.CordovaBridge"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationResult.js",
        "id": "cordova-plugin-ms-adal.AuthenticationResult"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/TokenCache.js",
        "id": "cordova-plugin-ms-adal.TokenCache"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/TokenCacheItem.js",
        "id": "cordova-plugin-ms-adal.TokenCacheItem"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/UserInfo.js",
        "id": "cordova-plugin-ms-adal.UserInfo"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationSettings.js",
        "id": "cordova-plugin-ms-adal.AuthenticationSettings",
        "clobbers": [
            "Microsoft.ADAL.AuthenticationSettings"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-inappbrowser": "1.5.0",
    "cordova-sqlite-storage": "1.4.8",
    "cordova-plugin-ms-azure-mobile-apps": "2.0.0",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-geolocation": "2.4.2",
    "cordova-plugin-ms-adal": "0.9.0",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});