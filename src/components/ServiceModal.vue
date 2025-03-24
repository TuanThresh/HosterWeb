<template>
    <div class="p-6">

      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-gray-700 font-semibold">Họ tên</label>
          <input v-model="form.name" type="text" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" placeholder="Họ tên">
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Số điện thoại</label>
          <input v-model="form.phone" type="tel" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" placeholder="Số điện thoại">
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Email</label>
          <input v-model="form.email" type="email" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" placeholder="Email">
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Loại dịch vụ</label>
          <select v-model="form.serviceType" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" placeholder="Loại dịch vụ">
            <option value="hosting">Hosting</option>
            <option value="vps">VPS</option>
            <option value="domain">Domain</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Tên dịch vụ</label>
          <input v-model="form.serviceName" type="text" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" placeholder="Tên dịch vụ">
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Chu kỳ thanh toán</label>
          <select v-model="form.paymentDuration" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" >
            <option value="3" selected>3 tháng</option>
            <option value="6">6 tháng</option>
            <option value="9">9 tháng</option>
            <option value="12">12 tháng</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Hình thức thanh toán</label>
          <select v-model="form.paymentMethod" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow">
            <option value="bank-transfer">Chuyển khoản ngân hàng</option>
            <option value="credit-card">Thẻ tín dụng</option>
            <option value="momo">Momo</option>
          </select>
        </div>
        <button type="submit" class="w-full bg-primary-yellow text-white p-2 rounded-lg hover:bg-primary-yellow">
          Đăng ký ngay
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          phone: '',
          email: '',
          serviceType: 'hosting',
          serviceName: '',
          paymentDuration: '3',
          paymentMethod: 'bank-transfer'
        }
      };
    },
    methods: {
      submitForm() {
        console.log("Form submitted:", this.form);
        alert("Đăng ký thành công!");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling if needed */
  </style>