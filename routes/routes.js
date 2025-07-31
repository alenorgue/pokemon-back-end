
import express from 'express';
import controllers from '../controllers/controllers.js';

const router = express.Router();

// Ruta para obtener todos los Pokémon
router.get('/pokemons', controllers.getAllPokemons);


export default router;