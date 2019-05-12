<template>
  <div
    class="card cyan lighten-5 margin-zero"
    style="min-height:100vh"
  >
    <InfoCard />
    <PostNavCard
      v-if="$page.type === 'post'"
      class="main-div"
    />
  </div>
</template>

<script>
import InfoCard from './InfoCard'
import PostNavCard from './PostNavCard.vue'

export default {
  components: {
    InfoCard,
    PostNavCard,
  },
  created() {
    console.log(this)
    console.log(this.$page)
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/helper';
</style>
