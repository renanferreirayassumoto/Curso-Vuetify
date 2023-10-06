<template>
  <v-app theme="dark">
    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list>
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item prepend-icon="mdi-home">Home</v-list-item>
        <v-list-item prepend-icon="mdi-account">Usuários</v-list-item>

        <v-list-group value="Clientes">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-circle"
              title="Clientes"
            >
            </v-list-item>
          </template>

          <v-list-item prepend-icon="mdi-cash">Faturamento</v-list-item>
          <v-list-item prepend-icon="mdi-chart-line">Relatório</v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat class="border-b">
      <v-app-bar-nav-icon
        @click="isDrawerOpen = !isDrawerOpen"
      ></v-app-bar-nav-icon>
      <v-app-bar-title>Meu app</v-app-bar-title>

      <template #append>
        <v-btn icon class="mr-2">
          <v-badge dot color="info">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
        </v-btn>

        <v-menu>
          <template #activator="{ props }">
            <v-avatar v-bind="props">
              <v-img
                cover
                src="https://i0.wp.com/pediaa.com/wp-content/uploads/2021/09/Portrait.jpg?fit=427%2C640&ssl=1"
              ></v-img>
            </v-avatar>
          </template>

          <v-card min-width="200px">
            <v-list :lines="false" density="compact" nav>
              <v-list-item prepend-icon="mdi-account-outline">
                <v-list-item-title>Meu perfil</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-star-outline">
                <v-list-item-title>Meus favoritos</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <h1>Dashboard</h1>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
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
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
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
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
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
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
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
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
const isDrawerOpen = ref(false);
</script>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
