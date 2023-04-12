<template>
  <div class="container mt-5">
    <div class="row justify-center">
      <div class="col">
        <ul class="list-group-secondary">
          <li class="list-group-item">{{ studentDetails.name }}</li>
          <li class="list-group-item">{{ studentDetails.email }}</li>
          <li class="list-group-item">{{ studentDetails.age }}</li>
          <li class="list-group-item">{{ studentDetails.place }}</li>
        </ul>
      </div>
    </div>
  </div>
  <pre>
    {{ studentDetails }}
  </pre>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import StudentService from '@/services/StudentService';
import { useRoute } from 'vue-router';
import { Student } from '@/types/student';

export default defineComponent({
  name: 'ViewStudent',

  setup() {

    const route = useRoute();
    const studentId = ref(route.params.studentId as string);
    const studentDetails = ref<Student[]>([])

    onMounted(async () => {
      try {
        const res = await StudentService.fetchStudent(studentId.value)
        console.log(res.data);
        studentDetails.value = res.data
        console.log(studentDetails.value);
        
      } catch (error) {
        console.log(error);
      }
    })

    return {
      studentDetails
    }
  }

})
</script>