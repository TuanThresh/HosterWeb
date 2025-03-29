<script lang="ts" setup>
import {onMounted, ref} from "vue";
import axios from "../plugins/axios.ts";
import {type DomainProduct} from "@/types/index.ts";
import ServiceModal from "../components/ServiceModal.vue"
import { onOpen } from '@/composables/useModal'
import Modal from '@/components/Modal.vue'
import { handleError } from "@/lib/utils.ts";
const domainProducts = ref([] as DomainProduct[]);
const selectedService  = ref({} as DomainProduct);
onMounted(async () => {
    try{
        const { data } = await axios.get("domain_products");
        domainProducts.value = data;
        console.log(data);
    }
    catch(error) {
        handleError(error);
    }
})
</script>
<template>
    <Modal title="Đăng ký Dịch vụ">
      <ServiceModal :product="{
        ...selectedService,
        service_type : 'domain'
      }" />
    </Modal>
        <!-- Header Section -->
        <h1 class="text-3xl font-bold mt-6">BẢNG GIÁ TÊN MIỀN</h1>
        <main>
            <div class="flex items-center space-x-4">
            <img src="../assets/internet1.jpg" alt="Domain Image" class="w-24 h-24">
            <div>
                <h1 class="text-primary-yellow text-2xl font-bold">Bảng giá Tên miền</h1>
                <p class="text-gray-600">BẢNG GIÁ DỊCH VỤ ĐĂNG KÝ TÊN MIỀN</p>
                <p class="text-blue-600 font-semibold">Giá dưới đây chưa bao gồm thuế GTGT (VAT)</p>
                <p class="text-blue-600 font-semibold">Tên miền Việt Nam không chịu thuế GTGT</p>
                <p class="text-blue-600 font-semibold">Tên miền Quốc Tế chịu thuế GTGT là 10%</p>
            </div>
        </div>

        <!-- Table Section -->
        <div class="overflow-x-auto mt-4">
            <table class="w-full border-collapse border border-gray-300">
                <thead>
                    <tr class="bg-primary-yellow text-white">
                        <th class="border border-gray-300 px-4 py-2 text-left">MÃ TÊN MIỀN</th>
                        <th class="border border-gray-300 px-4 py-2">TÊN MIỀN</th>
                        <th class="border border-gray-300 px-4 py-2">GIÁ</th>
                        <th class="border border-gray-300 px-4 py-2"> </th>
                    </tr>
                </thead>
                <tbody class="text-gray-700">
                    <tr v-for="domain in domainProducts" :key="domain.id">
                        <td class="border border-gray-300 px-4 py-2">{{ domain.id }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ domain.domain_name }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ domain.price }}</td>
                        <td class="border border-gray-300 px-4 py-2 text-primary-yellow cursor-pointer" @click="() => {
                            onOpen();
                            selectedService = domain;
                        }">Đăng ký</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </main>
</template>
