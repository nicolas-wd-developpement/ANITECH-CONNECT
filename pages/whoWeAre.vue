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
                                <h1>
                                    {{$t('whoWeAre')}}
                                </h1>
                            </v-text>
                            <v-card-text>
                                <p><span itemprop="description">{{$t('whoWeAreDetailed')}}</span></p>
                                <p>{{$t('companyAddress')}}</p>
                                <p>Import and Retail international DAC</p>
                                <p>Unit 3D North Point House, North Point Business Park, New Mallow Road</p>
                                <p>T23 AT2P Cork Ireland</p>
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

@media screen and (min-width: 992px){
    .v-footer {
        margin-top: 519px !important;
    }
}

@media only screen and (max-width: 600px)  {
    .v-footer {
        margin-top: -800px;
    }

}


</style>