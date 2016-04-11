env_var_defaults =
  HOST: 'localhost'
  PORT: 5000
  AUTH_URL: "https://clever.com/oauth"
  API_URL: "https://api.clever.com"
  CLIENT_ID: ""
  CLIENT_SECRET: ""
  SESSION_SECRET: ""
  ENV: "dev"

for key, default_val of env_var_defaults
  module.exports[key] = process.env[key]
  module.exports[key] = default_val if not module.exports[key]? and process.env.NODE_ENV isnt 'production'
