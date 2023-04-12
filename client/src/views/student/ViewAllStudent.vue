<template>
  <div class="container mt-4">
    <table class="table-purple">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th colspan="2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in studentDetails" :key="index">
          <td scope="row">{{ index + 1 }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>
            <button class="btn-info text-white fw-7" @click="removeStudent(student._id)">Delete</button>
            <router-link :to="`/view-student/${student._id}`">
              <button class="btn-primary ml-1 text-white fw-7">View</button>
            </router-link>
            <router-link :to="`/edit-student`">
              <button class="btn-error ml-1 text-white fw-7">Edit</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>  
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { Student } from '@/types/student';
import StudentService from '@/services/StudentService';

export default defineComponent({
  name: 'ViewAllStudent',

  setup() {
    const studentDetails = ref<Student[]>([]);

    onMounted(async () => {
      try {
        const responseData = await StudentService.fetchAllStudent();
        studentDetails.value = responseData.data;
      } catch (error) {
        console.log(error);
      }
    });

    const removeStudent = async (studentId: string) => {
      await StudentService.deleteStudent(studentId)
      .then(() => {
        console.log("Removed Successfully!!");
        studentDetails.value = studentDetails.value.filter((student) => student._id !== studentId);
        console.log("hi");
        
      }).catch((err) => {
        console.log(err);
      })
    }

    return {
      studentDetails,
      removeStudent
    };
  },
});
</script>
