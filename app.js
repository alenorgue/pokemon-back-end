import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import cors from 'cors';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Ruta json Local
const jsonPath = path.join(__dirname, 'public', 'pokemon.json');

app.get('/api/pokemons', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading file' });
    }
    try {
      const pokemons = JSON.parse(data);
      res.json(pokemons);
    } catch (parseError) {
      res.status(500).json({ error: 'Error parsing JSON' });
      console.log('Error parsing JSON:', parseError);
    }
      
    })}
);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});