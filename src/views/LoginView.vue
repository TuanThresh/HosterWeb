<template>
    <div class="flex items-center justify-center ">
      <div class="w-full max-w-md p-6 rounded-2xl shadow-md">
        <h2 class="text-2xl font-semibold text-center text-primary-black">Đăng nhập</h2>
        <form @submit.prevent="handleSubmit" class="mt-4">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-primary-black">Email</label>
            <input v-model="form.email" type="email" id="email" class="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:primary-yellow" required />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-primary-black">Mật khẩu</label>
            <input v-model="form.password" type="password" id="password" class="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:primary-yellow" required />
          </div>
          <button type="submit" class="w-full bg-primary-yellow text-white p-2 rounded-lg hover:bg-primary-yellow transition">Đăng nhập</button>
        </form>
        <p class="mt-4 text-sm text-center text-primary-black">
          Không có tài khoản? <RouterLink to="/dang-ky" class="text-primary-yellow hover:underline">Đăng ký</RouterLink>
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  const form = {
    email : "",
    password : ""
  }

  const handleSubmit = () => {
  };
  </script>
  
  <style>
  body {
    font-family: 'Inter', sans-serif;
  }
  </style>
  