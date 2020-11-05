<template>
  <div>
    <v-speed-dial
      v-if="$route.name === 'Home' || $route.name === 'Explore' || $route.name === 'Notifications'"
      class="d-xl-none d-lg-none"
    >
      <template v-slot:activator>
        <v-btn class="mb-13 v-btn--bottom  v-btn--fab v-btn--fixed v-btn--right" color="blue" dark fab large depressed>
          <v-icon>
            mdi-bird
          </v-icon>
        </v-btn>
      </template>
    </v-speed-dial>

    <v-speed-dial v-if="$route.name === 'Messages'" class="d-xl-none d-lg-none">
      <template v-slot:activator>
        <v-btn class="mb-13 v-btn--bottom  v-btn--fab v-btn--fixed v-btn--right" color="blue" dark fab large depressed>
          <v-icon>
            mdi-email-plus-outline
          </v-icon>
        </v-btn>
      </template>
    </v-speed-dial>
  </div>
</template>

<script>
export default {};
</script>
