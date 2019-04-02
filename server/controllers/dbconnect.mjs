import mongoose from 'mongoose'
import config from '../config/dev.mjs'

mongoose.connect(config.dburl,{useNewUrlParser: true})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB")
});
