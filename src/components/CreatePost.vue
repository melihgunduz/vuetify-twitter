<template>
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
        :rules="[max25chars]"
        counter
        maxlength="250"
        auto-grow
        placeholder="Neler oluyor?"
        rows="1"
        class="subtitle-1"
      ></v-textarea>

      <v-menu max-width="300" offset-y rounded>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="text-capitalize text-subtitle-2" color="blue" text v-bind="attrs" v-on="on">
            <v-icon>mdi-earth</v-icon>
            <div>ss</div>
          </v-btn>
        </template>

        <v-list>
          <v-list-item-content class="ml-6">
            <v-list-item-title class="font-weight-bold">
              Kimler yanıtlayabilir?
            </v-list-item-title>
            <v-list-item-subtitle class="">Bu tweeti kimlerin yanıtlayabileceğini seç.</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-group color="blue">
            <v-list-item v-for="(kim, i) in whoCanSee" :key="i">
              <v-list-item-icon>
                <v-icon> {{ kim.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ kim.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
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
</template>

<script>
export default {
  name: 'CreatePost',
  data: () => ({
    events: [],
    input: null,

    see: 'Herkes',
    whoCanSee: [
      { text: 'Herkes', icon: 'mdi-earth' },
      { text: 'Takip ettiğin kişiler', icon: 'mdi-account-multiple' },
      { text: 'Yalnızca bahsettiğin kişiler', icon: 'mdi-at' }
    ],

    max25chars: v => !v || v.length <= 200 || 'Max length is 200 characters'
  }),

  methods: {
    comment() {
      if (this.input != null) {
        this.$emit('tweet', {
          id: this.nonce++,
          text: this.input
        });

        this.input = null;
      } else {
        alert('açıklama boş olamaz');
      }
    }
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
