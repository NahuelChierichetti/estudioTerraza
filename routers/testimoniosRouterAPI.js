import express from 'express'
import fs from 'fs'
import repositorio from '../repositories/testimoniosRepository.js'

const router = express.Router()

router.route('/api/testimonios')
.get(function(req, res){
    repositorio.getAll()
    .then(function(testimonios){
        res.status(200).json(testimonios.filter(function(e){
            return e.deleted != true
        }))
    })
    .catch(function(err){
        res.status(500).json({err: 500, msg: "Error al leer los datos."})
    })
})
.post(function (req, res) {
    fs.promises.readFile('./data/testimonios.json')
        .then(function (data) {
            const testimonios = JSON.parse(data)

            const testimonio = req.body
            testimonio.id = testimonios.length + 1

            testimonios.push(testimonio)

            fs.promises.writeFile('./data/testimonios.json', JSON.stringify(testimonios))
                .then(function(){
                    res.status(201).json(testimonio)
                })
                .catch(function(err){
                    res.status(500).json({err: 500, msg: "Error al escribir los datos."})
                })
        })
        .catch(function(err){
            res.status(500).json({err: 500, msg: "Error al leer los datos."})
        })
})

router.route('/api/testimonios/:id')
.get(function(req, res){
    
    const id = parseInt(req.params.id)

    fs.promises.readFile('./data/testimonios.json')
    .then(function(data){
        const testimonios = JSON.parse(data)
        const testimonio = testimonios.find(function(e){
            return e.id === id 
        })

        if(testimonio != undefined && testimonio.deleted != true){
            res.status(200).json(testimonio)
        }
        else {
            res.status(404).json({err: 404, msg: `El testimonio con id ${id}, no se encuentra en el sistema.`})
        }
    })
    .catch(function(err){
        res.status(500).json({err: 500, msg: "Error al leer los datos."})
    })
})
.put(function(req, res){
    const id = parseInt(req.params.id)

    fs.promises.readFile('./data/testimonios.json')
        .then(function(data){
            const testimonios = JSON.parse(data)

            const testimonio = testimonios.find(function(e){
                return e.id === id
            })

            if(testimonio != undefined && testimonio.deleted != true){
                let i = testimonios.indexOf(testimonio)

                testimonios[i] = { ...req.body, id: id }

                fs.promises.writeFile('./data/testimonios.json', JSON.stringify(testimonios))
                    .then(function(){
                        res.status(200).json(testimonios[i])
                    })
                    .catch(function(err){
                        res.status(500).json({err: 500, msg: "Error al escribir los datos."})
                    })
            }
            else {
                res.status(404).json({err: 404, msg: `El testimonio con id = ${id}, no se encuentra en el sistema.`})
            }
        })
        .catch(function(){
            res.status(500).json({err: 500, msg: "Error al leer los datos"})
        })
})
.patch(function(req, res){
    const id = parseInt(req.params.id)

    fs.promises.readFile('./data/testimonios.json')
        .then(function(data){
            const testimonios = JSON.parse(data)

            const testimonio = testimonios.find(function(e){
                return e.id === id
            })

            if(testimonio != undefined && testimonio.deleted != true){
                let i = testimonios.indexOf(testimonio)

                testimonios[i] = {...testimonios[i], ...req.body, id: id}

                fs.promises.writeFile('./data/testimonios.json', JSON.stringify(testimonios))
                    .then(function(){
                        res.status(200).json(testimonios[i])
                    })
                    .catch(function(err){
                        res.status(500).json({err: 500, msg: "Error al escribir los datos."})
                    })
            }
            else {
                res.status(404).json({err: 404, msg: `El testimonio con id = ${id}, no se encuentra en el sistema.`})
            }
        })
        .catch(function(){
            res.status(500).json({err: 500, msg: "Error al leer los datos"})
        })
})
.delete(function(req, res){
    const id = parseInt(req.params.id)

    fs.promises.readFile('./data/testimonios.json')
        .then(function(data){
            const testimonios = JSON.parse(data)

            const testimonio = testimonios.find(function(e){
                return e.id == id
            })

            if(testimonio != undefined && testimonio.deleted != true){

                testimonio.deleted = true

                fs.promises.writeFile('./data/testimonios.json', JSON.stringify(testimonios))
                    .then(function(){   
                        res.status(200).json(testimonio)
                    })
                    .catch(function(err){
                        res.status(500).json({err: 500, msg: "Error al escribir los datos"})
                    })
            }
            else {
                res.status(404).json({err: 404, msg: `El testimonio con id = ${id}, no se encuentra en el sistema.`})
            }
        })
        .catch(function(err){
            res.status(500).json({err: 500, msg: "Error al leer los datos"})
        })
})

export default router