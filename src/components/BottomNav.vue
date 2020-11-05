<template>
  <div>
    <v-bottom-navigation class="text-center align-center justify-center d-xl-none d-lg-none" horizontal app flat>
      <v-btn class="flex-fill justify-center" icon :ripple="false" to="/">
        <v-icon v-if="$route.name === 'Home'" color="blue">mdi-home</v-icon>
        <v-icon v-else>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn class="flex-fill" icon :ripple="false" to="/explore">
        <v-icon v-if="$route.name === 'Explore'" color="blue">mdi-pound</v-icon>
        <v-icon v-else>mdi-pound</v-icon>
      </v-btn>

      <v-btn class="flex-fill" icon :ripple="false" to="/notifications">
        <v-icon v-if="$route.name === 'Notifications'" color="blue">mdi-bell</v-icon>
        <v-icon v-else>mdi-bell-outline</v-icon>
      </v-btn>

      <v-btn class="flex-fill" icon :ripple="false" to="/messages">
        <v-icon v-if="$route.name === 'Messages'" color="blue">mdi-email</v-icon>
        <v-icon v-else>mdi-email-outline</v-icon>
      </v-btn>

      <!-- <v-btn>
        <router-link v-if="$route.name === 'Home'" class="blue&#45;&#45;text " to="/"></router-link>
        <router-link v-else class="text-decoration-none black&#45;&#45;text" to="/"></router-link>
        <v-icon v-if="$route.name === 'Home'" color="blue">mdi-home</v-icon>
        <v-icon v-else>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn>
        <router-link v-if="$route.name === 'Explore'" class="blue&#45;&#45;text " to="/explore"></router-link>
        <router-link v-else class="text-decoration-none black&#45;&#45;text" to="/explore"></router-link>
        <v-icon v-if="$route.name === 'Explore'" color="blue">mdi-magnify</v-icon>
        <v-icon v-else>mdi-magnify</v-icon>
      </v-btn>

      <v-btn>
        <router-link v-if="$route.name === 'Notifications'" class="blue&#45;&#45;text " to="/notifications"></router-link>
        <router-link v-else class="text-decoration-none black&#45;&#45;text" to="/notifications"></router-link>
        <v-icon v-if="$route.name === 'Notifications'" color="blue">mdi-bell</v-icon>
        <v-icon v-else>mdi-bell-outline</v-icon>
      </v-btn>

      <v-btn>
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>-->
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: 'mdi-avatar', text: 'Profil', to: '/' },
      { icon: 'mdi-lists', text: 'Listeler', to: '/explore' }
    ],
    drawer: false,
    menu: false,
    theme: false
  })
};
</script>

<style scoped></style>
