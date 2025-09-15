const mongoose = require('mongoose');

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // options removed
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Error:", error);
  }
};

module.exports = Connection;
