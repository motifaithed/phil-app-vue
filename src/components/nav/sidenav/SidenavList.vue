<template>
  <div
    id="sidenav-collapse-main"
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse
          collapse-ref="dashboardsExamples"
          nav-text="Dashboards"
          :class="getRoute() === 'dashboards' ? 'active' : ''"
        >
          <template #icon>
            <Manager />
          </template>
          <template #list>
            <ul class="nav ms-4 ps-3">
              <!-- nav links -->
              <sidenav-item
                :to="{ name: 'Default' }"
                mini-icon="D"
                text="Default"
              />
            </ul>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <directnav-item :to="{ name: 'Todo' }" text="To do">
          <template #icon>
            <Manager />
          </template>
        </directnav-item>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
import Manager from "../../icons/Manager.vue";
import SidenavItem from "./SidenavItem.vue";
import DirectnavItem from "./DirectnavItem.vue";
import { mapState } from "vuex";

export default {
  name: "SidenavList",
  components: {
    SidenavCollapse,
    Manager,
    SidenavItem,
    DirectnavItem,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
  props: {
    cardBg: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState(["isRTL"]),
  },
};
</script>
