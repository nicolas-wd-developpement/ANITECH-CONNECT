<template>
       <v-main > 
            <v-app-bar app color="primary">
                <v-toolbar-title> <v-btn class="title" to="/">ANITECH CONNECT your dogs</v-btn></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn text rounded to="/">Home</v-btn>
                <v-btn text rounded to="/connectTag">Connect a new tag</v-btn>
                <v-btn text rounded to="/petFound">You found a pet</v-btn>
                <v-btn text rounded to="/contactUs">Contact Us</v-btn>
                <v-btn text rounded to="/orderTag">Order ANITECH products</v-btn>
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

.title{
    background: #1976D2 !important;
    color: white
}
</style>