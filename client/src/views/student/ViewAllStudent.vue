<template>
  <div class="container mt-4">
    <table class="table-purple">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">1</td>
          <td>Abhinand K</td>
          <td>abhinandkaippallil123@gmail.com</td>
          <td>
            <button>Delete</button>
          </td>
          <td>
            <button>
              View
            </button>
          </td>
        </tr>
        <tr>
          <td scope="row">1</td>
          <td>Abhinand K</td>
          <td>abhinandkaippallil@gmail.com</td>
          <td>
            <button>Delete</button>
          </td>
          <td>
            <button>
              View
            </button>
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