# reading-challenge
Reading Challenge App for School Districts

You can see this on localhost:5001

To run:

- 1:  Make a config file in the `web` dir called `config.coffee` with the following:

```coffee
module.exports =
  HOST: 'localhost'
  PORT: 5000
  CLIENT_ID: ""
  CLIENT_SECRET: ""
  AUTH_URL: "https://clever.com/oauth"
  API_URL: "https://api.clever.com"
  SESSION_SECRET: ""
```

- 2:  To run the web app
```
make run-web
```

- 3: To run android app
```
    open genymotion -> start virtual device
    react-native run-android
    adb logcat *:S ReactNative:V ReactNativeJS:V // SHOWS ANDROID LOGS
```

To test:
use this district id: `56ae8e9c5994560100000ae4`
