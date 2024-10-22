import express, { Request, Response, NextFunction } from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "../frontend/public")));

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("index.html");
  } catch (error) {
    next(error);
  }
});


app.get("/api/:name", async (req: Request, res: Response, next: NextFunction) => {
  const name = req.params.name;
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    if(!response.ok) {
        return res.status(404).json({ error: `Pokemon "${name}" not found` });
    }

    const data= await response.json();
    return res.status(200).json(data); 
  } catch (error) {
    next(error);
  }
});
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
