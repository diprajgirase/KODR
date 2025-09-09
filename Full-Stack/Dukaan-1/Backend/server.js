const app = require("../backend/src/app")
const connectDB = require("../backend/src/database/db")

connectDB()

app.listen(3000, () => console.log("Server running on port 3000 "))