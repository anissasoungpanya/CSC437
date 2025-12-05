import express, { Request, Response } from "express";
import type { ParkData } from "../models/park";
import Parks from "../services/park-svc";

const router = express.Router();

// GET /api/parks - get all parks
router.get("/", (_, res: Response) => {
  Parks.index()
    .then((list) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

// GET /api/parks/:parkId - get specfic park
router.get("/:parkId", (req: Request, res: Response) => {
  const { parkId } = req.params;

  Parks.get(parkId)
    .then((park: ParkData | null) => {
      if (!park) {
        return res.status(404).send(`${parkId} not found`);
      }
      res.json(park);
    })
    .catch((err) => res.status(404).send(err));
});

// POST /api/parks - create new park
router.post("/", (req: Request, res: Response) => {
  const newPark = req.body;

  Parks.create(newPark)
    .then((park: ParkData) => res.status(201).json(park))
    .catch((err) => res.status(500).send(err));
});

// PUT /api/parks/:parkId - update existing park
router.put("/:parkId", (req: Request, res: Response) => {
  const { parkId } = req.params;
  const updatedPark = req.body;

  Parks.update(parkId, updatedPark)
    .then((park: ParkData) => res.json(park))
    .catch((err) => res.status(404).send(err));
});

// DELETE /api/parks/:parkId - delee a park
router.delete("/:parkId", (req: Request, res: Response) => {
  const { parkId } = req.params;

  Parks.remove(parkId)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;
