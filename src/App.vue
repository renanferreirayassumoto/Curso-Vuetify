<template>
  <v-app :theme="cor">
    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list>
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item prepend-icon="mdi-home">Home</v-list-item>
        <v-list-item prepend-icon="mdi-account">Usuários</v-list-item>

        <v-list-group value="Clientes">
          <template #activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Clientes">
            </v-list-item>
          </template>

          <v-list-item prepend-icon="mdi-cash">Faturamento</v-list-item>
          <v-list-item prepend-icon="mdi-chart-line">Relatório</v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat class="border-b">
      <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
      <v-app-bar-title>Meu app</v-app-bar-title>

      <template #append>

        <v-btn icon="mdi-theme-light-dark" class="mr-2" @click="alterarCor">
        </v-btn>

        <v-btn icon class="mr-2">
          <v-badge dot color="info">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
        </v-btn>

        <v-menu>
          <template #activator="{ props }">
            <v-avatar v-bind="props">
              <v-img cover
                src="https://i0.wp.com/pediaa.com/wp-content/uploads/2021/09/Portrait.jpg?fit=427%2C640&ssl=1"></v-img>
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
        <h1 class="mb-6">Dashboard</h1>

        <v-card flat class="border mb-4">
          <div class="d-flex justify-space-between">
            <v-card-title>Últimos usuários</v-card-title>
            <v-card-title>
              <v-btn @click="isDialogOpen = true" variant="tonal" size="small">Adicionar Usuário</v-btn>
              <v-dialog v-model="isDialogOpen" width="600px">
                <v-card>
                  <v-card-title>Adicionar usuário</v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <v-text-field label="Nome" variant="outlined"></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field label="Email" variant="outlined"></v-text-field>
                      </v-col>
                    </v-row>

                    <v-select label="Cargo" variant="outlined" :items="['Admin', 'Gerente', 'Convidado']"></v-select>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="text" @click="isDialogOpen = false">Cancelar</v-btn>
                    <v-btn variant="tonal" color="success">Salvar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-title>
          </div>

          <!-- <v-dialog width="600px">
                <template #activator="{ props }">
                  <v-btn v-bind="props" variant="tonal" size="small"
                    >Adicionar usuário</v-btn
                  >
                </template>
                <v-card>
                  <v-card-text> Oi tudo bem? </v-card-text>
                </v-card>
              </v-dialog> -->

          <v-table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Cargo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fulano</td>
                <td>fulano@gmail.com</td>
                <td>Admin</td>
                <td>
                  <v-btn variant="tonal" color="primary">Editar</v-btn>
                </td>
              </tr>
              <tr>
                <td>Cicrano</td>
                <td>cicrano@gmail.com</td>
                <td>Gerente</td>
                <td>
                  <v-btn variant="tonal" color="primary">Editar</v-btn>
                </td>
              </tr>
              <tr>
                <td>Beltrano</td>
                <td>beltrano@gmail.com</td>
                <td>Convidado</td>
                <td>
                  <v-btn variant="tonal" color="primary">Editar</v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>

        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="border mx-auto" max-width="400">
              <v-img class="align-end text-white" :height="200"
                src="https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem-1200x675.jpg" cover>
                <v-card-title>Top 10 paisagens naturais</v-card-title>
              </v-img>
              <v-card-subtitle class="mt-3">Ilhas Caribenhas</v-card-subtitle>
              <v-card-text>
                <div>Natureza</div>
                <div>Uau natureza que legal estou muito feliz</div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                <v-btn prepend-icon="mdi-cart" variant="tonal" color="success">Comprar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="border mx-auto" max-width="400">
              <v-img class="align-end text-white" :height="200"
                src="https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem-1200x675.jpg" cover>
                <v-card-title>Top 10 paisagens naturais</v-card-title>
              </v-img>
              <v-card-subtitle class="mt-3">Ilhas Caribenhas</v-card-subtitle>
              <v-card-text>
                <div>Natureza</div>
                <div>Uau natureza que legal estou muito feliz</div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                <v-btn prepend-icon="mdi-cart" variant="tonal" color="success">Comprar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="border mx-auto" max-width="400">
              <v-img class="align-end text-white" :height="200"
                src="https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem-1200x675.jpg" cover>
                <v-card-title>Top 10 paisagens naturais</v-card-title>
              </v-img>
              <v-card-subtitle class="mt-3">Ilhas Caribenhas</v-card-subtitle>
              <v-card-text>
                <div>Natureza</div>
                <div>Uau natureza que legal estou muito feliz</div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                <v-btn prepend-icon="mdi-cart" variant="tonal" color="success">Comprar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="border mx-auto" max-width="400">
              <v-img class="align-end text-white" :height="200"
                src="https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem-1200x675.jpg" cover>
                <v-card-title>Top 10 paisagens naturais</v-card-title>
              </v-img>
              <v-card-subtitle class="mt-3">Ilhas Caribenhas</v-card-subtitle>
              <v-card-text>
                <div>Natureza</div>
                <div>Uau natureza que legal estou muito feliz</div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                <v-btn prepend-icon="mdi-cart" variant="tonal" color="success">Comprar</v-btn>
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
const isDialogOpen = ref(false);
</script>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    cor: 'white'
  }),
  methods: {
    alterarCor() {
      if (this.cor == 'white') {
        this.cor = 'dark';
      }
      else {
        this.cor = 'white';
      }
    }
  }
};
</script>
