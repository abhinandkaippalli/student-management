<template>
  <div class="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>@mdo</td>
      <td>
        <button>Remove</button>
      </td>
      <td>
        <button>Edit</button>
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