import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
id: {type: Number, required: true, unique: true},
nombre: {type: String, required: true},
tipos: {type: [String], required: true},
evolucionaDe: {type: String, required: false},
sprite: {type: String, required: true}
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);
export default Pokemon;