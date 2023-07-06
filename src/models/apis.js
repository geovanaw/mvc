import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
        titulo: { type: String, required: true},
        sinopse: { type: String, required: true},
        anoLançamento: {type: String, required: true},
        episodios: {type: Number, required: true},
        generos: {type: Array, required: true},
    }
)


const apis = mongoose.model('apis', apiSchema);

export default apis;

