const express = require("express");
const Post = require("../models/post");

const router = express.Router();

// Add a new post
router.post("/addPost", async (req, res) => {
  const { title, images, Des, youtubeLink, gitLink } = req.body;

  if (!title || !images || images.length === 0) {
    return res.status(400).send("Title and at least one image are required.");
  }

  try {
    const newPost = new Post({
      title,
      images,
      Des,
      youtubeLink,
      gitLink,
    });

    await newPost.save();
    res.status(201).send("Post created successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
});

// Get all posts
router.get("/getPosts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
});

module.exports = router;
