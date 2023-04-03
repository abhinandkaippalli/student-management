<template>
    <h1>Hello</h1>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import '@/assets/styles/index.scss'
import Student from '@/types/student'

export default defineComponent({
  name: 'StudentVue',

  setup() {
    const studentDetails = reactive<Student>({
      name: '',
      email: '',
      age: 0,
      phNumber: 0
    })

    return {
      studentDetails
    }
  }
})
</script>

<style lang="scss">
    h1 {
        color: red;
    }
</style>
