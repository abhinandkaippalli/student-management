<template>
    <div class="container">
        <div class="container mt-3">
            <div class="row justify-center">
                <div class="col-6-2">
                    <form @submit.prevent="updateSubmit()">
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
                            <input type="tel" v-model="studentDetails.place" id="phone" name="phone" required>
                        </div>

                        <div class="form-group">
                            <label for="age">Age:</label>
                            <input type="text" v-model="studentDetails.age" id="age" name="age" required>
                        </div>
                        <button type="submit" class="btn-primary text-white fw-6 font-md">Save</button>
                        <router-link :to="`/`" >
                            <button class="btn-secondary text-white fw-6 font-md ml-1">Back</button>
                        </router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService';
// import { Student } from '@/types/student';
import { NewStudent } from '@/types/newStudent';
// import { ResponseData } from '@/types/responseData';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'EditStudent',

    setup() {
    const route = useRoute();
    const studentId = ref(route.params.studentId as string);
    const studentDetails = ref<NewStudent>({
      age: 0,
      email: '',
      name: '',
      place: ''
    });

    onMounted(async () => {
      try {
        const res = await StudentService.fetchStudent(studentId.value);
        studentDetails.value = res.data;
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    });

    const updateSubmit = async () => {
        // const { _id, ...updatedStudentDetails} = studentDetails.value
        try {
            const res = await StudentService.updateStudent(studentId.value, studentDetails.value)
            console.log(res);
        } catch (error) {
            console.log(error);      
        }
    }

    return { studentDetails, updateSubmit };
  }

})
</script>
