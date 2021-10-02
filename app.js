import express from 'express'
import path from 'path'
import fs from 'fs'
import routerApi from './routers/testimoniosRouterAPI.js'
import routerWeb from './routers/routerWeb.js'

//Se le asigna lo que devuelve la funcion express que exporta express, app va a ser el servidor de la app
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routerApi)
app.use(routerWeb)


app.listen(80, function () {
    console.log("El servidor esta ON")
})