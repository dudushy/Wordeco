# Wordeco
> DESCRIPTION

## Topics
- [Starting Project](#starting-project)

- [Generating `.apk` (Android)](#generating-apk-android)

- [Making the App](#making-the-app)

### Starting Project

1. Download [Node.js](https://nodejs.org/en/download/).

1. Install `npm`:
    ```bash
    npm install -g npm
    ```

1. Install Ionic CLI:
    ```bash
    npm install -g @ionic/cli
    ```

1. Start Ionic Project (Tabs Template):
    ```bash
    ionic start Wordeco tabs --cordova
    ```

    ```bash
    ? Framework: Angular
    ```

    ```bash
    [WARN] About to integrate your app with Cordova.
    ? Are you sure you want to continue? (Y/n) y
    ```

    ```bash
    ? Create free Ionic account? (y/N) n
    ```

1. Install Cordova:
    ```bash
    npm i -g cordova
    ```

1. Install Cordova Resources:
    ```bash
    npm i -g cordova-res
    ```

1. Generate Cordova Resources:
    ```bash
    cordova-res
    ```

1. Add Android Platform:
    ```bash
    ionic cordova platform add android
    ```

1. Install Native Run:
    ```bash
    npm i -g native-run
    ```

1. Install [Android Studio](https://developer.android.com/studio#downloads) with all SDK and Platform Tools [needed](https://ionicframework.com/docs/developing/android).

---
### Generating `.apk` (Android)
- Delete `www` folder

```bash
ionic cordova run android --aot
```

```bash
? May Cordova anonymously report usage statistics to improve the tool over time? (Y/n) n
```

---
### Making the App
1. Generate Homepage:
    ```bash
    ionic generate page homepage
    ```
