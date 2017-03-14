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
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-inappbrowser": "1.5.0",
    "cordova-sqlite-storage": "1.4.8",
    "cordova-plugin-ms-azure-mobile-apps": "2.0.0",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-geolocation": "2.4.2"
};
// BOTTOM OF METADATA
});