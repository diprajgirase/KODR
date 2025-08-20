const express = require("express")

const app = express()

app.post("/notes", async (req, res) => {
    const { title, description } = req.body

    const note = await noteModel.create({
        title: title,
        description: description
    })

    res.send(note)
})

app.get("/notes", async (req, res) => {

})

app.delete("/notes/:id", async (req, res) => {
    await noteModel.findOneAndDelete({
        _id: req.params.id
    })
    res.send("note deleted successfully")
})


app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const { description } = req.body
    noteModel.findOneAndUpdate({
        description: description
    })
})


module.exports = app

// hA1IQ19BYLfSmfgb

// mongodb+srv://Kodr-day2:hA1IQ19BYLfSmfgb@cluster0.h1r2wjz.mongodb.net/