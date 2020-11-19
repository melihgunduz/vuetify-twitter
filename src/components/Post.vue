<template>
  <v-col class="" md="12">
    <v-card class="mx-auto" flat hover color="#f5f8fa" width="600">
      <v-dialog v-model="dialog" width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-card color="transparent" v-bind="attrs" v-on="on" class="mx-auto" flat width="600">
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

            <div class="mt-1 ml-16 mr-6 subtitle-1">
              <div>{{ text }}</div>

              <!--<v-img
                :src="
                  'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
                "
                :lazy-src="
                  'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/90-nissan-skyline-gt-r-r34-ubg-one-we-found.jpg?itok=vy93Epzx'
                "
                height="100%"
                width="100%"
                class="mt-1 rounded-xl"
              ></v-img>-->
            </div>
          </v-card>
        </template>

        <v-card class="mx-auto" color="#f5f8fa" flat width="600">
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

          <div class="mt-1 ml-16 mr-6 subtitle-1">
            <div>{{ text }}</div>

            <v-card-actions class="mr-16">
              <v-btn class="d-inline-flex" color="orange" icon>
                <v-icon>mdi-tooltip-outline</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn class="d-inline-flex" v-if="visibleRt" color="green" icon @click="yretweet">
                <v-icon>mdi-twitter-retweet</v-icon>
              </v-btn>

              <v-btn class="d-inline-flex" v-if="!visibleRt" icon @click="noRetweet">
                <v-icon>mdi-twitter-retweet</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="red" v-if="visibleLike" icon @click="like">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn color="red" v-if="!visibleLike" icon @click="unlike">
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>
              <v-spacer></v-spacer>

              <v-btn icon color="blue">
                <v-icon>mdi-export-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-dialog>
      <v-card-actions class="mr-16 ml-16 pr-8">
        <v-btn class="d-inline-flex" color="orange" icon>
          <v-icon>mdi-tooltip-outline</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="d-inline-flex" v-if="visibleRt" color="green" icon @click="yretweet">
          <v-icon>mdi-twitter-retweet</v-icon>
        </v-btn>

        <v-btn class="d-inline-flex" v-if="!visibleRt" icon @click="noRetweet">
          <v-icon>mdi-twitter-retweet</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="red" v-if="visibleLike" icon @click="like">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn color="red" v-if="!visibleLike" icon @click="unlike">
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn icon color="blue">
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'Post',
  props: {
    postData: Object
  },
  data: () => ({
    text: null,
    dialog: false,
    retweet: false,
    visibleRt: false,
    liked: false,
    visibleLike: false
  }),
  mounted() {
    this.text = this.postData.text;
    this.retweet = this.postData.retweet;
    this.visibleRt = this.postData.visibleRt;
    this.liked = this.postData.liked;
    this.visibleLike = this.postData.visibleLike;
  },
  computed: {},
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
      this.liked = false;
      this.visibleLike = false;
    },
    unlike() {
      this.liked = true;
      this.visibleLike = true;
    }
  }
};
</script>
