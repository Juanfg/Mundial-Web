<template>
  <div>
    <p-navbar></p-navbar>
    <p-header></p-header>
    <div class="main main-raised">
      <div class="section section-basic">
        <router-view v-if="$store.state.isUserLoggedIn"></router-view>
        <login v-else></login>
      </div>
    </div>
    <p-footer></p-footer>
  </div>
</template>

<script>
import PNavbar from '~/components/PNavbar.vue'
import PHeader from '~/components/PHeader.vue'
import PFooter from '~/components/PFooter.vue'
import Login from '~/components/Login.vue'

export default {
  components: {
    PNavbar,
    PHeader,
    PFooter,
    Login
  }
}
</script>

<style>
</style>
