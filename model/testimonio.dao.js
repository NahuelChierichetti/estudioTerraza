import { ObjectId } from 'mongodb'
import database from './database.js'

export async function findAll(){
    return database.conexion(async function(db){
        return await db.collection("Testimonios").find({}).toArray()
    })
}

export async function getAll(){
    return database.conexion(async function(db){
        return await db.collection("Testimonios").find({}).toArray()
    })
}

export async function create(entity) { 
    return database.conexion(async function(db){
        entity.public = false
        await db.collection("Testimonios").insertOne(entity)
        return entity
    })
}

export async function findById(id){
    return database.conexion(async function(db){
        return await db.collection("Testimonios").findOne({_id: ObjectId(id)})
    })
}

export async function deleteById(id){
    return database.conexion(async function(db){
        return await db.collection("Testimonios").deleteOne({_id: ObjectId(id)})
    })
}

export async function insertTestimonio(entity){
    return database.conexion(async function(db){
        await db.collection("Testimonios").insertOne(entity)
        return entity
    })
}

export async function replaceById(id, body){
    return database.conexion(async function(db){
        return await db.collection("Testimonios").replaceOne({_id: ObjectId(id)}, body)
    })
}

export async function updateById(id, body){
    return database.conexion(async function(db){
        return await db.collection("Testimonios").updateOne({_id: ObjectId(id)}, {$set: body})
    })
}



export default {
    findAll,
    getAll,
    create,
    findById,
    deleteById,
    insertTestimonio,
    replaceById,
    updateById
}