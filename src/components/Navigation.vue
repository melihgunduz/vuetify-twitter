<template>
  <div>
    <v-card class=" mx-auto my-16" color="transparent" max-width="300">
      <v-btn width="100%" to="/" color="transparent" text class="mt-2 justify-start font-weight-bold">
        <v-icon v-if="$route.name === 'Home'" color="blue">mdi-home</v-icon>
        <v-icon v-else color="black">mdi-home</v-icon>
        <div v-if="$route.name === 'Home'" class="blue--text">Anasayfa</div>
        <div v-else class="black--text">Anasayfa</div>
      </v-btn>

      <v-btn to="/explore" color="transparent" text class="d-block justify-start font-weight-bold black--text">
        <v-icon v-if="$route.name === 'Explore'" color="blue">mdi-pound</v-icon>
        <v-icon v-else color="black">mdi-pound</v-icon>
        <div v-if="$route.name === 'Explore'" class="blue--text">Keşfet</div>
        <div v-else class="black--text">Keşfet</div>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  drawer: false,
  menu: false,
  theme: false
};
</script>
