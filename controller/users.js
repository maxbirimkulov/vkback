import UsersModel from "../models/users.js";

export const getAllUser = async (req, res) => {
    try {
        let filter = {
            // isActivated: true
        }

        let users = await UsersModel.find(filter)

        users = users.map(({avatar,name, surname,_id ,images}) => {
            return {avatar, name, surname,_id, images }
        })

        res.json(users)

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить юзеров'
        })
    }
}


export const getOneUser = async (req, res) => {
    try {

        const user = await UsersModel.findById(req.params.id)

        const {passwordHash,...other} = user

        res.json(other)

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить юзера'
        })
    }
}


export const changeOneUser = async (req, res) => {
    try {

        const {email, isActivated, passwordHash, _id, avatar, images, ...other} = req.body

        const chancedUser = await UsersModel.findByIdAndUpdate(req.params.id, other, {returnDocument: "after"})

        const {passwordHash:_,...userData} = chancedUser._doc

        res.json(userData)

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось изменить юзера'
        })
    }
}


export const deleteOneUser = async (req, res) => {
    try {

        const existingUser = await UsersModel.findByIdAndRemove(req.params.id)

        if (existingUser) {
            res.json({
                status: 'success',
                message: "Пользователь удален"
            })
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: 'Пользователь не найден'
        })
    }
}


export const changeAvatarUrl = async (req, res) => {

    try {

        const newAvatarUrl = req.body.avatar

        const chancedUser = await UsersModel.findByIdAndUpdate(req.params.id, {avatar: newAvatarUrl}, {returnDocument: "after"})

        const {passwordHash:_,...userData} = chancedUser._doc

        res.json(userData)
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: 'Пользователь не найден'
        })
    }



}

