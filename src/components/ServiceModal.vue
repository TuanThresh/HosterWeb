<template>
    <div class="p-6 overflow-y-scroll max-h-[600px]">

      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-gray-700 font-semibold">Họ tên</label>
          <input v-model="form.name" type="text" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" placeholder="Họ tên">
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Số điện thoại</label>
          <input v-model="form.sdt" type="tel" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" placeholder="Số điện thoại">
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Địa chỉ</label>
          <input v-model="form.dia_chi" type="text" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" placeholder="Địa chỉ">
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Email</label>
          <input v-model="form.email" type="email" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" placeholder="Email">
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Loại dịch vụ</label>
          <select v-model="form.service_type" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" placeholder="Loại dịch vụ" disabled>
            <option value="hosting">Hosting</option>
            <option value="vps">VPS</option>
            <option value="domain">Domain</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Mã dịch vụ</label>
          <input v-model="form.service_id" type="text" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" placeholder="Mã dịch vụ" disabled>
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Mã giảm giá</label>
          <select v-model="form.discount_code" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" placeholder="Mã giảm giá">
            <option :value="discount.id" v-for="discount in discounts">
              {{ discount.id }}
            </option>
            <option :value="undefined">Không dùng mã</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Thời hạn thuê</label>
          <select v-model="form.duration_months" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" >
            <option value="3" selected>3 tháng</option>
            <option value="6">6 tháng</option>
            <option value="9">9 tháng</option>
            <option value="12">12 tháng</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700 font-semibold">Tổng tiền</label>
          <input type="number" class="w-full border rounded-lg p-2 mt-1 focus:ring focus:primary-yellow" :value="totalPrice" disabled>
        </div>
        <button type="submit" class="w-full bg-primary-yellow text-white p-2 rounded-lg hover:bg-primary-yellow">
          Đăng ký ngay
        </button>
      </form>
    </div>
  </template>
  
<script lang="ts" setup>
import {onMounted, ref, watch} from "vue";
import axios from "@/plugins/axios";
import { onClose } from "@/composables/useModal";
import { type Discount, type Error } from "@/types";
import { handleError, handleSucess } from "@/lib/utils";
const discounts = ref<Discount[]>([]);

interface OrderPayload {
  id?: number;
  name: string;
  email: string;
  sdt: string;
  dia_chi: string;
  service_id: number | null;
  service_type: string;
  duration_months: number;
  discount_code? : string;
}

const form = ref<OrderPayload>({
  name: '',
  email: '',
  sdt: '',
  dia_chi: '',
  service_id: 0,
  service_type: '',
  duration_months: 3,
});
const totalPrice = ref(0);
type Props = {
  product : any & {service_type : string};
}
const props = defineProps<Props>();
onMounted(() => {
  form.value.service_id = props.product.id;
  form.value.service_type = props.product.service_type;
})
const submitForm = async () => {
  try {
    await axios.post('orders', form.value);
    handleSucess("Success","Đã tạo đơn hàng thành công");
    onClose();
  } catch (error) {
    handleError(error);
  }
}
watch([() => form.value.duration_months,() => form.value.discount_code],() => {
  totalPrice.value = props.product.price * (form.value.duration_months ?? 1);
  if(form.value.discount_code){
    const discount = discounts.value.find(x => x.id == form.value.discount_code);
    if(discount){
      totalPrice.value = totalPrice.value * (1 - discount?.percentage / 100)
    }
  }

})
onMounted(async () => {
  try {
    const {data} = await axios.get("discounts");
  discounts.value = data;
  
  totalPrice.value = props.product.price * (form.value.duration_months ?? 1);
  } catch (error) {
    handleError(error);
  }
})
</script>