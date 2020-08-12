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
          <img alt="Quasar logo" src="../assets/logo.png" class="image absolute-center">
        </q-toolbar-title>

        <q-btn size="16.5px" flat round icon="local_offer"  />
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="240"
        :breakpoint="500"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list text-white bg-black all-pointer-events q-pt-xl">
            <q-item to="/" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-item to="/mcdelivery" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="local_shipping" />
              </q-item-section>

              <q-item-section>
                McDelivery
              </q-item-section>
            </q-item>

            <q-item to="/myorders" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="shopping_bag" />
              </q-item-section>

              <q-item-section>
                My Orders
              </q-item-section>
            </q-item>

            <q-item to="/cupons" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="money" />
              </q-item-section>

              <q-item-section>
                Cupons
              </q-item-section>
            </q-item>

            <q-item to="/mycupons" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="payments" />
              </q-item-section>

              <q-item-section>
                My Cupons
              </q-item-section>
            </q-item>

            <q-item to="/stickers" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="sticky_note_2" />
              </q-item-section>

              <q-item-section>
                Stickers
              </q-item-section>
            </q-item>

            <q-item to="/giftcard" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="card_giftcard" />
              </q-item-section>

              <q-item-section>
                Gift Card
              </q-item-section>
            </q-item>

            <q-item to="/restaurant" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="restaurant" />
              </q-item-section>

              <q-item-section>
                Restaurantes
              </q-item-section>
            </q-item>

            <q-item to="/menu" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="restaurant_menu" />
              </q-item-section>

              <q-item-section>
                Menu
              </q-item-section>
            </q-item>

            <q-item to="/mcxp" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="chat" />
              </q-item-section>

              <q-item-section>
                McExperiencia
              </q-item-section>
            </q-item>

            <q-item to="/mequisemfila" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="sports_handball" />
              </q-item-section>

              <q-item-section>
                Méqui Sem Fila
              </q-item-section>
            </q-item>

            <q-item to="/qrcode" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="qr_code" />
              </q-item-section>

              <q-item-section>
                QR Code
              </q-item-section>
            </q-item>

            <q-item to="/profile" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>
                Profile
              </q-item-section>
            </q-item>

            <q-item to="/config" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="brightness_high" />
              </q-item-section>

              <q-item-section>
                Configurações
              </q-item-section>
            </q-item>

            <q-item to="/institucional" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="school" />
              </q-item-section>

              <q-item-section>
                Institucional
              </q-item-section>
            </q-item>

            <q-item to="/about" clickable v-ripple exact active-class="text-yellow-7 active">
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>

              <q-item-section>
                About App
              </q-item-section>
            </q-item> <!-- FINAL ITEMS -->
          </q-list>
        </q-scroll-area>
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
  .active {
    border-left: 4px solid #FDD835;
    font-weight: bolder;
    font-size: medium;
  }
</style>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      active: true
    }
  }
}
</script>
