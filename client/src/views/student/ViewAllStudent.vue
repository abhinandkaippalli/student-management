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
          <td>Abhinand K</td>
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ViewAllStudent',

})
</script>