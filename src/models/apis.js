import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
        titulo: { type: String, required: true},
        sinopse: { type: String, required: true},
        anoLançamento: {type: String, required: true},
        episodios: {type: Number, required: true},
        generos: {type: String, required: true},
    }
)


const apis = mongoose.model('apis', apiSchema);

module.exports = apis;

