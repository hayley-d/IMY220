import express from 'express';
import fs from 'fs';
const app = expresso();
const port = 3000;

app.get(express.static('public'));

app.get('/recipes', (req, res) => {
  fs.readFile('recipes.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});