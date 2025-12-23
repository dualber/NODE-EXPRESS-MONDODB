import express from 'express';
import personasController from '../controllers/personas.js';

const route = express.Router();

route.post('/', personasController.create);
route.get('/:id', personasController.getOne);
route.get('/', personasController.getAll);
route.put('/:id', personasController.update);
route.delete('/id', personasController.delete);

export default route; 

