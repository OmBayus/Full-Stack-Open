const mongoose = require('mongoose')
const config = require("../utils/config")
const logger = require("../utils/logger")

const mongoUrl = config.MONGODB_URI

logger.info('connecting to', mongoUrl)

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
      .then(res=>{
            logger.info("connect to MongoDB")
      })
      .catch(err=>{
            logger.error('error connecting to MongoDB:', err.message)
      })

const blogSchema = new mongoose.Schema({
      title: String,
      author: String,
      url: String,
      likes: Number
})
      
module.exports = mongoose.model('Blog', blogSchema)