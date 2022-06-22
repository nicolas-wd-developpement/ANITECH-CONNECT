<template>
       <v-main >
                <v-sheet
                    height="700"
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
                                <a href="/">
                                    <v-icon>mdi-home</v-icon>
                                </a>
                            </v-list-item-icon>
                            <v-list-item-title><a href="/">Home</a></v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <a href="/connectTag">                           
                                <v-list-item-icon>
                                <v-icon>mdi-tag</v-icon>
                                </v-list-item-icon>
                            </a>
                            <v-list-item-title><a href="/connectTag">Connect your tag</a></v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <a href="/petFound">
                                <v-list-item-icon>
                                <v-icon>mdi-dog</v-icon>
                                </v-list-item-icon>
                             </a>
                            <v-list-item-title> <a href="/petFound">Pet Found</a></v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <a href="/orderTag">
                                <v-list-item-icon>
                                <v-icon>mdi-cart</v-icon>
                                </v-list-item-icon>
                             </a>
                            <v-list-item-title><a href="/orderTag">Order</a> </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <a href="/dashBoard">
                                <v-list-item-icon>
                                <v-icon>mdi-network-strength-1</v-icon>
                                </v-list-item-icon>
                             </a>
                            <v-list-item-title><a href="/dashBoard">How it works</a></v-list-item-title>
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