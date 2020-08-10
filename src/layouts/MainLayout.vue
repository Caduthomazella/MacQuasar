<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-red">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <img alt="Quasar logo" src="https://logodownload.org/wp-content/uploads/2014/04/McDonalds-logo.png" class="image absolute-center">
        </q-toolbar-title>

        <q-btn size="16.5px" flat round icon="local_offer"  />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-black"
    >
      <q-list>
        <q-item-label
          header
          class="text-white"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="text-white"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
  .image {
    width: 8%;
  }
</style>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    icon: 'home',
    link: 'https://quasar.dev'
  },
  {
    title: 'McDelivery',
    icon: 'local_shipping',
    link: 'https://quasar.dev'
  },
  {
    title: 'My Orders',
    icon: 'shopping_bag',
    link: 'https://quasar.dev'
  },
  {
    title: 'Cupons',
    icon: 'money',
    link: 'https://quasar.dev'
  },
  {
    title: 'My Coupons',
    icon: 'payments',
    link: 'https://quasar.dev'
  },
  {
    title: 'Stickers',
    icon: 'sticky_note_2',
    link: 'https://quasar.dev'
  },
  {
    title: 'Gift Card',
    icon: 'card_giftcard',
    link: 'https://quasar.dev'
  },
  {
    title: 'Restaurantes',
    icon: 'restaurant',
    link: 'https://quasar.dev'
  },
  {
    title: 'Menu',
    icon: 'restaurant_menu',
    link: 'https://quasar.dev'
  },
  {
    title: 'McExperiencia',
    icon: 'chat',
    link: 'https://quasar.dev'
  },
  {
    title: 'Méqui Sem Fila',
    icon: 'sports_handball',
    link: 'https://quasar.dev'
  },
  {
    title: 'QR Code',
    icon: 'qr_code',
    link: 'https://quasar.dev'
  },
  {
    title: 'Profile',
    icon: 'person',
    link: 'https://quasar.dev'
  },
  {
    title: 'Configurações',
    icon: 'brightness_high',
    link: 'https://quasar.dev'
  },
  {
    title: 'Institucional',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Sobre App',
    icon: 'info',
    link: 'https://quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
