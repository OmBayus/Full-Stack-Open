const express = require('express')
const app = express()
const config = require("./utils/config")
const logger = require("./utils/logger")
const notesRouter = require("./controllers/note")
const middleware = require("./utils/middleware")

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.use("/api/notes",notesRouter)

app.use(middleware.unknownEndpoint)


app.use(middleware.errorHandler)

const PORT = config.PORT

app.listen(PORT, () => {
      logger.info(`Server running on port ${config.PORT}`)
})