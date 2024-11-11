require("dotenv").config(); // Ensure .env variables are loaded

class PUBLIC_DATA {
    static port = process.env.PORT || 4000;
    static mongoURI = process.env.MONGODB_URI || `mongodb://localhost/WingsCafe_Inventory`;
    static jwt_auth = process.env.JWT_AUTH || "@#$%^&*(@#$%^&($%^))#$%^&"
}

module.exports = {
    PUBLIC_DATA
};
