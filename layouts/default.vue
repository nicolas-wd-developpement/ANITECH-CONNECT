<template>
  <v-app>
    <v-header v-if= "$vuetify.breakpoint.lgAndUp">
      <NavBar ></NavBar>
      <nuxt/>
    </v-header>
    <v-header v-else>
      <NavBarMobile></NavBarMobile>
    </v-header>
    <FooterSection></FooterSection>
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
}
</script>
<style>
h1 {
  text-align: center;
  margin-top: -20px;

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
    padding-top: 20px !important;
    margin-top: 20px  !important;
    height: 710px;
}

element.style {
    padding: 20px 0px 20px;
}
</style>
