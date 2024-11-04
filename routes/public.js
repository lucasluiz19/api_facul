import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const router = express.Router();

router.post("/dados", async (req, res) => {
  try {
    const track = req.body;

    await prisma.trackNotes.create({
      data: {
        noteNumber: track.noteNumber,
        cityOfOrigin: track.cityOfOrigin,
        destinationCity: track.destinationCity,
        truckPlate: track.truckPlate,
        truckBrand: track.truckBrand,
      },
    });
    res.status(201).json(track);
  } catch (err) {
    res.status(500).json({ message: "erro de servidor" });
  }
});
