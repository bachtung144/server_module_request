const Device = require('../models/device')

exports.getAll = async (req, res) => {
    const tmp = await Device.find({})
    if (tmp) res.status(200).send({data: tmp})
    else res.status(404).send({err: 'not found'})
}
