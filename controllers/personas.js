import personasModel from "../models/personas.js";

class personasController{
    constructor(){

    }

    async create(req, res){
        try{
            const data = await personasModel.create(req.body);
            res.status(201).json(data);
        }catch(e){
            res.status(500).send(e);
        }
    }
    
    async update(req, res){
        try{
            const {id} = req.params;
            const data = await personasModel.update(id,req.body);
            res.status(201).json(data);
        }catch(e){
            res.status(500).send(e)
        }
    }

    async delete(req, res){
        try{
            const {id} = req.params;
            const data = await personasModel.delete(id, req.body);
            res.status(201).json(data);
        }catch(e){
            res.status(500).send(e);
        }
    }

    async getOne(req, res){
        try{
            const{id} = req.params;
            const data = await personasModel.getOne(id);
            res.status(201).json(data);
        }catch(e){
            res.status(500).send(e);
        }
    }

    async getAll(req, res){
        try{
            const data = await personasModel.getAll();
            res.status(201).json(data);
        }catch(e){
            res.status(500).send(e);
        }
    }
}

export default new personasController;