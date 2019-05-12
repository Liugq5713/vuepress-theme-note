<template>
  <div id="vuepress-theme-meteorlxy">
    <div class="row">
      <div class="col s3 padding-zero margin-zero">
        <TheNav />
      </div>
      <div class="col s9">
        <TheMain />
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheNav from '../components/TheNav.vue'
import TheMain from '../components/TheMain.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'ThemeMeteorlxy',

  components: {
    TheNav,
    TheMain,
    TheFooter,
  },
}
</script>
<style lang="stylus" scoped>
@require '~@theme/styles/helper';
</style>
