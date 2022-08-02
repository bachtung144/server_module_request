const Request = require('../models/request')

const findByUserId = async (res, query) => {
    const tmp = await Request.find(query)
    if (tmp) res.status(200).send({data: tmp})
    else res.status(404).send({err: 'not found'})
}

exports.getAll = async (req, res) => {
    await findByUserId(res, req.query)
}

exports.add = async (req, res) => {
    let {user_id, device_id, number} = req.body
    let data = {user_id, device_id, number}
    let tmp = new Request(data)
    tmp.save(async (err) => {
        if (err) {
            res.status(500).send({err: err})
        }
        else await findByUserId(res, {user_id: user_id})
    })
}
