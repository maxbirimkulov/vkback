import jwt from "jsonwebtoken";

export default (newUser) => {
    return jwt.sign({
        _id: newUser.id
    }, 'secret4444', {expiresIn: '1d'})
}