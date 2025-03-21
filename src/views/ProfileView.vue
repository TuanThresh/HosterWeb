<template>
    <div class="flex my-auto items-center justify-center ">
      <div class="w-full max-w-md p-6 rounded-2xl shadow-md">
        <h2 class="text-2xl font-semibold text-center text-primary-black">Hồ sơ</h2>
        <form @submit.prevent="handleSubmit" class="mt-4">
            <img src="../assets/profile.png" alt="" class="w-[150px] h-[150px] rounded mx-auto">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-primary-black">name</label>
            <input v-model="form.name" type="name" id="name" class="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:primary-yellow" required />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-primary-black">Email</label>
            <input v-model="form.email" type="email" id="email" class="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:primary-yellow" required />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-primary-black">Mật khẩu</label>
            <input v-model="form.password" type="password" id="password" class="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:primary-yellow" required />
          </div>
          <div class="mb-4">
            <label for="address" class="block text-sm font-medium text-primary-black">Địa chỉ</label>
            <input v-model="form.address" type="address" id="address" class="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:primary-yellow" required />
          </div>
          <div class="mb-4">
            <label for="phoneNumber" class="block text-sm font-medium text-primary-black">Số điện thoại</label>
            <input v-model="form.phoneNumber" type="phoneNumber" id="phoneNumber" class="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:primary-yellow" required />
          </div>
          <button type="submit" class="w-full bg-primary-yellow text-white p-2 rounded-lg hover:bg-primary-yellow transition">Lưu hồ sơ</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  const form = ref({
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNumber : ""
  });
  
  const handleSubmit = () => {

  };
  </script>
  
  <style>
  body {
    font-family: 'Inter', sans-serif;
  }
  </style>
  