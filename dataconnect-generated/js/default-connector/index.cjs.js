const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'ver2',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

