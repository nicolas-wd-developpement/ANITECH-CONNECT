<template>
    <v-main class="productPage"  style="padding: 0;">
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

.col, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-auto, .col-lg, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-auto, .col-md, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md-auto, .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-auto {
    width: 100%;
    padding: 0px;
}

</style>