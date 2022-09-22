<template>
<side-nav
v-if="showSidenav"
    :custom-class="color"
    :class="[isTransparent, isRTL ? 'fixed-end' : 'fixed-start']"
></side-nav> 
<main
    class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
  >
  <navbar
      v-if="showNavbar"
      :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : '']"
      :text-white="isAbsolute ? 'text-white opacity-8' : ''"
      :min-nav="navbarMinimize"
    ></navbar>
  
    <router-view></router-view>
    <configurator
      :toggle="toggleConfigurator"
      :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']"
    />
</main>
</template>

<script>
import SideNav from './components/nav/sidenav/TheSideNav.vue';
import Navbar from './components/nav/mainnav/TheNavbar.vue';
import Configurator from './components/utils/Configurator.vue';
import { mapMutations,mapState } from 'vuex';
export default {
  name: 'App',
  components:{
    SideNav,
    Navbar,
    Configurator
  },
  computed: {
    ...mapState([
      "isTransparent",
      "isRTL",
      "isNavFixed",
      "isAbsolute",
      "navbarFixed",
      "absolute",
      "color",
      "showSidenav",
      "showNavbar",
      "showFooter",
      "showConfig",
      "hideConfigButton",
    ]),
    
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
}
</script>


