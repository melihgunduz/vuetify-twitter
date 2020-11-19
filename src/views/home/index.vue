<template>
  <v-row>
    <v-card class="d-none d-lg-block d-xl-block mx-auto" width="600" flat>
      <v-card-title>
        <v-toolbar-title class=" d-block font-weight-black text-h6  ">Anasayfa</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="transparent" depressed small>
          <v-icon color="blue">mdi-cog-outline</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
    <CreatePost @tweet="newPost" />
    <Post v-for="(post, i) in list" :key="`post-${i}`" :postData="post" />
  </v-row>
</template>

<script>
import Post from '@/components/Post';
import CreatePost from '@/components/CreatePost';
export default {
  name: 'Home',
  components: { Post, CreatePost },
  data: () => ({
    list: []
  }),
  mounted() {
    this.newPost({
      id: 1000,
      text: 'Ben melo yo!',
      retweet: true,
      visibleRt: true,
      visibleLike: false
    });

    this.newPost({
      id: 2000,
      text: 'Ciyo geldi hey!',
      retweet: false,
      visibleRt: true,
      visibleLike: true
    });
  },
  methods: {
    newPost(postData) {
      this.list.push({
        id: postData.id,
        text: postData.text,
        retweet: false,
        visibleRt: false,
        visibleLike: false
      });
    }
  }
};
</script>
