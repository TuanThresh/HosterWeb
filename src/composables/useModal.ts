import { reactive, toRefs } from "vue";

const state = reactive(
    {
        isOpen : false
    }
)

const { isOpen } = toRefs(state);

const onOpen = () => isOpen.value = true;

const onClose = () => isOpen.value = false;

export {
    isOpen,
    onOpen,
    onClose
}