import { ref } from 'vue'

const isRegisterModalOpen = ref(false)

export function useRegisterModal() {
  const openRegisterModal = () => {
    isRegisterModalOpen.value = true
    document.body.style.overflow = 'hidden'
  }

  const closeRegisterModal = () => {
    isRegisterModalOpen.value = false
    document.body.style.overflow = ''
  }

  return {
    isRegisterModalOpen,
    openRegisterModal,
    closeRegisterModal
  }
}
