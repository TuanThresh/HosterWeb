<script setup lang="ts">
import {RouterView, useRoute } from 'vue-router'
import RouterLinkDropDown from './components/RouterLinkDropDown.vue';
import { ref } from "vue";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Button from './components/ui/button/Button.vue';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuthStore } from './stores/authStore';

const isLogin = useAuthStore().isLogin;

const domain = {
  title: "Tên Miền",
  href: "/",
  children: [
    {
      title: "Bảng giá Tên Miền",
      href: "/ten-mien",
    },
    {
      title: "Kiểm tra Tên Miền",
      href: "/kiem-tra-ten-mien",
    },
    {
      title: "Bảo mật Thông tin Tên Miền",
      href: "/",
    },
    {
      title: "Bảo vệ An toàn Tên Miền",
      href: "/",
    }
  ]
}
const web = {
  title: "Web hosting",
  href: "/",
  children: [
    {
      title: "Linux SSD Hosting",
      href: "/linux-ssd-hosting",
    },
    {
      title: "Linux HDD Hosting",
      href: "/linux-hdd-hosting",
    },
    {
      title: "Windows SSD Hosting",
      href: "/windows-ssd-hosting",
    },
    {
      title: "Định, Chi Phí Tiết Kiệm | Hoster.vn",
      href: "/",
    },
    {
      title: "Windows HDD Hosting – Lưu Trữ Ổn",
      href: "/",
    },
    {
      title: "Reseller Hosting Windows",
      href: "/",
    },
    {
      title: "Reseller Hosting Linux",
      href: "/",
    }
  ]
}
const email = {
  title: "Email hosting",
  href: "/",
  children: [
    {
      title: "Email Hosting",
      href: "/email-hosting",
    },
    {
      title: "Email Server",
      href: "/email-server",
    },
    
  ]
}
const server = {
  title: "Máy Chủ",
  href: "/",
  children: [
    {
      title: "Máy Chủ Ảo – VPS",
      href: "/may-chu-ao",
    },
    {
      title: "Máy Chủ Riêng",
      href: "/may-chu-rieng",
    },
    {
      title: "Máy Chủ Cơ Sở Dữ Liệu",
      href: "/may-chu-co-so-du-lieu",
    },
    
  ]
}
const service = {
  title: "Dịch vụ",
  href: "/",
  children: [
    {
      title: "Tích hợp Hệ thống",
      href: "/danh-sach-dich-vu",
    },
  ]
}

</script>

<template>
    <div class="w-full h-full flex flex-col items-center">
      <img src="./assets/background.png" alt="background" class="absolute top-0 right-0 -z-10">
    <header class="flex items-center justify-between px-[200px] w-full" v-if="isLogin">
    <RouterLink to="/">
      <img src="@/assets/logo.png"/>
    </RouterLink>
    <div class="flex justify-center items-center gap-1 text-[#0a0a0a]">
      <RouterLinkDropDown :component="domain"></RouterLinkDropDown>
      <RouterLinkDropDown :component="web"></RouterLinkDropDown>
      <RouterLinkDropDown :component="email"></RouterLinkDropDown>
      <RouterLinkDropDown :component="server"></RouterLinkDropDown>
      <RouterLinkDropDown :component="service"></RouterLinkDropDown>
      <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Avatar>
        <img src="./assets/profile.png" alt="" class="w-10 h-10 rounded cursor-pointer">
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <RouterLink to="/dang-nhap" class="cursor-pointer">
        <DropdownMenuItem>
          Đăng xuất
        </DropdownMenuItem>
      </RouterLink>
      <RouterLink to="/ho-so" class="cursor-pointer">
        <DropdownMenuItem>
            Hồ sơ
        </DropdownMenuItem>
      </RouterLink>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
    </div>
    
    </header>
    <div class="px-[200px] py-5 w-full h-fit my-auto">
      <RouterView />
    </div>
    <footer class="bg-orange-100 text-gray-900 py-12 mt-[200px] px-[200px]" v-if="isLogin">
        <div class="px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <!-- About Section -->
                <div>
                    <h3 class="font-bold text-lg mb-4">Giới thiệu về chúng tôi</h3>
                    <p class="text-primary-yellow font-semibold">HOSTER VIỆT NAM</p>
                    <p><span class="font-bold">Văn Phòng:</span> Tầng 4 tòa nhà Hatradimex, 22 Lý Tự Trọng, Hải Phòng</p>
                    <p><span class="font-bold">Trụ Sở:</span> 162 Hai Bà Trưng, Hải Phòng</p>
                    <p><span class="font-bold">Điện Thoại:</span> 0225.710.6.222 / 0936.247.365</p>
                    <p><span class="font-bold">Email:</span> contact@hoster.vn</p>
                </div>

                <!-- Important Information -->
                <div>
                    <h3 class="font-bold text-lg mb-4">Thông tin cần biết</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li>› Quy định sử dụng</li>
                        <li>› Hướng dẫn thanh toán</li>
                        <li>› Tư vấn chọn tên miền</li>
                        <li>› Tư vấn chọn hosting</li>
                        <li>› Tư vấn thiết kế website</li>
                    </ul>
                </div>

                <!-- FAQ -->
                <div>
                    <h3 class="font-bold text-lg mb-4">Câu hỏi thường gặp</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li>› Web hosting là gì?</li>
                        <li>› Các yêu cầu tính năng của webhosting?</li>
                        <li>› Tại sao bạn nên dùng Host Việt Nam?</li>
                        <li>› Hosting Windows, Hosting Linux hay Unix?</li>
                        <li>› Băng thông của Web Hosting là gì?</li>
                    </ul>
                </div>

            </div>

            <!-- Bottom Section -->
            <div class="border-t border-gray-300 mt-8 pt-6 text-sm text-gray-600 text-center">
                <div class="flex justify-center space-x-4">
                    <a href="#" class="text-primary-yellow font-semibold">Liên hệ</a>
                    <span>|</span>
                    <a href="#" class="text-primary-yellow font-semibold">Quy định</a>
                    <span>|</span>
                    <a href="#" class="text-primary-yellow font-semibold">Trang chủ</a>
                </div>
                <p class="mt-4">Copyright © 2025, bản quyền website & giao diện thuộc về <span class="text-primary-yellow font-semibold">Hoster Việt Nam</span></p>
                <p>Sử dụng nội dung ở trang này và dịch vụ tại Hoster Việt Nam có nghĩa là bạn đồng ý với <span class="text-primary-yellow font-semibold">Chính sách sử dụng</span> và <span class="text-orange-600 font-semibold">Chính sách bảo mật</span>.</p>
            </div>

        </div>
    </footer>
  </div>
</template>

