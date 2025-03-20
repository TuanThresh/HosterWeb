<template>
  <div class="flex my-auto items-center justify-center ">
    <div class="w-full max-w-md p-6 rounded-2xl shadow-md">
      <h2 class="text-2xl font-semibold text-center text-primary-black">Đăng ký</h2>
      <form @submit.prevent="handleSubmit" class="mt-4">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-primary-black">Email</label>
          <input v-model="email" type="email" id="email" class="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:primary-yellow" required />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-primary-black">Mật khẩu</label>
          <input v-model="password" type="password" id="password" class="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:primary-yellow" required />
        </div>
        <button type="submit" class="w-full bg-primary-yellow text-white p-2 rounded-lg hover:bg-primary-yellow transition">Đăng nhập</button>
      </form>
      <p class="mt-4 text-sm text-center text-primary-black">
        Đã có tài khoản? <RouterLink to="/login" class="text-primary-yellow hover:underline">Đăng nhập</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const email = ref('');
const password = ref('');

const handleSubmit = () => {
  console.log('Logging in with:', email.value, password.value);
};
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>
