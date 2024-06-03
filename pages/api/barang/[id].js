// /pages/api/barang/[id].js
import Barang from "../../models/Barang";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const barang = await Barang.findByPk(id);
        if (!barang) {
          return res.status(404).json({ error: "Barang not found" });
        }
        res.status(200).json(barang);
      } catch (error) {
        res.status(500).json({ error: "Something went wrong." });
      }
      break;
    case "PUT":
      try {
        const {
          namaBarang,
          hargaBarang,
          warnaBarang,
          ukuranBarang,
          deskripsiBarang,
        } = req.body;
        const barang = await Barang.findByPk(id);
        if (!barang) {
          return res.status(404).json({ error: "Barang not found" });
        }
        barang.namaBarang = namaBarang;
        barang.hargaBarang = hargaBarang;
        barang.warnaBarang = warnaBarang;
        barang.ukuranBarang = ukuranBarang;
        barang.deskripsiBarang = deskripsiBarang;
        await barang.save();
        res.status(200).json(barang);
      } catch (error) {
        res.status(500).json({ error: "Something went wrong." });
      }
      break;
    case "DELETE":
      try {
        const barang = await Barang.findByPk(id);
        if (!barang) {
          return res.status(404).json({ error: "Barang not found" });
        }
        await barang.destroy();
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: "Something went wrong." });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
