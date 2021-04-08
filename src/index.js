const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.set("trust proxy", true);
app.disable("x-powered-by");
app.use(express.json());
app.use(cors());

app.use("/v1", require("./v1/ApiRouter"));
app.get("/", (_, res) => res.send("🐈"));
app.all("*", (_, res) => res.sendStatus(404));

app.listen(port, () => {
    console.log(`API Server listening at ${port} port`);
});