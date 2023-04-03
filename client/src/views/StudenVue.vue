<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form @submit.prevent="addStudent">
                    <label for="name">Name:</label>
                    <input type="text" v-model="studentDetails.name" id="name" name="name" required>

                    <label for="email">Email:</label>
                    <input type="email" v-model="studentDetails.email" id="email" name="email" required>

                    <label for="phone">Phone number:</label>
                    <input type="tel" v-model="studentDetails.place" id="phone" name="phone" required>

                    <label for="age">Age:</label>
                    <input type="number" v-model="studentDetails.age" id="age" name="age" required>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
    <pre>
                    {{ studentDetails }}
                </pre>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import StudentService from '@/services/StudentService'
import '@/assets/styles/index.scss'
import '@/assets/styles/_variables.scss'
import Student from '@/types/student'

export default defineComponent({
    name: 'StudentVue',

    setup() {
        const studentDetails = reactive<Student>({
            name: '',
            email: '',
            age: 0,
            place: ''
        })

        const addStudent = () => {
            StudentService.createStudent(studentDetails)
                .then(() => {
                    console.log('Student added successfully')
                })
                .catch((error) => {
                    console.log(`Error adding student: ${error}`)
                })
        }

        return {
            studentDetails,
            addStudent
        }
    }
})
</script>

<style lang="scss">
form {
    display: block;
}
</style>
