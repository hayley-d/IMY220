import express from "express";
import * as path from "node:path";
import cors from "cors";
import bodyParser from "body-parser";

const Routes = require(path.resolve("./backend/api.js"));

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 3001;
app.use('/api', Routes);

app.use(express.static(path.resolve("./frontend/public")));

app.get('/', (req, res) => {
  res.sendFile(path.resolve("./frontend/public/index.html"));
});

const startServer = async () => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
};

startServer();
