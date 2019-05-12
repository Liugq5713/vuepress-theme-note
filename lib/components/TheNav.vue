<template>
  <div class="navbar">
    <ul
      id="slide-out"
      class="sidenav sidenav-fixed"
      style="width: 350px;"
    >
      <li>
        <InfoCard />
      </li>
      <li>
        <a href="#!">
          <i class="material-icons">cloud</i>First Link With Icon
        </a>
      </li>
      <li>
        <a href="#!">Second Link</a>
      </li>
      <li>
        <div class="divider" />
      </li>
      <li>
        <a class="subheader">Subheader</a>
      </li>
      <li>
        <a
          class="waves-effect"
          href="#!"
        >Third Link With Waves</a>
      </li>
    </ul>
    <a
      href="#"
      data-target="slide-out"
      class="sidenav-trigger"
    >
      <i class="material-icons">menu</i>
    </a>

    <PostNavCard
      v-if="$page.type === 'post'"
      class="main-div"
    />
  </div>
</template>

<script>
/* eslint-disable */

import InfoCard from "./InfoCard";
import PostNavCard from "./PostNavCard.vue";

export default {
  components: {
    InfoCard,
    PostNavCard
  },
  created() {
    console.log(this);
    console.log(this.$page);
  },
  mounted() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, { edge: "left" });
    console.log(instances);
  }
};
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/helper';
</style>
