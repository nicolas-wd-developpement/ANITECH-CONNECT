<template>
    <v-main class="productPage" pa-md-4 mx-lg-auto>
        <v-card black>
          <v-row>
              <v-col cols="0" lg="2">
                  <v-spacer></v-spacer>
              </v-col>
              <v-col cols="12" lg="8">
                  <h1 class="display-1"> Order an anitech product</h1>
              </v-col>
              <v-col cols="0" lg="2">
              </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="4">
                 <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                    elevation="11"
                >
                    <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                    </template>

                    <v-img
                    height="250"
                    src="https://strapi-nb0l.onrender.com/uploads/anitech_dog_leash_3be6c42db2.jpg"
                    ></v-img>

                    <v-card-title>Dog leash for large dogs</v-card-title>

                    <v-card-text>
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                        <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                        ></v-rating>

                        <div class="grey--text ms-4">
                        4.3 (843)
                        </div>
                    </v-row>

                    <div class="my-4 text-subtitle-1">
                        $ • Antipull dog leash
                    </div>

                    <div>5 YEAR WARRANTY Anti-Traction Large Dog Lead (6 FT) Safety Belt + Shock Absorption + Reflective Stitching + Double Handle</div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Order from our web site</v-card-title>

                    <v-card-text>
                    <v-chip-group
                        v-model="selection"
                        active-class="deep-purple accent-4 white--text"
                        column
                    >
                        <v-chip><a href="https://anitech-solution.com" target="_blank" rel="noopener">Shipped by amazon</a></v-chip>

                    </v-chip-group>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="4">
                 <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                    elevation="11"
                >
                    <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                    </template>

                    <v-img
                    height="250"
                    src="https://strapi-nb0l.onrender.com/uploads/anitech_dog_car_cover_5d6737a61e.jpg"
                    ></v-img>

                    <v-card-title>Car cover for dogs</v-card-title>

                    <v-card-text>
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                        <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                        ></v-rating>

                        <div class="grey--text ms-4">
                        4.5 (272)
                        </div>
                    </v-row>

                    <div class="my-4 text-subtitle-1">
                        $ •Heavy duty car cover
                    </div>

                    <div>ANITECH Car Rear Seat Covers for dogs - Waterproof with anti split Cover (137 * 147cm).</div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Order from our web shop</v-card-title>

                    <v-card-text>
                    <v-chip-group
                        v-model="selection"
                        active-class="deep-purple accent-4 white--text"
                        column
                    >
                        <v-chip><a href="https://anitech-solution.com" target="_blank" rel="noopener">Shipped by amazon</a></v-chip>
                    </v-chip-group>
                    </v-card-text>
                </v-card>
            </v-col>
             <v-col cols="12" lg="4">
                 <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                    elevation="11"
                >
                    <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                    </template>

                    <v-img
                    height="250"
                    src="https://strapi-nb0l.onrender.com/uploads/anitech_connect_d99bacb93f.jpg"
                    ></v-img>

                    <v-card-title>Anitech connect tag</v-card-title>

                    <v-card-text>
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                        <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                        ></v-rating>

                        <div class="grey--text ms-4">
                        4.5 (413)
                        </div>
                    </v-row>

                    <div class="my-4 text-subtitle-1">
                        $ • Anitech connect Tag
                    </div>

                    <div>Connect your tag to anitech connect and get your pet safe</div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Order anitech connect from our web site</v-card-title>

                    <v-card-text>
                    <v-chip-group
                        v-model="selection"
                        active-class="deep-purple accent-4 white--text"
                        column
                    >
                         <v-chip><a href="https://anitech-solution.com" target="_blank" rel="noopener">Shipped by amazon</a></v-chip>
                    </v-chip-group>
                    </v-card-text>
                </v-card>
            </v-col>
          </v-row>
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
.v-application .white {
    background-color: #fff!important;
    border-color: #fff!important;
    
}

</style>