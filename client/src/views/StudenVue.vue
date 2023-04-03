<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="phone">Phone number:</label>
                    <input type="tel" id="phone" name="phone" required>

                    <label for="age">Age:</label>
                    <input type="number" id="age" name="age" required>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import '@/assets/styles/index.scss'
import '@/assets/styles/_variables.scss'
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
    form {
        display: block;
    }
</style>
