<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Button from '@/components/ui/button/Button.vue'
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
    <h1 class="text-3xl font-bold mt-6">EMAIL HOSTING</h1>
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
              <Button :variant="index % 3 == 1 ? 'secondary' : 'default'" class="w-fit px-8 mx-auto my-5">Đăng kí</Button>
            </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
      <CarouselNext />
  </Carousel>
</template>