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
        <tr>
          <td scope="row">1</td>
          <td>kjdsk</td>
          <td>abhinandkaippallil123@gmail.com</td>
          <td>
            <button class="btn-info text-white fw-7">Delete</button>
            <button class="btn-primary ml-1 text-white fw-7">View</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'
import Student from '@/types/student';
import StudentService from '@/services/StudentService';

export default defineComponent({
  name: 'ViewAllStudent',

  setup() {
    const studentDetails = reactive<Student[]>([])

    onMounted( async () => {
      try {
        const res = await StudentService.fetchAllStudent()
        console.log(res.data);
        
      } catch (error) {
        console.log(error);
      }
    })

    return {
      studentDetails,
    }
  }
})
</script>
