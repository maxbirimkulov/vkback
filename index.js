import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'
import accessToken from "./services/accessToken.js";

const api = express()
dotenv.config()  // Функция - для доступа к env файлам

const PORT = 4444 || process.env.PORT


api.use(express.json()) // middleware - для возможности перевода данных в нужный формат и доступ к req.body
api.use(cors()) // middleware - для возмжности доступа из фронтенда на сервер




mongoose.connect(process.env.MONGODB)
    .then(() => console.log('Mongo DB успешно запущен'))
    .catch((err) =>  console.log('Ошибка при запуске Mongo DB ' ,err))


const runServer = () => {
    try {
        api.listen(PORT, () => {
            console.log(`Ваш сервер запущен на хосту http://localhost:${PORT}`)
        })
    } catch (err) {
        console.log(`Ошибка при запуске сервера - ${err.message}`)
    }
}

runServer()