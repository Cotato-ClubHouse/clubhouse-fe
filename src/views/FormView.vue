
<template>
    <div class="group">
          <input type="submit" class="button" value="Sign Up" @click.prevent = "reissue">
        </div>
</template>

<script>
import axios from "axios";
  

  export default{
    data(){
      return {
        email : "",
        password : "",
        username : ""
      };
    },
    mounted() {
    console.log(this.$store.getters.getToken); // Check if this line prints the token correctly
     },
    methods: {
    async reissue() {
      const url = "http://localhost:8080/v1/users/form";
      const token = this.$store.getters.getToken; // Assuming you have a getter to retrieve the token
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      try {
        const response = await axios.post(url, null, { headers });
        // 처리할 로직 작성
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    },
  },
  }
</script>