<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { RouterLink } from 'vue-router';
const props = defineProps({
  component : Object
});

</script>

<template>
  <NavigationMenu >
    <NavigationMenuList>
      <NavigationMenuItem >
        <NavigationMenuTrigger 
            class="py-2 !text-[#0a0a0a] !bg-transparent hover:!text-[#fc9a19] border border-transparent cursor-pointer"
          >
            <RouterLink :to="component?.href">{{ component?.title }}</RouterLink>
        </NavigationMenuTrigger>
        <NavigationMenuContent >
          <ul class="grid gap-3 p-2 w-[150px]">
            <RouterLink :to="item.href" class="text-[#0a0a0a]  w-full h-full hover:text-[#fc9a19] hover:bg-gray-50" v-for="item in component?.children">
                    {{ item.title }}
            </RouterLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      
    </NavigationMenuList>
  </NavigationMenu>
</template>