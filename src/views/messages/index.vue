<template>
  <div>
    <v-card flat>
      <v-card-title>
        <v-toolbar-title class=" d-block font-weight-black text-h6  ">Mesajlar</v-toolbar-title>
      </v-card-title>
      <v-divider></v-divider>
      <v-text-field
        class="my-2"
        flat
        rounded
        label="Kişi ve grup ara"
        clearable
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field>
      <div class="text-h6 text-center">Mesaj gönder, mesaj al</div>
      <p class="text-center mx-10">
        Direkt Mesajlar, sen ve Twitter'daki diğer kişiler arasında gerçekleşen özel sohbetlerdir. Tweetleri, medyaları
        ve daha fazlasını paylaşabilirsin!
      </p>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
