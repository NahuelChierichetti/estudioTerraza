import repositorio from '../repositories/testimoniosRepository.js'

export function home(req, res) {
    repositorio.getAll()
        .then(function (testimonios){
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

export function crearNuevo(req, res) {
    res.render("formulario", {})
}

export function crearTestimonio(req, res) {
    repositorio.create(req.body)
        .then(function(entity){
            res.render("gracias", { entity })
        })
}


export default { 
    home,
    crearNuevo,
    crearTestimonio

}