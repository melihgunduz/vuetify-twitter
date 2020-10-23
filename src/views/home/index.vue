<template>
  <v-container>
    <v-row>
      <Post></Post>
    </v-row>
  </v-container>
</template>

<script>
import Post from "@/components/Post";
export default {
  name: 'Home',
  components: {Post},
  data: () => ({
  }),

};
</script>
