
import express from 'express';
import controllers from '../controllers/controllers.js';

const router = express.Router();

const backupPath = path.join(__dirname, 'data', 'backup.json');

app.get('/api/pokemons', (req, res) => {
    res.json(pokemon_001_0151.json());});


export default router;