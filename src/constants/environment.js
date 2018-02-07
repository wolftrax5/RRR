/*
Check the environment proses for create-react-app
NODE_ENV variable will be set for you automatically.You cannot override NODE_ENV manually.
  https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables
*/
const environments = {
  development: {
    API_VERSION: 'v0.0.0',
    ENV: 'Development',
    BASE_PATH: '',
  },
  staging: {
    API_VERSION: 'v0.0.0',
    ENV: 'Staging',
    BASE_PATH: '',
  },
  production: {
    API_VERSION: 'v0.0.0',
    ENV: 'Production',
    BASE_PATH: '',
  }
}

module.exports = function (environment) {
  return environments[environment]
}
