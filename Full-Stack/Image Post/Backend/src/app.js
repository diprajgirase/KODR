const express = require("express")
const multer = require("multer")
const postModel = require("./models/post.model")

const upload = multer({ storage: multer.memoryStorage() })

const app = express()
app.use(express.json())

app.post('/posts', upload.single("mama"), async (req, res) => {
    const caption = req.body.caption
    const file = req.file.buffer
    console.log(req.file);

    const result = await postModel.create({
        caption:caption,
        url: result.url
    })

    res.json({
        message: "post created successfully",
        post:post
    })
})

app.get('/posts', async (req,res) =>{
    const posts = await postModel.find()
    res.json({
        message: "posts fetched successfully",
        posts: posts
    })
})

module.exports = app