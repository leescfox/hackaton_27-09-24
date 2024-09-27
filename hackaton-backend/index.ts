import express from 'express'
import { connect } from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRouter from './src/routers/authRouter'
import profileRouter from './src/routers/profileRouter'
import wishlistRouter from './src/routers/wishlistRouter'
import { dbUrl } from './src/config'

const port = 3001

const app = express()

app.use(express.json())
app.use(cors({ origin: true, credentials: true }))
app.use(cookieParser('fhWpFpdPfm3k2D9saX23'))
app.use('/', authRouter)
app.use('/', profileRouter)
app.use('/', wishlistRouter)

async function startApp() {
    try {
        await connect(dbUrl)
        app.listen(port, () => console.log(`Сервер запущен на порте ${port}`))
    } catch (error: unknown) {
        console.log(error)
    }
}

void startApp()
