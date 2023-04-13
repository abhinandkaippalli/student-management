<template>
    <div class="container mt-3">
        <div class="row justify-center">
            <div class="col-6-1">
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
                        <label for="phone">Place:</label>
                        <input type="text" v-model="studentDetails.place" id="phone" name="phone" required>
                    </div>

                    <div class="form-group">
                        <label for="age">Age:</label>
                        <input type="text" v-model="studentDetails.age" id="age" name="age" required>
                    </div>

                    <button type="submit" class="btn-primary text-white fw-6 font-md">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import StudentService from '@/services/StudentService'
//import { Student } from '@/types/student'
import { NewStudent } from '@/types/newStudent'

export default defineComponent({
    name: 'StudentVue',

    setup() {
        
        const studentDetails = ref<NewStudent>({
            name: '',
            email: '',
            age: 0,
            place: ''
        })

        const addStudent = () => {
            StudentService.createStudent(studentDetails.value)
                .then(() => {
                    console.log(studentDetails.value);
                    console.log('Student added successfully')
                }).catch((error) => {
                    console.log(studentDetails.value);
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
@import '../../assets/styles/_variables.scss';

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
      border: 4px solid $secondary;
      border-radius: 5px;
      font-size: 16px;
      line-height: 1.5;
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }
  }
}

</style>
