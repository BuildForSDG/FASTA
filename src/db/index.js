const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas for FASTA APP!');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });


module.exports = mongoose;