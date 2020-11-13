<template>
  <v-row>
    <v-col>
      <v-card flat>
        <v-card-title><v-toolbar-title class="d-block font-weight-black text-h6  ">Yer İşaretleri</v-toolbar-title></v-card-title>
        <v-card-subtitle><div class="d-block">@john</div></v-card-subtitle>
        <v-divider></v-divider>
        <div class="text-h6 text-center">Yer İşaretlerine henüz Tweet eklemedin</div>
        <p class="text-center mx-10">
          Eklediğinde burada görünecek.
        </p>
      </v-card>
    </v-col>
  </v-row>

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
