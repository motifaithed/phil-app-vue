<template>
  <router-link class="nav-link" :to="to">
    <div
      class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
      :class="isRTL ? ' ms-2' : 'me-2'"
    >
      <slot name="icon"></slot>
    </div>
    <span class="sidenav-normal"> {{ text }} </span>
  </router-link>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "DirectnavItem",
  props: {
    to: {
      type: [Object, String],
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["isRTL"]),
  },
};
</script>
