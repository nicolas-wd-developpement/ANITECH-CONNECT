<template>
       <v-main  class="pa-ma-0" >
            <v-app-bar app color="primary" class="pa-ma-0">
                <v-toolbar-title> <v-btn class="title" :to="localePath('/home')">{{$t("anitechTitle")}}</v-btn></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn text rounded :to="localePath('/home')">{{$t("home")}}</v-btn>
                <v-btn text rounded :to="localePath('/connectTag')">{{$t("connectTag")}}</v-btn>
                <v-btn text rounded :to="localePath('/petFound')">{{$t("petFound")}}</v-btn>
                <v-btn text rounded :to="localePath('/dashBoard')">{{$t("howItWorks")}}</v-btn>
                <v-btn text rounded :to="localePath('/orderTag')">{{$t("orderAnitechProduct")}}</v-btn>
                <div class="text-center">
                    <v-menu offset-y>
                    <template #activator="{ on, attrs }">
                        <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        {{$t("language")}}
                        </v-btn>
                    </template>
                    <v-list>
                        <nuxt-link
                        v-for="locale in availableLocales"
                        :key="locale.code"
                        :to="switchLocalePath(locale.code)">
                        <v-list-item>
                        {{ locale.name }}
                        </v-list-item>
                        </nuxt-link>
                    </v-list>
                    </v-menu>
                </div>
            </v-app-bar>
    </v-main>
</template>


<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
    computed: {
    availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    },
    watch:{
        dynamicHeigth(drawer){
            if(drawer){
                return 150
            }
            return 0
        }
    }
  }
</script>

<style lang="scss" scoped>
a{
    text-decoration-line:none;
}

.title{
    background: #1976D2 !important;
    color: white
}
</style>