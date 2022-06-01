<template>
  <div class="hello">
    <form @submit.prevent="sendToStrapi">
      <input type="text" name="name">
      <input type="file" name="image">
      <input type="submit" name="Submit">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods:{
    sendToStrapi() {
      const form = this.$refs["upload-Form"];
      const formData = new FormData();
      const formElements = form.elements;
      const data = {};
      formElements.forEach(currentElement => {
        if (!["submit", "file"].includes(currentElement.type)) {
          data[currentElement.name] = currentElement.value;
        } else if (currentElement.type === "file") {
          if (currentElement.files.length === 1) {
            const file = currentElement.files[0];
            formData.append(`files.${currentElement.name}`, file, file.name);
          } else {
            for (let i = 0; i < currentElement.files.length; i++) {
              const file = currentElement.files[i];
              formData.append(`files.${currentElement.name}`, file, file.name);
            }
          }
        }
      });
      formData.append("data", JSON.stringify(data));
      axios.post("https://strapi-nb0l.onrender.com/tags/", formData).then(res => console.log(res));
      }
    }
  }

</script>
<style scoped>

</style>