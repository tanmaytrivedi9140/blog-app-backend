const express = require('express');
const router = express.Router();

const {createBlog, updateOne, deleteone, getall, getone}  = require('../controllers/controller')




router.post('/create' , createBlog);
router.post('/update/:blogId',updateOne);
router.post('/delete/:blogId',deleteone);
router.get('/getBlogs',getall);
router.get('/getOne/:blogId',getone);

module.exports = router;
