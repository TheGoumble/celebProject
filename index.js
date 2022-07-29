import express from "express"
import cors from "cors"
import {createCeleb, getCeleb, updateCeleb} from "./src/celebrities.js"

const app = express()
//port should be in scream snake case
const PORT = 5004
app.use(cors())
app.use(express.json())

//put our routes here
app.get('/celebrities', getCeleb)
app.post("/add-celebrities", createCeleb)
app.patch("/update-celebrities", updateCeleb)
//app.delete("/delete-celebrities", deleteCeleb)


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT} ...`)
})