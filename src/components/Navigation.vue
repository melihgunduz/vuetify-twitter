<template>
  <div>
    <v-card  class=" mx-auto my-16" color="transparent" max-width="300">
      <v-btn :ripple="false" text class="font-weight-bold black--text">
        <v-icon v-if="$route.name === 'Home'" color="blue">mdi-home</v-icon>
        <v-icon v-else>mdi-home</v-icon>
        <router-link v-if="$route.name === 'Home'" class="blue--text text-decoration-none" to="/">Anasayfa</router-link>
        <router-link v-else class="text-decoration-none black--text" to="/">Anasayfa</router-link>
      </v-btn>

      <v-btn :ripple="false" text class="d-block font-weight-bold black--text">
        <v-icon v-if="$route.name === 'Explore'" color="blue">mdi-pound</v-icon>
        <v-icon v-else>mdi-pound</v-icon>
        <router-link v-if="$route.name === 'Explore'" class="blue--text text-decoration-none" to="/explore"
          >Keşfet
        </router-link>
        <router-link v-else class="text-decoration-none black--text" to="/explore">Keşfet</router-link>
      </v-btn>

    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
