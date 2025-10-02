import express, { Express } from "express";

// env variables
const PORT = process.env.PORT || 8000;

// Express Config
const app: Express = express();

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`);
});