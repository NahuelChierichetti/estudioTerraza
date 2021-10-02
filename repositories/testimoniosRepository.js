import fs from 'fs'

export async function getAll() {
    return fs.promises.readFile('./data/testimonios.json')
        .then(function (data){
           const testimonios = JSON.parse(data)
           return testimonios
        })
}

export async function create(entity) {
    return fs.promises.readFile('./data/testimonios.json')
        .then(function(data){
            const testimonios = JSON.parse(data)

            entity.id = testimonios.length + 1

            testimonios.push(entity)

            return fs.promises.writeFile('./data/testimonios.json', JSON.stringify(testimonios))
                .then(function(){
                    return entity
                })
        })
}

export default{
    getAll,
    create
}