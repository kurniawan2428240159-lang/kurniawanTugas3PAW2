const mongoose = require('mongoose');

const spesifikasiSchema = new mongoose.Schema({
  jalan: String,
  kota: String,
}, { _id: false });


const kosmetikSchema = new mongoose.Schema({
  nama: { type: String, required: [true, 'nama wajib diisi'], trim: true },
  merek: { type: String, required: [true, 'merek wajib diisi'], trim: true },
  jenisKulit: { type: String, required: [true, 'jenis kulit wajib diisi'], trim: true },
  harga: { type: Number, required: [true, 'harga wajib diisi'], min: [0, 'harga tidak boleh negatif'] },
  nomorBpom: { type: String, required: [true, 'nomor BPOM wajib diisi'], unique: true, trim: true },
  spesifikasi: spesifikasiSchema,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Kosmetik', kosmetikSchema);  