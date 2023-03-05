import 'dotenv/config';
export default {
  "expo": {
    "name": "CRUD_Firebase_FireStore",
    "slug": "CRUD_Firebase_FireStore",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "android": {
      "package": "com.BMP.CRUD_FIREBASE",
      "versionCode":  1
    },
    extra: {
      apikey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGINGSENDERID,
      appId: process.env.APP_ID,
      "eas": {
        "projectId": "b16c7add-12f6-4de7-8b6b-1e1f6fa28cca"
      }

    }
  }
}
