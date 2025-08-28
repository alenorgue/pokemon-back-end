import Pokemon from '../models/Pokemon.js';

const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
  const pokemon = await Pokemon.findOne({ _id: id });
    if (!pokemon) {
      return res.status(404).json({ message: 'Pokémon not found' });
    }
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export default {
  getAllPokemons,
  getPokemonById,
};
