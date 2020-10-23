<template>
  <v-container>
    <v-row>
      <!--<v-col sm="12" md="12" lg="12" xl="4">
        <v-card class="mx-auto my-12" color="transparent" max-width="350">


          <v-btn :ripple="false" text class="font-weight-bold black&#45;&#45;text">
            <v-icon v-if="$route.name === 'Home'" color="blue">mdi-home</v-icon>
            <v-icon v-else>mdi-home</v-icon>
            <router-link v-if="$route.name === 'Home'" class="blue&#45;&#45;text text-decoration-none" to="/">Anasayfa</router-link>
            <router-link v-else class="text-decoration-none black&#45;&#45;text" to="/">Anasayfa</router-link>
          </v-btn>


          <v-btn :ripple="false" text class="d-block font-weight-bold black&#45;&#45;text">
            <v-icon v-if="$route.name === 'Explore'" color="blue">mdi-pound</v-icon>
            <v-icon v-else>mdi-pound</v-icon>
            <router-link v-if="$route.name === 'Explore'" class="blue&#45;&#45;text text-decoration-none" to="/explore">Keşfet</router-link>
            <router-link v-else class="text-decoration-none black&#45;&#45;text" to="/explore">Keşfet</router-link>
          </v-btn>

        </v-card>
      </v-col>-->

      <!--<v-col sm="12" md="12" lg="12" xl="4">
        <v-card :loading="loading" class=" mx-auto my-12" max-width="400">
          <v-card-title>Veri Alıyoruz</v-card-title>
          <v-card-text>
            <v-textarea full-width height="100px" label="Yaz Bakalım" v-model="meloInput" />
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>-->

      <v-col sm="12" md="12" lg="12" xl="12">
        <v-card class="mx-auto my-12" width="600">
          <div class=" float-right">
            <v-btn icon>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </div>
          <v-row class=" float-left ml-2 mt-2 mr-2">
            <div>
              <v-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
              </v-avatar>
            </div>
          </v-row>

          <!--username-->
          <div class=" mt-2 d-inline-flex">
            <div class="">
              <a href="" class="text-decoration-none">Title</a>
            </div>
            <!--tag-->
            <div class=" pl-1">@title</div>
            <v-spacer></v-spacer>
          </div>

          <div class="mt-1 ml-16 mr-6 font-weight-bold">
            <div>
              No cars here
            </div>


            <v-card-actions class="mr-16">
              <v-btn class="d-inline-flex" color="orange" icon>
                <v-icon>mdi-tooltip-outline</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn class="d-inline-flex" color="green" icon>
                <v-icon>mdi-twitter-retweet</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="red" v-if="visible" icon @click="like">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn color="red" v-if="!visible" icon @click="unlike">
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>
              <v-spacer></v-spacer>

              <v-btn icon color="blue">
                <v-icon>mdi-export-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Explore',
  data: () => ({
    loading: false,
    selection: 1,
    meloInput: null,
    liked: false,
    visible: false
  }),

  /*watch: {
    meloInput(deger) {
      window.console.log(deger);
    }
  },*/

  methods: {
    like() {
      if (this.liked === true) {
        this.liked = false;
        this.visible = false;
      }
    },
    unlike() {
      if (this.liked === false) {
        this.liked = true;
        this.visible = true;
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