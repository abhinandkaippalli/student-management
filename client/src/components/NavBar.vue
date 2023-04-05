<template>
    <nav class="navbar-secondary text-white">
        <div class="navbar-container font-lg">
            <div class="navbar-brand">
                <i class="fa-solid fa-school"></i>
                <div class="ml-1 fw-7">
                    STUDENT MANAGEMENT
                </div>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">View Students</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/add-student" class="nav-link">Add Student</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NavBar',

})
</script>

<style lang="scss"></style>