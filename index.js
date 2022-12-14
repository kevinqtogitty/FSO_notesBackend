const app = require("./app");
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const Note = require("./models/note");
// const app = express();

// const requestLogger = (request, response, next) => {
//   console.log("Method:", request.method);
//   console.log("Path:  ", request.path);
//   console.log("Body:  ", request.body);
//   console.log("---");
//   next();
// };

// app.use(requestLogger);
// app.use(express.static("dist"));
// app.use(express.json());
// app.use(cors());

// app.get("/", (request, response) => {
//   response("<h1>hello</h1>");
// });

// //Get all the notes stored in the database onpageload
// app.get("/api/notes", (request, response) => {
//   Note.find({}).then((notes) => {
//     response.json(notes);
//   });
// });

// //Get a specific user by their id
// app.get("/api/notes/:id", (request, response, next) => {
//   Notes.findById(request.params.id)
//     .then((note) => {
//       if (note) {
//         response.json(note);
//       } else {
//         response.status(404).end();
//       }
//     })
//     .catch((error) => next(error));
// });

// //Deltee a specific user by their id
// app.delete("/api/notes/:id", (request, response, next) => {
//   Note.findByIdAndRemove(request.params.id)
//     .then((result) => {
//       response.status(204).end();
//     })
//     .catch((error) => next(error));
// });

// //Add a new note to the database with the passed in content
// app.post("/api/notes", (request, response, next) => {
//   const body = request.body;

//   // if (body.content === undefined) {
//   //   return response.status(404).json({
//   //     error: "content missing",
//   //   });
//   // }

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//     date: new Date(),
//   });

//   note
//     .save()
//     .then((savedNote) => {
//       response.json(savedNote);
//     })
//     .catch((error) => next(error));
// });

// //Edit the data of a speicific person give the id (toggle importance)
// app.put("/api/notes/:id", (request, response, next) => {
//   const { content, important } = request.body;

//   // const note = {
//   //   content: body.content,
//   //   important: body.important,
//   // };

//   Note.findByIdAndUpdate(
//     request.params.id,
//     { content, important },
//     { new: true, runValidators: true, context: "query" }
//   )
//     .then((updateNote) => {
//       response.json(updateNote);
//     })
//     .catch((error) => next(error));
// });

// //When the user requests an non-existing route call this function to respond with a 404 eror
// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: "unknown endpoint" });
// };

// app.use(unknownEndpoint);

// //When other shit goes wrong this errorHandler can be called with the next() method in any other route
// const errorHandler = (error, request, response, next) => {
//   console.error(error.message);

//   if (error.name === "CastError") {
//     return response.status(400).send({ error: "malformatted id" });
//   } else if (error.name === "ValidationError") {
//     return response.status(400).json({ error: error.message });
//   }

//   next(error);
// };

// app.use(errorHandler);

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

server.listen(config.PORT, () => {
  logger.info(`Server running on ${config.PORT}`);
});
