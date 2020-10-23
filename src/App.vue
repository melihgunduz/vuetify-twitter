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

        <v-spacer></v-spacer>
        <v-btn ripple="false" color="blue" icon>
          <router-link class="text-decoration-none" to="/">
            <v-icon>mdi-bird</v-icon>
          </router-link>
        </v-btn>
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-app-bar class="d-none d-xl-block" color="white" app flat>
        <v-spacer />
        <router-link to="/" class="black--text font-weight-bold text-h3 text-decoration-none">Twitter</router-link>
        <v-spacer />
      </v-app-bar>
    </div>

    <v-main>
      <v-row class="align-baseline">
        <v-col class="d-none d-xl-block" sm="12" md="12" lg="12" xl="4">
          <Navigation />
        </v-col>
        <v-col sm="12" md="12" lg="12" xl="4">
          <router-view />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation';
export default {
  name: 'App',

  components: { Navigation },

  data: () => ({
    items: [
      { icon: 'mdi-home', text: 'Anasayfa', to: '/' },
      { icon: 'mdi-pound', text: 'Keşfet', to: '/explore' }
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
