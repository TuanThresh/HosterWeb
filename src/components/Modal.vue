<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { isOpen,onClose } from '@/composables/useServiceModal';
type Props = {
    title? : string

}
defineProps<Props>();
</script>

<template>
  <Dialog :open="isOpen" @update:open="onClose()">
    <DialogContent>
      <DialogHeader>
        <DialogTitle v-if="title">{{ title }}</DialogTitle>

      </DialogHeader>
      <slot/>
    </DialogContent>
  </Dialog>
</template>