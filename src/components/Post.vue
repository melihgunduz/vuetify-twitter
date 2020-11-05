<template>
  <v-col class="mt-3" md="12">
    <v-card class="d-none d-lg-block d-xl-block" flat>
      <v-card-title>
        <v-toolbar-title class=" d-block font-weight-black text-h6  ">Anasayfa</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="transparent" depressed small>
          <v-icon color="blue">mdi-cog-outline</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
    <v-card class="d-none d-lg-block d-xl-block mx-auto" color="#f5f8fa" flat width="600">
      <v-divider></v-divider>
      <v-row class=" float-left ml-2 mt-2 mr-2">
        <div>
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </div>
      </v-row>

      <div class=" ml-16 mr-6">
        <v-textarea
          clearable
          v-model="input"
          :rules="[rules.counter]"
          counter
          maxlength="100"
          auto-grow
          placeholder="Neler oluyor?"
          rows="1"
          class="subtitle-1"
        ></v-textarea>

        <!--
        <v-btn class="text-capitalize text-subtitle-2 " color="blue" text>
          <v-icon>mdi-earth</v-icon>
          <div>Herkes yanıtlayabilir</div>
           </v-btn>-->
        <v-menu max-width="300" offset-y rounded>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="text-capitalize text-subtitle-2" color="blue" text v-bind="attrs" v-on="on">
              <v-icon>mdi-earth</v-icon>
              <div>{{ whoCanSee }}</div>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">
                  Kimler yanıtlayabilir?
                </v-list-item-title>
                <v-list-item-subtitle class="">Bu tweeti kimlerin yanıtlayabileceğini seç.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-btn class=" text-capitalize d-block justify-start" text>
                <v-icon color="blue">mdi-earth</v-icon>
                <div class="text-capitalize text-body-1 font-weight-regular ml-2 black--text">
                  Herkes
                </div>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn class=" text-capitalize d-block justify-start" text>
                <v-icon color="blue">mdi-account-multiple</v-icon>
                <div class="text-capitalize text-body-1 font-weight-regular ml-2 black--text">
                  Takip ettiğin kişiler
                </div>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn class=" text-capitalize d-block justify-start" text>
                <v-icon color="blue">mdi-at</v-icon>
                <div class="text-capitalize text-body-1 font-weight-regular ml-2 black--text">
                  Yalnızca bahsettiğin kişiler
                </div>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-divider></v-divider>

        <v-card-actions class="">
          <v-btn class="d-inline-flex" color="blue" icon>
            <v-icon>mdi-image-multiple-outline</v-icon>
          </v-btn>
          <v-btn class="d-inline-flex" color="blue" icon>
            <v-icon>mdi-gif</v-icon>
          </v-btn>

          <v-btn class="d-inline-flex" color="blue" icon>
            <v-icon>mdi-emoticon-happy-outline</v-icon>
          </v-btn>

          <v-btn color="blue" icon>
            <v-icon>mdi-calendar-clock</v-icon>
          </v-btn>

          <v-spacer></v-spacer>
          <v-btn rounded outlined class="text-capitalize" @click="comment" color="blue">
            Tweetle
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>

    <v-card class="d-none d-lg-block d-xl-block mx-auto mt-3" color="#f5f8fa" width="600"> </v-card>

    <v-card class="mx-auto" color="black" flat width="600">
      <v-timeline dense clipped>
        <v-slide-x-transition group>
          <v-timeline-item v-for="event in timeline" :key="event.id" color="pink" small>
            <v-row justify="space-between">
              <v-col>
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

                <div class=" mt-2 d-inline-flex">
                  <div class="">
                    <a href="" class="text-decoration-none">Title</a>
                  </div>
                  <div class=" pl-1">@title</div>
                  <v-spacer></v-spacer>
                </div>

                <div class="mt-1 ml-16 mr-6 subtitle-1">
                  <div v-text="input"></div>

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
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-slide-x-transition>
      </v-timeline>
    </v-card>

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
        <div v-text="meloInput"></div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur culpa cumque dicta distinctio eius
          excepturi iste itaque, iusto laborum magnam maiores natus omnis perferendis possimus, provident qui quo sed.
        </div>

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

    <v-card class="mx-auto" color="#f5f8fa" flat width="600">
      <v-divider />
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
        <div v-text="meloInput"></div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur culpa cumque dicta distinctio eius
          excepturi iste itaque, iusto laborum magnam maiores natus omnis perferendis possimus, provident qui quo sed.
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

    <v-card class="mx-auto" color="#f5f8fa" flat width="600">
      <v-divider />
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
          <a href="" class=" text-decoration-none">Title</a>
        </div>
        <!--tag-->
        <div class=" pl-1">@title</div>
        <v-spacer></v-spacer>
      </div>

      <div class="mt-1 ml-16 mr-6 subtitle-1">
        <div v-text="meloInput"></div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur culpa cumque dicta distinctio eius
          excepturi iste itaque, iusto laborum magnam maiores natus omnis perferendis possimus, provident qui quo sed.
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

    <v-card class="mx-auto" color="#f5f8fa" flat width="600">
      <v-divider />
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
        <div v-text="meloInput"></div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur culpa cumque dicta distinctio eius
          excepturi iste itaque, iusto laborum magnam maiores natus omnis perferendis possimus, provident qui quo sed.
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
  </v-col>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    benched: 0,
    events: [],
    input: null,
    nonce: 0,
    rules: {
      counter: value => value.length <= 100 || 'Max 100 characters'
    },

    whoCanSee: 'Herkes yanıtlayabilir',

    loading: false,
    selection: 1,
    meloInput: null,
    retweet: false,
    visibleRt: false,
    liked: false,
    visibleLike: false
  }),

  computed: {
    timeline() {
      return this.events.slice().reverse();
    },
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 5;
    }
  },

  methods: {
    comment() {
      this.events.push({
        id: this.nonce++,
        text: this.input
      }),
        (this.input = null);
    },

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
    photo() {}
  }
};
</script>

<!--
<script>

export default {
  data: () => ({
    events: [],
    input: null,
    nonce: 0,
  }),

  computed: {
    timeline () {
      return this.events.slice().reverse()
    },
  },

  methods: {
    comment () {
      this.events.push({
        id: this.nonce++,
        text: this.input,
        }),
      this.input = null
    },
  },
}

</script>
-->
