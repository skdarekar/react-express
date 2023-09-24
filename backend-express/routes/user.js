// const express = require('express')
import express from "express"
const router = express.Router()

// middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// })

// define the home page route
router.get('/', (req, res) => {
  res.send('Home page')
})

// define the about route
router.get('/about', async function (req, res) {
  res.send('About Page')
})

router.post("/save", async function (req, res){
    console.log("User/Save");
    res.send({ message: 'User added!' });
})

export default router;
// module.exports = router