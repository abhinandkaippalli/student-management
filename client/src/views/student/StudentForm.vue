<template>
    <div class="container">
        <div class="row">
            <div class="col-12-1">
                <form @submit.prevent="addStudent">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" v-model="studentDetails.name" id="name" name="name" required>
                    </div>

                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" v-model="studentDetails.email" id="email" name="email" required>
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone number:</label>
                        <input type="tel" v-model="studentDetails.place" id="phone" name="phone" required>
                    </div>

                    <div class="form-group">
                        <label for="age">Age:</label>
                        <input type="text" v-model="studentDetails.age" id="age" name="age" required>
                    </div>

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
import '@/assets/styles/grid.scss'
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
                }).catch((error) => {
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

// Define form styles
form {
  .form-group {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 10px;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      border: 4px solid #421bce;
      border-radius: 5px;
      font-size: 16px;
      line-height: 1.5;
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }
  }

  button[type="submit"] {
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    line-height: 1.5;
    cursor: pointer;
  }
}

</style>
