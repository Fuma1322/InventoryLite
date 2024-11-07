const mongoose = require('mongoose');
const { PUBLIC_DATA } = require('../../constant');


exports.ConnectDB = async () => {
    try {
        await mongoose.connect(PUBLIC_DATA.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to MongoDB at ${mongoose.connection.host}`);
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
};
