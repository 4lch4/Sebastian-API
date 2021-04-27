const config = require('./config.json')

module.exports = {
  apps: [
    {
      script: 'tsc --watch',
      name: 'Transpiler'
    },
    {
      script: 'dist/index.js',
      watch: 'dist/',
      name: 'Sebastian',
      env: {
        API_PREFIX: config.apiPrefix,
        PORT: 3000
      }
    }
  ]
}
