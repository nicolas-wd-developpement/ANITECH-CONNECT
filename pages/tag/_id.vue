<template>
    <v-main>
          <v-row>
            <v-col cols="0" lg="2">
                <v-spacer></v-spacer>
            </v-col>
            <v-col cols="12" lg="8">
                <v-text>
                    <h1>Welcome to the id card of {{ tagStore.tag.name }}</h1>
                </v-text>
            </v-col>
            <v-col cols="0" lg="2">  
                <v-spacer></v-spacer>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="0" lg="2">
                <v-spacer></v-spacer>
            </v-col>
            <v-col cols="12" lg="8">
                <v-text>
                    <h1> #ID N° {{ $route.params.id }}</h1>
                    <h2> My name is {{ tagStore.tag.name}}</h2>
                    <h3> I am a {{tagStore.tag.breed}}</h3>
                </v-text>
            </v-col>
            <v-col cols="0" lg="2">  
                <v-spacer></v-spacer>
            </v-col>
        </v-row>
               <v-row>
            <v-col cols="0" lg="2">
                <v-spacer></v-spacer>
            </v-col>
            <v-col cols="12" lg="8">
                <v-text>
                    <p> Please contact my owner email <a href={{tagStore.tag.mail}}>{{tagStore.tag.mail}}</a></p>
                    <p> Please contact or phone {{tagStore.tag.phoneNumber}}</p>
                </v-text>
            </v-col>
            <v-col cols="0" lg="2">  
                <v-spacer></v-spacer>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
import { useTagStore } from '../../store/TagStore'
export default {
      setup(){
      const tagStore = useTagStore()
      return {
        tagStore
      }
    },
       computed: {
    tag() {
      return this.tagStore.tag
    },
    id() {
      return this.$route.params.id
    }
  },
    created() {
      this.tagStore.fetchTag(this.id)
  },
}
</script>
<style>
h1 {
  text-align: center;
}

h2 {
  text-align: center;
}

h3 {
  text-align: center;
}

p {
  text-align: center;
}

.col {
  display: flex;
  align-items: center;
  justify-content: center;
}
.firstBlock{
    margin-top: -35px;
}
</style>