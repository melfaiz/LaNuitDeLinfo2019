import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "babel-polyfill";
import utilisateur from "./src/controllers/utilisateur";
import discussion from "./src/controllers/discussion";
import discussion_replies from "./src/controllers/discussion_replies";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "YAY! Congratulations! Your first endpoint is working" });
});

app.post("/api/v1/utilisateurs", utilisateur.create);
app.get("/api/v1/utilisateurs", utilisateur.getAll);
app.get("/api/v1/utilisateurs/:id", utilisateur.getOne);
app.delete("/api/v1/utilisateurs/:id", utilisateur.delete);

app.post("/api/v1/discussions", discussion.create);
app.get("/api/v1/discussions", discussion.getAll);
app.get("/api/v1/discussions/:id", discussion.getOne);
app.delete("/api/v1/discussions/:id", discussion.delete);

app.post("/api/v1/discussion_replies", discussion_replies.create);
app.get("/api/v1/discussion_replies", discussion_replies.getAll);
app.get("/api/v1/discussion_replies/:id", discussion_replies.getOne);
app.delete("/api/v1/discussion_replies/:id", discussion_replies.delete);

app.listen(3000);
console.log("app running on port ", 3000);
