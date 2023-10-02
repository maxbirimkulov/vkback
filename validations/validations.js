import {body} from "express-validator";

export const registerUserValidation = [
    body('email','Неверный формат почты').isEmail(),
    body('image', 'Неверный путь').optional().isString(),
    body('status', 'Укажите статус').isString(),
    body('name', 'Укажите ваше имя').isString(),
    body('surname', 'Укажите вашу фамилию').isString(),
    body('birthday', 'Укажите вашу дату рождения').isDate(),
    body('password', 'Пароль должен быть минимум 8 символов').isString().isLength({min:8}),
    body('phone', 'Неверный формат телефона ').isString().isLength({min:10}),
]