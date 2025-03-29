<script lang="ts" setup>
import {onMounted, ref} from "vue";
import axios from "../plugins/axios.ts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Button from '@/components/ui/button/Button.vue'
import {type VpsProduct} from "@/types/index.ts";
import ServiceModal from "../components/ServiceModal.vue"
import { onOpen } from '@/composables/useModal'
import Modal from '@/components/Modal.vue'
import { handleError } from "@/lib/utils.ts";
const vpsProducts = ref([] as VpsProduct[]);
const selectedService  = ref({} as VpsProduct);
onMounted(async () => {
    try{
        const { data } = await axios.get("vps");
        vpsProducts.value = data;
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
        service_type : 'vps'
      }" />
    </Modal>
    <h1 class="text-3xl font-bold mt-6">GÓI VPS</h1>
    <Carousel class="relative w-full max-w-[1000px] m-auto" 
    :opts="{
      align: 'center',
      loop: true,
      skipSnaps: true,
      slidesToScroll: 3
    }"

    >
    <CarouselContent class="-ml-4">
      <CarouselItem v-for="(slide,index) in vpsProducts " class="basis-1/3 text-center">
            <div class="px-6 flex flex-col gap-3  !border-white" :class="index % 3 == 1 ? '!bg-primary-yellow' : '!bg-transparent text-primary-black'">
              <img src="https://hoster.vn/wp-content/uploads/2025/01/lever2.png" alt="">
              <h3 class="text-2xl font-bold  ">{{slide.plan}}</h3>
              <h1 class="text-3xl" :class="index % 3 == 1 ? 'text-white' : ' text-primary-yellow'">{{ slide.price }}</h1>
              <div class="grid grid-cols-2 text-xl">
                <p>Băng thông</p>
                <p>{{ slide.bandwidth }}</p>
                <p>CPU</p>
                <p>{{ slide.cpu }}</p>
                <p>Ram</p>
                <p>{{ slide.ram }}</p>
                <p>Dung lượng</p>
                <p>{{ slide.storage }}</p>
                <p>Os</p>
                <p>{{ slide.os }}</p>
              </div>
              <Button :variant="index % 3 == 1 ? 'secondary' : 'default'" class="w-fit px-8 mx-auto my-5" @click="() => {
                onOpen();
                selectedService = slide;
              }">Đăng kí</Button>
            </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
      <CarouselNext />
  </Carousel>
</template>