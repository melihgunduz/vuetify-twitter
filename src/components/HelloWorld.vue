<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
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
      </v-col>

      <v-col cols="4">
        <v-card class="justify-center" min-width="500px" min-height="200px">
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

          <v-row class="align-center">
            <!--username-->
            <div class=" mt-2 d-inline-flex">
              <div class="">
                <a href="" class="text-decoration-none">Title</a>
              </div>
              <!--tag-->
              <div class=" pl-1">@title</div>
              <v-spacer></v-spacer>
            </div>

            <div class=" mr-6 font-weight-bold">
              <div v-text="meloInput"></div>
              <div class="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur culpa cumque dicta distinctio
                eius excepturi iste itaque, iusto laborum magnam maiores natus omnis perferendis possimus, provident qui
                quo sed.
              </div>
              <v-img class="rounded-xl" height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            </div>
          </v-row>
          <v-card-actions class="ml-11 pl-3 mr-16 pr-16">
            <v-btn icon>
              <v-icon>mdi-tooltip-outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-twitter-retweet</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="visible" icon @click="like">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn v-if="!visible" icon @click="unlike">
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-export-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>

          <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

          <v-card-title>{{ meloInput }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

              <div class=" grey--text ml-4" v-text="meloInput"></div>
            </v-row>

            <div class="my-4 subtitle-1">
              $ • Italian, Cafe
            </div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>

          <v-card-text>
            <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card></v-col
      >
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
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

    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>
