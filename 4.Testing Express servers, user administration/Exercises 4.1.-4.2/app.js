const express = require('express')
const app = express()
const cors = require('cors')
const config = require("./utils/config")
const blogsRouter = require('./controllers/blogs')

app.use(cors())
app.use(express.json())

app.use("/api/blogs",blogsRouter)

const PORT = config.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})