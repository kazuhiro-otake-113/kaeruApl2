cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-geolocation.Coordinates",
        "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.Position",
        "file": "plugins/cordova-plugin-geolocation/www/Position.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Position"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "id": "cordova-plugin-ms-azure-mobile-apps.AzureMobileServices.Ext",
        "file": "plugins/cordova-plugin-ms-azure-mobile-apps/www/MobileServices.Cordova.Ext.js",
        "pluginId": "cordova-plugin-ms-azure-mobile-apps",
        "runs": true
    },
    {
        "id": "cordova-plugin-ms-azure-mobile-apps.AzureMobileServices",
        "file": "plugins/cordova-plugin-ms-azure-mobile-apps/www/MobileServices.Cordova.js",
        "pluginId": "cordova-plugin-ms-azure-mobile-apps",
        "clobbers": [
            "WindowsAzure"
        ]
    },
    {
        "id": "cordova-plugin-ms-adal.utility",
        "file": "plugins/cordova-plugin-ms-adal/www/utility.js",
        "pluginId": "cordova-plugin-ms-adal",
        "runs": true
    },
    {
        "id": "cordova-plugin-ms-adal.AuthenticationContext",
        "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationContext.js",
        "pluginId": "cordova-plugin-ms-adal",
        "clobbers": [
            "Microsoft.ADAL.AuthenticationContext"
        ]
    },
    {
        "id": "cordova-plugin-ms-adal.CordovaBridge",
        "file": "plugins/cordova-plugin-ms-adal/www/CordovaBridge.js",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "id": "cordova-plugin-ms-adal.AuthenticationResult",
        "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationResult.js",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "id": "cordova-plugin-ms-adal.TokenCache",
        "file": "plugins/cordova-plugin-ms-adal/www/TokenCache.js",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "id": "cordova-plugin-ms-adal.TokenCacheItem",
        "file": "plugins/cordova-plugin-ms-adal/www/TokenCacheItem.js",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "id": "cordova-plugin-ms-adal.UserInfo",
        "file": "plugins/cordova-plugin-ms-adal/www/UserInfo.js",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "id": "cordova-plugin-ms-adal.AuthenticationSettings",
        "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationSettings.js",
        "pluginId": "cordova-plugin-ms-adal",
        "clobbers": [
            "Microsoft.ADAL.AuthenticationSettings"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-geolocation": "2.4.2",
    "cordova-plugin-inappbrowser": "1.5.0",
    "cordova-sqlite-storage": "1.4.8",
    "cordova-plugin-ms-azure-mobile-apps": "2.0.0",
    "cordova-plugin-ms-adal": "0.9.0",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});