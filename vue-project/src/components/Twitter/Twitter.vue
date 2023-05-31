<template>
  <div>
    <Textarea v-model="value" rows="5" cols="30" />
    <p class="v">{{ value }}</p>
    <Button label="Submit" @click="createPost" />
  </div>

  <div v-for="post in posts">
    <p class="content">{{ post.content }}</p>
    <Button
      icon="pi pi-heart"
      severity="help"
      text
      rounded
      aria-label="Favorite"
    />
    <Button
      icon="pi pi-times"
      severity="del"
      text
      rounded
      aria-label="Cancel"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "",
  data() {
    return {
      posts: [],
      value: "",
    };
  },
  //ham
  created() {
    this.fetchData()  
  },
  // tap hop cac phuong thuc
  methods: {
    fetchData(){
      axios
      .get("https://647745fd9233e82dd53b51c2.mockapi.io/api/v1/posts")
      .then((response) => {this.posts = response.data})
      .catch((error) => console.log(error));   
    },

    async createPost() {
      let post = {
        content: this.value,
        liked: false,
        date: new Date(),
      };
       const response =  await axios
        .post("https://647745fd9233e82dd53b51c2.mockapi.io/api/v1/posts", post
              )
        .then( (response) => response)
        .catch(function (error) {
          console.log(error);
        });  
        this.value = ""
        console.log(response)
        this.fetchData() 
    },
  },
});
</script>
