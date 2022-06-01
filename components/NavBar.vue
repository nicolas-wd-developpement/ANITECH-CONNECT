<template>
       <v-main > 
            <v-app-bar app color="primary">
                <v-toolbar-title> ANITECH Connect your dog</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn text rounded to="/">Home</v-btn>
                <v-btn text rounded to="/connectTag">Connect a new tag</v-btn>
                <v-btn text rounded to="/petFound">You found a</v-btn>
                <!-- 
                <v-btn text rounded to="/dashBoard">Fonctionnement</v-btn>
                <v-btn text rounded to="/loginUser">Se connecter</v-btn>
                <v-btn text rounded to="/orderTag">Acheter un tag</v-btn>
                -->
            </v-app-bar>
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