const express = require("express");
const path = require("path");
var app = express();
var PORT = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'index.html')); 
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
