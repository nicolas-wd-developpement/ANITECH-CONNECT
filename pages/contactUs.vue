<template>
    <v-main class="white" height=1400 pa-md-4 mx-lg-auto>
        <v-card black>
            <v-row>
                <v-col cols="0" lg="2">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col cols="12" lg="8">
                    <v-card-title>
                        <h1> Contact us</h1>
                    </v-card-title>
                </v-col>
                <v-col cols="0" lg="2">
                    <v-spacer></v-spacer>
                </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <v-row>
                <v-col cols="0" lg="2">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col cols="12" lg="4">
                    <v-card
                     elevation="11">
                        <v-card-title>
                            <h2> For technical issues or question</h2>
                        </v-card-title>
                        <v-card-text>
                            <p> Please send an email to:</p>
                        </v-card-text>
                        <v-card-text>
                            <a href="mailto:">nicolasblond@web-designers.fr</a>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" lg="4">
                    <v-card
                     elevation="11">
                        <v-card-title>
                            <h2> For any other question</h2>
                        </v-card-title>
                        <v-card-text>
                            <p> Please send an email to:</p>
                        </v-card-text>
                        <v-card-text>
                            <a href="mailto:">ir.sales@outlook.com</a>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="0" lg="2">
                    <v-spacer></v-spacer>
                </v-col>
            </v-row>
             <v-sparkline></v-sparkline>
        </v-card>
     </v-main>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 992px){
    .v-footer {
        margin-top: 519px !important;
    }
}


</style>