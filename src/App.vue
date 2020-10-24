<template>
  <v-app>
    <div>
      <v-navigation-drawer class="d-xl-none d-lg-none " v-model="drawer" app floating temporary>
        <v-list dense>
          <v-row class="ma-2 mb-3">
            <v-toolbar-title class="align-center">
              <span class="title">Roythox</span>
            </v-toolbar-title>
          </v-row>
          <v-list-item v-for="item in items" :key="item.icon" :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-tile :to="item.to"></v-list-tile>
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

      <v-app-bar class="d-none d-xl-block d-lg-block" color="white" app flat>
        <v-spacer />
        <router-link to="/" class="black--text font-weight-bold text-h3 text-decoration-none">Twitter</router-link>
        <v-spacer />
      </v-app-bar>
    </div>
    <v-main>
      <v-row class="ma-2 align-baseline">
        <v-col class=" d-none d-xl-block d-lg-block" sm="12" md="12" lg="2" xl="4">
          <Navigation  />
        </v-col>
        <v-col sm="12" md="12" lg="6" xl="4">
          <router-view />
        </v-col>
        <BottomNav></BottomNav>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation';
import BottomNav from "@/components/BottomNav";
export default {
  name: 'App',

  components: { Navigation, BottomNav },

  data: () => ({
    items: [
      { icon: 'mdi-avatar', text: 'Profil', to: '/' },
      { icon: 'mdi-lists', text: 'Listeler', to: '/explore' }
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
