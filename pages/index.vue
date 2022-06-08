<template>
    <v-main class="white" height=600 pa-md-4 mx-lg-auto>
            <v-card-text class="firstBlock">
                <v-row>
                    <v-col cols="0" lg="2">
                        <v-spacer></v-spacer>
                    </v-col>
                    <v-col cols="12" lg="8">
                        <h1>Online identification</h1>
                    </v-col>
                    <v-col cols="0" lg="2">
                        <v-spacer></v-spacer>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-sparkline></v-sparkline>
            <v-spacer></v-spacer>
            <v-row>
                
                <v-col>
                    <v-spacer></v-spacer>
                </v-col>
                <v-col>
                <transition name="popup">
                    <v-btn
                        color="info"
                        height="150"
                        width=" 200"
                        rounded 
                        to="/connectTag"
                        class="myBtn"
                
                    >
                        Activate your tag
                    <v-icon>mdi-account-circle</v-icon>
                    </v-btn>
                </transition>
                </v-col>
                <v-col>  
                    <v-spacer></v-spacer>
                </v-col>
            </v-row>
            <v-row>
                
                <v-col>
                    <v-spacer></v-spacer>
                </v-col>
                <v-col>
                    <transition name="popup">
                    <v-btn
                        color="warning"
                        height="150"
                        width=" 200"
                        rounded 
                        to="/petFound"
                        class="myBtn"
                
                    >
                        found a pet
                    <v-icon>mdi-dog</v-icon>
                    </v-btn>
                    </transition>
                </v-col>
                <v-col>  
                    <v-spacer></v-spacer>
                </v-col>
            </v-row>
            <v-card-text>
                <v-row>
                    <v-col cols="0" lg="2">
                        <v-spacer></v-spacer>
                    </v-col>
                    <v-col cols="12" lg="8">
                        <h2>Register your ANITECH tag get your online ID</h2>
                    </v-col>
                    <v-col cols="0" lg="2">
                        <v-spacer></v-spacer>
                    </v-col>
                </v-row>
            </v-card-text>
    </v-main>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
}
</script>
<style>
.popup-enter {
    opacity: 0;
}

.popup-enter-active {
   transition: opacity 0.5s ease-out

}
</style>
