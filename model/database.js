import mongodb from 'mongodb'
const client = new mongodb.MongoClient("mongodb://localhost:27017")

async function conexion(callback){

    await client.connect()

    let result = await callback(client.db("dbMongo"))

    client.close()

    return result
}

export default {
    conexion
}
