import express, { Request, Response, NextFunction } from "express";

const Routes = express.Router();

Routes.get('/:name', async (req : Request, res: Response) => {
    const name = req.params.name;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        if(!response.ok) {
            return res.status(404).json({ error: `Pokemon "${name}" not found` });
        }

        const data= await response.json();
        return res.status(200).json(data);
        } catch (err) {
            return res.status(500).json({ error: 'An error occurred while fetching data.' });
        }
});

module.exports = Routes;
