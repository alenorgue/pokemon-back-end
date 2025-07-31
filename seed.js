import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './config/db.js';
import Pokemon from './models/Pokemon.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedPokemons = async () => {
  try {
    await connectDB();

    const dataPath = path.join(__dirname, 'public', 'pokemon.json');
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    const pokemons = JSON.parse(jsonData).map(p => ({
  ...p,
  _id: p.id
}));

    // Limpia la colección antes de insertar
    await Pokemon.deleteMany();
    console.log('🗑️ Colección limpia');

    // Inserta todos los Pokémon
    await Pokemon.insertMany(pokemons);
    console.log(`✅ ${pokemons.length} pokémon insertados correctamente`);

    mongoose.connection.close();
  } catch (error) {
    console.error('❌ Error al hacer seed:', error);
    mongoose.connection.close();
  }
};

seedPokemons();
