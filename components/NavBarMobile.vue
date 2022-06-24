<template>
       <v-main >
                <v-sheet
                    height="800"
                    class="overflow-hidden"
                    style="position: relative;"

                >
                    <v-app-bar
                    color="primary"
                    dark
                    >
                    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

                    <v-toolbar-title>Anitech connect</v-toolbar-title>
                    </v-app-bar>

                    <v-navigation-drawer
                    v-model="drawer"
                    absolute
                    temporary
                    >
                    <v-list
                        nav

                    >
                        <v-list-item-group
                        v-model="group"
                        active-class="deep-purple--text text--accent-4"
                        >
                            <v-list-item>
                                <v-list-item-icon>
                                    <a :href="localePath('/home')">
                                        <v-icon>mdi-home</v-icon>
                                    </a>
                                </v-list-item-icon>
                                <v-list-item-title><a :href="localePath('/home')">{{$t("home")}}</a></v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <a :href="localePath('/connectTag')">                           
                                    <v-list-item-icon>
                                    <v-icon>mdi-tag</v-icon>
                                    </v-list-item-icon>
                                </a>
                                <v-list-item-title><a :href="localePath('/connectTag')">{{$t("connectYourTag")}}</a></v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <a :href="localePath('/petFound')">
                                    <v-list-item-icon>
                                    <v-icon>mdi-dog</v-icon>
                                    </v-list-item-icon>
                                </a>
                                <v-list-item-title> <a :href="localePath('/petFound')">{{$t("petFoundNav")}}</a></v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <a :href="localePath('/orderTag')">
                                    <v-list-item-icon>
                                    <v-icon>mdi-cart</v-icon>
                                    </v-list-item-icon>
                                </a>
                                <v-list-item-title><a :href="localePath('/orderTag')">{{$t("orderNav")}}</a> </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <a :href="localePath('/dashBoard')">
                                    <v-list-item-icon>
                                    <v-icon>mdi-network-strength-1</v-icon>
                                    </v-list-item-icon>
                                </a>
                                <v-list-item-title><a :href="localePath('/dashBoard')">{{$t("howItWorks")}}</a></v-list-item-title>
                            </v-list-item>
                            <v-list-group
                            :value="true"
                            prepend-icon="mdi-flag"
                            >
                                <template #activator>
                                    <v-list-item-title>{{$t("language")}}</v-list-item-title>
                                </template>
                                    <v-list-item>
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
                                    </v-list-item>
                            </v-list-group>
                        </v-list-item-group>
                      </v-list>
                    </v-navigation-drawer>
                <nuxt/>
                </v-sheet>
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
    },
  }
</script>

<style lang="scss" scoped>
a{
    text-decoration-line:none;
}
</style>