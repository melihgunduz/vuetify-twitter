<template>
  <v-col sm="12">
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title class="font-weight-black ">Bildirimler</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn color="transparent" depressed small>
          <v-icon color="blue">mdi-cog-outline</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs v-model="tabs" fixed-tabs>
            <v-tab class="text-capitalize ">
              Tümü
            </v-tab>

            <v-tab class="text-capitalize font-weight-black">
              Bahsedenler
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-divider></v-divider>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias facere impedit natus ratione? Ad aut
              corporis cumque eum ipsa iste natus nesciunt obcaecati, praesentium, quam quasi recusandae voluptas
              voluptatem voluptatum?
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="text-center">
                Birisi senden bahsettiği zaman, onu burada bulacaksın.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      tabs: null,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
  }
};
</script>
