import testimonio from '../model/testimonio.dao.js'

export function findAll(req, res){
    testimonio.findAll()
    .then(function(testimonios){
        res.render(
            "index", 
            {  
                lista: testimonios.filter(function(e){
                    return e.deleted != true && e.public != false })
            }
        )
    })
    .catch(function(err){
        res.status(500).send(err.message)
    })
}

export function getAll(req, res){
    testimonio.getAll()
    .then(function(testimonios){
        res.json(testimonios.filter(function(e){
            return e.deleted != true
        }))
    })
    .catch(function(err){
        res.status(500).send(err.message)
    })
}

export function crearNuevo(req, res) {
    res.render("formulario", {})
}

export function create(req, res) { 
    testimonio.create(req.body)
        .then(function(entity){
            res.render("gracias", { entity })
        })
        .catch(function(err){
            res.status(500).send(err.message)
        })
}

export function insertTestimonio(req, res){
    testimonio.insertTestimonio(req.body)
    .then(function(entity){
        res.json(entity)
    })
    .catch(function(err){
        res.status(500).send(err.message)
    })
}

export function findById(req, res){
    testimonio.findById(req.query.id)
    .then(function(element){
        res.json(element)
    })
    .catch(function(err){
        res.status(500).send(err.message)
    })
}

export function deleteById(req, res){
    testimonio.deleteById(req.query.id)
    .then(function(testimonios){
        res.json(testimonios)
    })
    .catch(function(err){
        res.status(500).send(err.message)
    })
}

export function replaceById(req, res){
    testimonio.replaceById(req.query.id, req.body)
    .then(function(element){
        res.json(element)
    })
    .catch(function(err){
        res.status(500).send(err.message)
    })
}

export function updateById(req, res){
    testimonio.updateById(req.query.id, req.body)
    .then(function(element){
        res.json(element)
    })
    .catch(function(err){
        res.status(500).send(err.message)
    })
}


export default {
    findAll,
    getAll,
    crearNuevo,
    create,
    insertTestimonio,
    findById,
    deleteById,
    replaceById,
    updateById
}