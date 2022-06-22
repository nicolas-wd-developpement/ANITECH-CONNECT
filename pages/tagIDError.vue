<template>
  <v-main class="white" height=600 style="padding: 0;">
      <v-sheet
    height="620"
    class="overflow-hidden"
    style="position: relative;"
    >
        <v-card-text>
                <h1>The tag id you entered is not saved in our database.</h1>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-container>
          <v-row
          justify="space-between"
          no-gutters>
              <v-col cols="0" lg="2"></v-col>
              <v-col 
                  cols="0" 
                  lg="8"    
                  align="center"
                  no-gutters> 
              <v-btn
                  v-for="(link, index) in links"
                  :key="index"
                  text
                  rounded
                  class="my-2"
                  :to="link.url"
                  >
                      {{ link.label }}
              </v-btn>
              </v-col>
              <v-col cols="0" lg="2"></v-col>
          </v-row>
        </v-container>
    </v-sheet>
  </v-main>
</template>
<script>
export default {
    data: () => ({
      links: [ {
        label:'Home',
        url: '/'
      },
      {
        label:'Activate a tag',
        url: '/connectTag'
      },
      {
        label:'Order a product',
        url: '/orderTag'
      },
      {
        label:'I found a pet',
        url: '/petFound'
      }
      ],
    })
}
</script>

<style lang="scss" scoped>
h1 {
    padding: 20px;
}

</style>