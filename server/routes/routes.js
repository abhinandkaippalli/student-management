const express = require('express')
const router = express.Router()
const API = require('../controllers/api')

router.get("/", API.getAllStudent)

router.get("/:id", API.getStudentById)

router.post("/",API.createStudent)

router.patch("/:id",API.updateStudent)

router.delete("/:id", API.deleteStudent)

module.exports = router