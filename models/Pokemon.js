import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
_id: {type: Number, required: true, },
name: {type: String, required: true},
type: {type: [String], required: true},
evolucionaDe: {type: String, required: false},
sprite: {type: String, required: true}
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);
export default Pokemon;