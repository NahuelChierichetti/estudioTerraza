import express from 'express'
import path from 'path'
import fs from 'fs'
import testimonioRouter from './routers/testimonio.router.js'


const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(testimonioRouter)

app.listen(80, function () {
    console.log("El servidor esta ON")
})
