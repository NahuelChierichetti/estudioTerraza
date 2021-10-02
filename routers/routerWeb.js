import express from 'express'
import controller from '../controllers/webController.js'

const router = express.Router()

router.route('/')
.get(controller.home)

router.route('/crearNuevo')
.get(controller.crearNuevo)
.post(controller.crearTestimonio)

export default router