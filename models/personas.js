import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class personasModelo{
    async create(persona){
        const colPersonas = dbClient.db.collection('personas');
        return await colPersonas.insertOne(persona);
    }

    async update(id, persona){
        const colPersonas = dbClient.db.collection('personas');
        return await colPersonas.updateOne({_id: new ObjectId(id)}, {set: persona});
    }

    async delete(id){
        const colPersonas = dbClient.db.collection('personas');
        return await colPersonas.deleteOne({_id: new ObjectId(id)});
    }

    async getOne(id){
        const colPersonas = dbClient.db.collection('personas');
        return await colPersonas.findOne({_id: new ObjectId(id)});
    }

    async getAll(){
        const colPersonas = dbClient.db.collection('personas');
        return await colPersonas.find({}).toArray();
    }
}

export  default new personasModelo; 