<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Button from '@/components/ui/button/Button.vue'
import ServiceModal from '@/components/ServiceModal.vue'
type BannerSlide = {
  title : string,
  image: string,
  description : string
}
type serviceSlide = {
  name : String,
  price : Number,
  capacity : Number,
  emailAddress : Number,
  emailFowarder : Number,
  mailingList : Number,
  antiVirus : boolean,
  antiSpam : boolean,
  emailPerHour : Number,
  emailPerDay : Number
}
import { onOpen } from '@/composables/useModal'
import Modal from '@/components/Modal.vue'
const bannerSlides : BannerSlide[] = [
  {
    title: "Hosting chất lượng cao",
    image: "https://hoster.vn/wp-content/uploads/2025/01/banner-slider.png",
    description: "Chi phí hợp lý - đáp ứng nhu cầu lưu trữ của bạn"
  },
  {
    title: "Hỗ trợ khách hàng 24X7X365",
    image: "https://hoster.vn/wp-content/uploads/2025/01/ho-tro-khach-hang.png",
    description: "Chính sách dịch vụ khách hàng nhanh chóng"
  },
  {
    title: "Nhanh, ổn định, và bảo mật",
    image: "https://hoster.vn/wp-content/uploads/2025/01/bao-mat.png",
    description: "Quý khách hàng tin tưởng khi sử dụng dịch vụ Hoster"
  },
]
const serviceSlides : serviceSlide[] = [
  {
    name: "Email Hosting Đồng",
    price: 100000,
    capacity : 20,
    emailAddress : 10,
    emailFowarder : 10,
    mailingList : 0,
    antiVirus : true,
    antiSpam : true,
    emailPerHour : 100,
    emailPerDay : 2400
  },
  {
    name: "Email Hosting Đồng++",
    price: 200000,
    capacity : 40,
    emailAddress : 20,
    emailFowarder : 20,
    mailingList : 2,
    antiVirus : true,
    antiSpam : true,
    emailPerHour : 100,
    emailPerDay : 2400
  },
  {
    name: "Email Hosting Bạc",
    price: 500000,
    capacity : 50,
    emailAddress : 50,
    emailFowarder : 50,
    mailingList : 5,
    antiVirus : true,
    antiSpam : true,
    emailPerHour : 100,
    emailPerDay : 2400
  },
  {
    name: "Email Hosting Bạc++",
    price: 700000,
    capacity : 200,
    emailAddress : 100,
    emailFowarder : 100,
    mailingList : 10,
    antiVirus : true,
    antiSpam : true,
    emailPerHour : 100,
    emailPerDay : 2400
  },
  {
    name: "Email Hosting Vàng",
    price: 400000,
    capacity : 200,
    emailAddress : 200,
    emailFowarder : 200,
    mailingList : 20,
    antiVirus : true,
    antiSpam : true,
    emailPerHour : 100,
    emailPerDay : 2400
  },
  {
    name: "Email Hosting Vàng++",
    price: 600000,
    capacity : 300,
    emailAddress : 300,
    emailFowarder : 300,
    mailingList : 30,
    antiVirus : true,
    antiSpam : true,
    emailPerHour : 100,
    emailPerDay : 2400
  },
  // {
  //   name: "Email Hosting Bạch kim",
  //   price: 2000000,
  //   capacity : 500,
  //   emailAddress : 500,
  //   emailFowarder : 500,
  //   mailingList : 50,
  //   antiVirus : true,
  //   antiSpam : true,
  //   emailPerHour : 100,
  //   emailPerDay : 2400
  // }
  
]
const labelNames : Record<string,string> = {
  capacity: "Dung lượng",
  emailAddress: "Địa chỉ Email",
  emailFowarder: "Email Fowarder",
  mailingList: "Mailing List",
  antiVirus: "Anti Virus",
  antiSpam: "Anti Spam",
  emailPerHour: "Email/giờ",
  emailPerDay: "Email/ngày"
}
</script>

<template>
  <main>
    <Modal title="Đăng ký Dịch vụ">
      <ServiceModal/>
    </Modal>
    <Carousel class="relative w-full" 
    :opts="{
      align: 'start',
      loop: true,
    }"
    :plugins="[Autoplay({
      delay: 6000,
  })]"
    >
    <CarouselContent>
      <CarouselItem v-for="slide in bannerSlides">
        <div class="p-1">
            <div class="grid grid-cols-5 aspect-square p-6 h-[500px] w-full !bg-transparent !border-white">
              <div class="flex flex-col col-span-3 justify-center">
              <span class="text-7xl font-semibold text-primary-black uppercase">{{ slide.title }}</span>
              <Button variant="default" class="w-fit" size="lg">Xem thêm</Button>
              <p class="text-4xl text-primary-black">{{ slide.description }}</p>
              </div>
              <img :src="slide.image" :alt="slide.title" class="bg-no-repeat bg-cover block w-full h-[400px] col-span-2">
            </div>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
  <Carousel class="relative w-full max-w-[1000px] m-auto" 
    :opts="{
      align: 'center',
      loop: true,
      skipSnaps: true,
      slidesToScroll: 3
    }"

    >
    <CarouselContent class="-ml-4">
      <CarouselItem v-for="(slide,index) in serviceSlides " class="basis-1/3 text-center">
            <div class="px-6 flex flex-col gap-3  !border-white" :class="index % 3 == 1 ? '!bg-primary-yellow' : '!bg-transparent text-primary-black'">
              <img src="https://hoster.vn/wp-content/uploads/2025/01/lever2.png" alt="">
              <h3 class="text-2xl font-bold  ">{{slide.name}}</h3>
              <h1 class="text-3xl" :class="index % 3 == 1 ? 'text-white' : ' text-primary-yellow'">{{ slide.price }}</h1>
              <div class="flex justify-between items-center text-xl" v-for="(item,index) in slide">
                <p v-if="index !== 'name' && index !=='price'">
                  {{ labelNames[index] }}
                </p>
                <p v-if="index !== 'name' && index !=='price'">
                  {{ item }}
                </p>
              </div>
              <Button :variant="index % 3 == 1 ? 'secondary' : 'default'" class="w-fit px-8 mx-auto my-5" @click="onOpen()">Đăng kí</Button>
            </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
      <CarouselNext />
  </Carousel>
  <div class="mt-[200px]">
    <h2 class="text-3xl font-bold my-8 text-center">Chính sách dịch vụ</h2>
  <div class="grid grid-cols-4 ">
            
            <!-- Item 1 -->
            <div class="flex items-center gap-3">
                <img src="../assets/Dung-thu-dich-vu-07-ngay.png" alt="">
                <div>
                  <h3 class="font-semibold text-2xl mt-4">Dùng thử dịch vụ 07 ngày</h3>
                <p class="text-gray-600 text-xl mt-2">Trải nghiệm dịch vụ trước khi đăng ký sử dụng chính thức</p>
                </div>
            </div>

            <!-- Item 2 -->
            <div class="flex items-center gap-3">
              <img src="../assets/Hoan-tra-lai-tien-1.png" alt="">

                <div>
                  <h3 class="font-semibold text-2xl mt-4">Hoàn trả lại tiền</h3>
                <p class="text-gray-600 text-xl mt-2">Hoàn trả lại tiền trong 30 ngày nếu không thấy hài lòng</p>
                </div>
            </div>

            <!-- Item 3 -->
            <div class="flex items-center gap-3">
              <img src="../assets/Ho-tro-chuyen-doi-2.png" alt="">
                <div>
                  <h3 class="font-semibold text-2xl mt-4">Hỗ trợ chuyển đổi</h3>
                <p class="text-gray-600 text-xl mt-2">Hỗ trợ toàn bộ việc chuyển đổi từ nhà cung cấp khác về HOSTER</p>
                </div>
            </div>

            <!-- Item 4 -->
            <div class="flex  items-center gap-3">
                <img src="../assets/He-thong-tuong-lua.png" alt="">
                <div>
                  <h3 class="font-semibold text-2xl mt-4">Hệ thống tường lửa</h3>
                <p class="text-gray-600 text-xl mt-2">Hệ thống tường lửa và phòng thủ IP cho tất cả các khách hàng</p>
                </div>
            </div>

        </div>
  </div>
  </main>
</template>
