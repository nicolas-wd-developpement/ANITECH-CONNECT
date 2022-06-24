<template>
  <v-app>
    <v-header v-if= "$vuetify.breakpoint.lgAndUp">
      <NavBar ></NavBar>
      <nuxt/>
    </v-header>
    <v-header v-else>
      <NavBarMobile></NavBarMobile>
    </v-header>
    <v-footer  v-if= "$vuetify.breakpoint.lgAndUp">
    <FooterSection></FooterSection>
    </v-footer>
    <v-footer v-else>
      <FooterSectionMobile></FooterSectionMobile>
    </v-footer>
  </v-app>
</template>

<script>
import FooterSection from '../components/FooterSection.vue'
import NavBar from '../components/NavBar.vue'
import NavBarMobile from '../components/NavBarMobile.vue'
export default {
  name: 'DefaultLayout',
  components: { NavBar, FooterSection, NavBarMobile},
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  computed: {
  availableLocales () {
    return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  }
}
}
</script>
<style>
h1 {
  text-align: center;
  padding: 20px;
  line-height: 1.2em;

}

h2 {
  text-align: center;
}

h3 {
  text-align: center;
}
.col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-application .white {
    background-color: #fff!important;
    border-color: #fff!important;
}

.element.style {
    padding: 20px 0px 20px;
}

.v-footer {
    background-color: #2196F3 !important;
}

element.style {
    padding: 0px 0px 0px !important;
}

</style>
