import app from "./server.js"; // Import using the exported name

if (process.env.NODE_ENV === "test") {
  app.listen(3000, () => {
    console.log(
      "Capstone Project Backend is running on http://localhost:3000"
    );
  });
} else {
  app.listen(8080, () => {
    console.log(
      "Capstone Project Backend is running on http://localhost:8080"
    );
  });
}