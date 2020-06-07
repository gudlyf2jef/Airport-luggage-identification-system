

let Keen = require('keen.io');

// Configuration
let config = require('./key.json');

// Set up hardware
let tessel = require('tessel');
let rfid = require('rfid-pn532').use(tessel.port['A']);

// Set up event streaming
let keen = Keen.configure({
  projectId: config.projectId,
  writeKey: config.writeKey,
  readKey: config.readKey
});

// When RFID reader is ready to read cards
rfid.on('ready', function () {
  // Notify user
  tessel.led[1].output(1);
  console.log('RFID reader ready and waiting.');
});

// When RFID card sensed
rfid.on('data', function (data) {
  // Log the data
  sendData({uid: data.uid, step: thisStep});
});

