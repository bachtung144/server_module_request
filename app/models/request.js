const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    number: {
        type: Number
    },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    device_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Device' }
})

const request = mongoose.model('RequestModel', RequestSchema,"Request")
module.exports = request;
