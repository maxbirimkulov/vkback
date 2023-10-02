import bcrypt from 'bcrypt'

export default (password) => {
    const salt = bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}