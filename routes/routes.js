
import express from 'express';
import controllers from '../controllers/controllers.js';

const router = express.Router();

// Ruta para obtener todos los Pokémon
router.get('/pokemons', controllers.getAllPokemons);

//Ruta para endpoints de cada Pokemon

router.get('/pokemons/:id', controllers.getPokemonById);


export default router;