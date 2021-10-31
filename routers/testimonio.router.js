import express from 'express'
import controller from '../controllers/testimonio.controller.js'

const router = express.Router()

router.route('/')
.get(controller.findAll)

router.route('/crearNuevo')
.get(controller.crearNuevo)
.post(controller.create)

router.route('/api/testimonios')
.get(controller.getAll)
.post(controller.insertTestimonio)

router.route('/api/testimonios/:id')
.get(controller.findById)
.delete(controller.deleteById)
.put(controller.replaceById)
.patch(controller.updateById)

export default router