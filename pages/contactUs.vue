<template>
    <v-main  style="padding: 0;">
        <v-sheet
        height="650"
        class="overflow-hidden"
        style="position: relative;"
        >
            <v-card black>
                <v-row>
                    <v-col cols="0" lg="2">
                        <v-spacer></v-spacer>
                    </v-col>
                    <v-col cols="12" lg="8">
                        <v-card-title>
                            <h1> {{$t("contactUs")}}</h1>
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
                                <h2> {{$t('techIssue')}}</h2>
                            </v-card-title>
                            <v-card-text>
                                <p> {{$t("sendUsMail")}}</p>
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
                                <h2> {{$t('otherQuestions')}}</h2>
                            </v-card-title>
                            <v-card-text>
                                <p> {{$t("sendUsMail")}}</p>
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