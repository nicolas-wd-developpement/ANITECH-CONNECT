<template>
    <v-main class="white" style="padding: 0;">
        <v-sheet
        height="620"
        class="overflow-hidden"
        style="position: relative;"
        >
            <v-card black>
                <v-row>
                    <v-col cols="0" lg="2">
                        <v-spacer></v-spacer>
                    </v-col>
                    <v-col cols="12" lg="8">
                        <v-card
                            elevation="11"
                        >
                            <v-text>
                                <h1>{{$t('tos')}}</h1>
                            </v-text>
                            <v-card-text>
                                    <p>{{$t('anitechConnectTos')}}
                                        {{$t('thirdPartyNotOwned')}}
                                        <a href="https://www.web-designers.fr">www.web-designers.fr</a>  
                                        {{$t('thirdPartyOwned')}}
                                        <a href="https://www.import-retail.com">www.import-retail.com</a>
                                        <a href="https://www.anitech-shop.com">https://www.anitech-shop.com</a>
                                        <a href="https://www.anitech-solutions.com">https://www.anitech-solutions.com</a>
                                    </p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="0" lg="2">
                        <v-spacer></v-spacer>
                    </v-col>
                </v-row>
            </v-card>
        </v-sheet>
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

</style>