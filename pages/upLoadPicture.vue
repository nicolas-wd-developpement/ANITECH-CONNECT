<template>
  <div class="white" height=600 pa-md-4 mx-lg-auto>
    <form ref="uploadForm" @submit.prevent="sendToStrapi">
      <input type="text" name="name">
      <input type="file" name="image" @change="handleFileUpload">
      <input type="submit" name="Submit" @click="sendToStrapi">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    form: [],
    formElements: [],
    data: {},
    selectedFile: null
  }),
  mounted() {
     this.form = this.$refs.uploadForm;
  },
  methods:{
    handleFileUpload(event) {
          this.selectedFile = event.target.files[0]
          console.log(this.selectedFile)
        },
    sendToStrapi() {
      const formData = new FormData()
      // formData.append("data", JSON.stringify(this.data));
      formData.append('picture',this.selectedFile,'picture')

      console.log(formData)
      axios.post("https://strapi-nb0l.onrender.com/api/upload", formData).then(res => console.log(res));
      }
    }
  }

</script>
<style scoped>

</style>