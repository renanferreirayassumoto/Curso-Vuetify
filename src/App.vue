<template>
  <v-app>
    <v-app-bar flat class="border-b">
      <v-app-bar-title>Meu app</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <h1>Dashboard</h1>
        <v-row>
          <v-col cols="12" md="4" lg="3">
            <v-card flat class="border mx-auto" max-width="400">
              <v-img
                class="align-end text-white"
                :height="200"
                src="https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem-1200x675.jpg"
                cover
              >
                <v-card-title>Top 10 paisagens naturais</v-card-title>
              </v-img>
              <v-card-subtitle class="mt-3">Ilhas Caribenhas</v-card-subtitle>
              <v-card-text>
                <div>Natureza</div>
                <div>Uau natureza que legal estou muito feliz</div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                <v-btn prepend-icon="mdi-cart" variant="tonal" color="success"
                  >Comprar</v-btn
                >
                <v-btn icon="mdi-home" variant="tonal" color="success"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4" lg="3">
            <v-card flat class="border mx-auto" max-width="400">
              <v-img
                class="align-end text-white"
                :height="200"
                src="https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem-1200x675.jpg"
                cover
              >
                <v-card-title>Top 10 paisagens naturais</v-card-title>
              </v-img>
              <v-card-subtitle class="mt-3">Ilhas Caribenhas</v-card-subtitle>
              <v-card-text>
                <div>Natureza</div>
                <div>Uau natureza que legal estou muito feliz</div>
              </v-card-text>
              <v-card-actions>
                <v-btn>Ver mais</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4" lg="3">
            <v-card flat class="border mx-auto" max-width="400">
              <v-img
                class="align-end text-white"
                :height="200"
                src="https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem-1200x675.jpg"
                cover
              >
                <v-card-title>Top 10 paisagens naturais</v-card-title>
              </v-img>
              <v-card-subtitle class="mt-3">Ilhas Caribenhas</v-card-subtitle>
              <v-card-text>
                <div>Natureza</div>
                <div>Uau natureza que legal estou muito feliz</div>
              </v-card-text>
              <v-card-actions>
                <v-btn>Ver mais</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4" lg="3">
            <v-card flat class="border mx-auto" max-width="400">
              <v-img
                class="align-end text-white"
                :height="200"
                src="https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem-1200x675.jpg"
                cover
              >
                <v-card-title>Top 10 paisagens naturais</v-card-title>
              </v-img>
              <v-card-subtitle class="mt-3">Ilhas Caribenhas</v-card-subtitle>
              <v-card-text>
                <div>Natureza</div>
                <div>Uau natureza que legal estou muito feliz</div>
              </v-card-text>
              <v-card-actions>
                <v-btn>Ver mais</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
