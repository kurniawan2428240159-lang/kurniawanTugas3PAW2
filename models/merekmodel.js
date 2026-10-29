const mongoose = require('mongoose');

const merekSchema = new mongoose.Schema({
  kode: { type: String, required: [true, 'kode wajib diisi'], unique: true, trim: true, uppercase: true },
  nama: { type: String, required: [true, 'nama wajib diisi'], trim: true },
  negarasa_asal: { type: String, required: [true, 'negara asal wajib disi'], trim: true },
});

module.exports = mongoose.model('merek', merekSchema);