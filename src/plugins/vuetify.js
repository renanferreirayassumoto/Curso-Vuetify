// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  defaults: {
    global: {
      ripple: true
    },
    VBtn: {
      variant: 'tonal',
      color: 'renan'
    },
    VTextField: {
      variant: 'outlined'
    },
    VSelect: {
      variant: 'outlined'
    }
  },

  theme: {
    themes: {
      light: {
        colors: {
          primary: '#61850d',
          secondary: '#850d0d',
          renan: '#0e325c'
        }
      },
      dark: {
        colors: {
          primary: '#b4edb5',
          secondary: '#edb4b4',
          renan: '#85b5ed'
        }
      }
    }
  }
})