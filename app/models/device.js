const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
    name: {
        type: String
    },
})

const device = mongoose.model('DeviceModel', DeviceSchema,"Device")
module.exports = device;
