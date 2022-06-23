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
                                <a :to="localePath('/home')">
                                    <v-icon>mdi-home</v-icon>
                                </a>
                            </v-list-item-icon>
                            <v-list-item-title><a :to="localePath('/home')">{{$t("home")}}</a></v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <a :to="localePath('/connectTag')">                           
                                <v-list-item-icon>
                                <v-icon>mdi-tag</v-icon>
                                </v-list-item-icon>
                            </a>
                            <v-list-item-title><a :to="localePath('/connectTag')">{{$t("connectYourTag")}}</a></v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <a :to="localePath('/petFound')">
                                <v-list-item-icon>
                                <v-icon>mdi-dog</v-icon>
                                </v-list-item-icon>
                             </a>
                            <v-list-item-title> <a :to="localePath('/petFound')">{{$t("petFoundNav")}}</a></v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <a :to="localePath('/orderTag')">
                                <v-list-item-icon>
                                <v-icon>mdi-cart</v-icon>
                                </v-list-item-icon>
                             </a>
                            <v-list-item-title><a :to="localePath('/orderTag')">{{$t("orderNav")}}</a> </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <a :to="localePath('/dashBoard')">
                                <v-list-item-icon>
                                <v-icon>mdi-network-strength-1</v-icon>
                                </v-list-item-icon>
                             </a>
                            <v-list-item-title><a :to="localePath('/dashBoard')">{{$t("howItWorks")}}</a></v-list-item-title>
                        </v-list-item>
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
</style>