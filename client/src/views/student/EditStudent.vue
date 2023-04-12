<template>
    <div class="container">
        <div class="container mt-3">
            <div class="row justify-center">
                <div class="col-6-2">
                    <form>
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required>
                        </div>

                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone number:</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>

                        <div class="form-group">
                            <label for="age">Age:</label>
                            <input type="text" id="age" name="age" required>
                        </div>

                        <button type="submit" class="btn-primary text-white fw-6 font-md">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'EditStudent',

    setup() {
        const route = useRoute();
        const studentId = ref(route.params.studentId as string)

        return { studentId }
    }

})
</script>