const User = require('../models/user')
const jwt = require('jsonwebtoken')
const tokenSecret = 'my-token-secret'

function generateToken(user){
    return jwt.sign({data: user}, tokenSecret, {expiresIn: '24h'})
}

exports.checkLogin = async (req, res) => {
    const {phone, password} = req.body
    const user = await User.findOne({phone: phone})

    if (!user) res.status(401).send({msg: 'Số điện thoại hoặc mật khẩu không đúng!!'})
    else {
            if (user?.password === password) res.status(200).send(
                {
                    id: user._id,
                    token: generateToken(user),
                    type: user.type,
                    apartment_id: user.apartment_id
                }
            )
            else res.status(401).json({msg: 'Số điện thoại hoặc mật khẩu không đúng!!'})

    }
}

exports.update = async (req, res) => {
    const {oldPassword, newPassword, id, newPhone} = req.body
    const user = await User.findById(id)
        if (oldPassword === user?.password) {
                User.findOneAndUpdate({_id:id},{$set:{password: newPassword,
                    phone: newPhone}}, {useFindAndModify: false}, (err,doc) => {
                    if (err) res.status(404).json({msg: 'Có lỗi xin hãy thử lại!'})
                    else res.status(200).json({msg: 'Cập nhật thành công! Hãy đăng nhập lại'})
                })
        }
        else res.status(403).json({msg: 'Bạn nhập sai mật khẩu cũ'})
}
