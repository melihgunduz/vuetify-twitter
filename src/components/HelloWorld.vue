<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="12" lg="12" xl="4">
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

      <v-col sm="12" md="12" lg="12" xl="4">
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
            <div v-text="meloInput"></div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur culpa cumque dicta distinctio
              eius excepturi iste itaque, iusto laborum magnam maiores natus omnis perferendis possimus, provident qui
              quo sed.
            </div>

            <v-img
                :src="
                'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
              "
                :lazy-src="
                'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
              "
                height="100%"
                width="100%"
                class="mt-1 rounded-xl"
            ></v-img>

            <v-card-actions class="mr-16">

                <v-btn class="d-inline-flex" icon>
                <v-icon>mdi-tooltip-outline</v-icon>
              </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="d-inline-flex" icon>
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
          </div>
        </v-card>
      </v-col>


      <v-col sm="12" md="12" lg="12" xl="4">
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
            <div v-text="meloInput"></div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur culpa cumque dicta distinctio
              eius excepturi iste itaque, iusto laborum magnam maiores natus omnis perferendis possimus, provident qui
              quo sed.
            </div>

            <v-img
                :src="
                'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
              "
                :lazy-src="
                'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
              "
                height="100%"
                width="100%"
                class="mt-1 rounded-xl"
            ></v-img>

            <v-card-actions class="mr-16">

              <v-btn class="d-inline-flex" icon>
                <v-icon>mdi-tooltip-outline</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn class="d-inline-flex" icon>
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
          </div>
        </v-card>
      </v-col>
      <v-col sm="12" md="12" lg="12" xl="4">
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
            <div v-text="meloInput"></div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur culpa cumque dicta distinctio
              eius excepturi iste itaque, iusto laborum magnam maiores natus omnis perferendis possimus, provident qui
              quo sed.
            </div>

            <v-img
                :src="
                'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
              "
                :lazy-src="
                'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
              "
                height="100%"
                width="100%"
                class="mt-1 rounded-xl"
            ></v-img>

            <v-card-actions class="mr-16">

              <v-btn class="d-inline-flex" icon>
                <v-icon>mdi-tooltip-outline</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn class="d-inline-flex" icon>
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
          </div>
        </v-card>
      </v-col>
      <v-col sm="12" md="12" lg="12" xl="4">
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
            <div v-text="meloInput"></div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur culpa cumque dicta distinctio
              eius excepturi iste itaque, iusto laborum magnam maiores natus omnis perferendis possimus, provident qui
              quo sed.
            </div>

            <v-img
                :src="
                'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
              "
                :lazy-src="
                'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
              "
                height="100%"
                width="100%"
                class="mt-1 rounded-xl"
            ></v-img>

            <v-card-actions class="mr-16">

              <v-btn class="d-inline-flex" icon>
                <v-icon>mdi-tooltip-outline</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn class="d-inline-flex" icon>
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
          </div>
        </v-card>
      </v-col>
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
    photo() {},

    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>
