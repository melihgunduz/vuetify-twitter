<template>
  <v-app>
    <div>
      <v-navigation-drawer class="d-xl-none" v-model="drawer" app floating temporary>
        <v-list dense>
          <v-row class="ma-2 mb-3">
            <v-toolbar-title class="align-center">
              <span class="title">Roythox</span>
            </v-toolbar-title>
          </v-row>
          <v-list-item v-for="item in items" :key="item.icon" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar class="d-xl-none" flat color="white" app clipped-left>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-toolbar-title class="align-center">
          <span class="title">Roythox</span>
        </v-toolbar-title>
      </v-app-bar>

      <v-app-bar class="d-none d-xl-block" color="white" app flat>
        <v-spacer />

        <router-link to="/" class="font-weight-bold text-h3">Twitter</router-link>
        <v-spacer />
      </v-app-bar>
    </div>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    items: [
      { icon: 'mdi-trending-up', text: 'Popular Content' },
      { icon: 'mdi-youtube-subscription', text: 'Folow' },
      { icon: 'mdi-history', text: 'History' },
      { icon: 'mdi-playlist-play', text: 'List' },
      { icon: 'mdi-clock', text: 'Watch Later' }
    ],
    drawer: false,
    menu: false,
    theme: false
  }),
  watch: {
    theme: function(next) {
      this.$vuetify.theme.dark = next;
    }
  }
};
</script>
