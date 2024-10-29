import express from "express";
import fs from "fs";
import path from 'path';
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/recipes", (req, res) => {
  //const filePath = path.join(__dirname, "public", "recipes.json");
  fs.readFile('./public/recipes.json', "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error occured while trying to open the file.");
      return;
    }

    try {
      const recipes = JSON.parse(data);
      res.status(200).json(recipes);
    } catch (err) {
      res.status(500).send("Error parsing file");
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
