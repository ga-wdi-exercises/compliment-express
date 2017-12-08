const express   = require('express')
const Post      = require('../db/schema')

const router    = express.Router()


router.get('/', (req, res) => {
  Post.find({})
    .then((posts) => {
      res.render('posts-index', {
        posts: posts
      })
    })
})

router.get('/:title', (req, res) => {
  Post.findOne({ title: req.params.title })
  .then((postOutput) => {
    res.render('posts-show', {
      post: postOutput
    })
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/', (req, res) => {
  Post.create(req.body.post)
    .then((post) => {
      res.redirect(`/posts/${post.title}`)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.put('/:title', (req, res) => {
  Post.findOneAndUpdate({ title: req.params.title }, req.body.post , { new: true })
    .then((post) => {
      res.redirect(`/posts/${post.title}`)
    })
})


router.delete('/:title', (req, res) => {
  Post.findOneAndRemove({ title: req.params.title })
    .then(() => {
      res.redirect('/posts/')
    })
})

module.exports = router
