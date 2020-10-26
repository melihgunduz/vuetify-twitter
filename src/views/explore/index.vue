<template>

    <v-row class="pl-3">

      <v-card class="mx-auto"  width="600">
        <v-divider />



        <div class="mt-1 font-weight-bold">
          <div v-text="meloInput"></div>
          <div>
            L
            <v-img
                :src="
              'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
            "
                :lazy-src="
              'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
            "
                height="100%"
                width="100%"
            ></v-img>
          </div>

        </div>


        <div class="mx-4 pt-1 align-center font-weight-bold text-h5">Gündem</div>
        <v-divider></v-divider>
        <v-list color="transparent">
          <template >

            <v-list-item >
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">#ssssssssss</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list-item >
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">#ssssssssss</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </template>
        </v-list>
      </v-card>


    </v-row>

</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    loading: false,
    selection: 1,
    meloInput: null,
    retweet: false,
    visibleRt: false,
    liked: false,
    visibleLike: false
  }),

  /*watch: {
    meloInput(deger) {
      window.console.log(deger);
    }
  },*/

  methods: {
    yretweet() {
      if (this.retweet === true) {
        this.retweet = false;
        this.visibleRt = false;
      }
    },
    noRetweet() {
      if (this.retweet === false) {
        this.retweet = true;
        this.visibleRt = true;
      }
    },

    like() {
      if (this.liked === true) {
        this.liked = false;
        this.visibleLike = false;
      }
    },
    unlike() {
      if (this.liked === false) {
        this.liked = true;
        this.visibleLike = true;
      }
    },
    photo() {},

    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>
