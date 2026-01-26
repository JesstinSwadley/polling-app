import app from "./app";

// env variables
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`);
});