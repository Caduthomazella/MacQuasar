<template>
  <div>
    <q-carousel
      style="height: 45vh;"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://www.mundodomarketing.com.br/assets/img/promocoes/imagem/6b277bc9ec9a7e61a8183d32ecf7808a.jpg" />
      <q-carousel-slide :name="2" img-src="https://static.pelando.com.br/live/threads/content/hdWcF/221262.jpg" />
      <q-carousel-slide :name="3" img-src="https://static.pelando.com.br/live/threads/content/sfMlv/219726.jpg" />
      <q-carousel-slide :name="4" img-src="https://scontent.fsod9-1.fna.fbcdn.net/v/t1.0-9/32973571_1802381766486535_5832599135957549056_n.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=4IvsUX-nnucAX8aC8ra&_nc_ht=scontent.fsod9-1.fna&oh=b15c975ad715cddc3fcfc56a8e5726b5&oe=5F575CAD" />
    </q-carousel>

    <q-list class="column">
      <q-item clickable v-ripple class="col-12 bg-red border" style="height: 16.5vh">
        <q-item-section avatar>
          <q-icon size="40px" class="q-pl-lg text-white" name="local_shipping" />
        </q-item-section>
        <q-item-section class="text-white" style="font-weight: bolder;">McDelivery</q-item-section>
      </q-item>

      <q-item clickable v-ripple class="col-12 bg-red border" style="height: 16.5vh">
        <q-item-section avatar>
          <q-icon size="40px" class="q-pl-lg text-white" name="drive_eta" />
        </q-item-section>
        <q-item-section class="text-white" style="font-weight: bolder;">Drive-Thrus</q-item-section>
      </q-item>

      <q-item clickable v-ripple class="col-12 bg-red border" style="height: 16.5vh">
        <q-item-section avatar>
          <q-icon size="40px" class="q-pl-lg text-white" name="collections_bookmark" />
        </q-item-section>
        <q-item-section class="text-white" style="font-weight: bolder;">Cupons</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<style lang="scss" scoped>
  .border {
    border-bottom: 1.4px solid white;
  }
</style>

<script>
export default {
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  }
}
</script>
