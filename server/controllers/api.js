const Students = require('../models/students')

module.exports = class API {
    static async getAllStudent(req, res) {
        try {
            const post = await Students.find()
            res.status(200).json(post)
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    static async getStudentById(req, res) {
        try {
            const post = await Students.findById(req.params.id)
            res.status(200).json(post)
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    static async createStudent(req, res) {
        const addStudents = req.body
        try {
            await Students.create(addStudents)
            res.status(201).json({ message: "Post created successfully!" })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: error.message })
        }
    }

    static async updateStudent(req, res) {
        try {
            const update = await Students.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
                place: req.body.place
            }, { new: true })
            res.status(201).json({ message: "Post updated successfully!", update })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: error.message })
        }
    }

    static async deleteStudent(req, res) {
        try {
            await Students.findByIdAndDelete(req.params.id)
            res.status(201).json({ message: "Removed successfully!" })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: error.message })
        }
    }
}
