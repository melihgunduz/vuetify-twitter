<template>
    <v-row>
      <Post></Post>
    </v-row>
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
