const connectDB = require("./interfaces/config/db");

const port = process.env.PORT || 3000;

connectDB.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
