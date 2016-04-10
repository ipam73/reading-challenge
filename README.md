# reading-challenge
Reading Challenge App for School Districts

You can see this on localhost:5001

To run:

- 1:  Make a config file in the root dir called `config.coffee` with the following:

```coffee
module.exports =
  HOST: 'localhost'
  PORT: 5001
  CLIENT_ID: ""
  CLIENT_SECRET: ""
  AUTH_URL: "https://clever.com/oauth"
  API_URL: "https://api.clever.com"
  SESSION_SECRET: ""
```

- 2:
```
make run
```

To test:
use this district id: `56ae8e9c5994560100000ae4`
