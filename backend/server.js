import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import router from "./routes";
import history from "connect-history-api-fallback";

const app = express();

app.use(history());
app.use(morgan("dev"));
app.use(cors());

mongoose.Promise = global.Promise;
const dbUrl =
  "mongodb+srv://superAdmin:Useradm0n@cluster0.rcquc.mongodb.net/declathon?retryWrites=true&w=majority";
//const dbUrl = "mongodb://localhost:27017/b2b";
mongoose
  .connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then((mongoose) => console.log("Conectado a la BD"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", router);
app.set("port", process.env.PORT || 4000);
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(app.get("port"), () => {
  console.log("server on port " + app.get("port"));
});
