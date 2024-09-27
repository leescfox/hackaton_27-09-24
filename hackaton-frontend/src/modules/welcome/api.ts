import axios from 'axios'
import type { Roles } from '@/modules/welcome/enums/roles'

export const welcomeApi = {
  async getLobbyId(role: Roles) {
    try {
      const { data } = await axios.post('/lobby', { role })

      await navigator.clipboard.writeText(data)
    } catch {
      console.log('Произошла ошибка')
    }
  }
}
