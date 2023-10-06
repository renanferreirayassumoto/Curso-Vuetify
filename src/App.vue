<template>
  <v-app>
    <v-app-bar flat class="border-b">
      <v-app-bar-title>Meu app</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <h2 class="py-5 text-center bg-red-accent-3 text-lime-darken-2">Título</h2>
        <h1 class="d-none d-md-flex d-lg-none text-h5 text-md-h3 text-lg-h1">Dashboard</h1>
        <h1 class="hidden-sm-and-down">SUMIU</h1>
        <div class="d-flex">
          <h1>Border Radius</h1>
          <div class="rounded-0 border" style="width: 100px; height: 100px;">Border Radius</div>
          <div class="rounded-sm border" style="width: 100px; height: 100px;">Border Radius</div>
          <div class="rounded border" style="width: 100px; height: 100px;">Border Radius</div>
          <div class="rounded-lg border" style="width: 100px; height: 100px;">Border Radius</div>
          <div class="rounded-xl border" style="width: 100px; height: 100px;">Border Radius</div>
          <div class="rounded-pill border" style="width: 100px; height: 100px;">Border Radius</div>
          <div class="rounded-circle border" style="width: 100px; height: 100px;">Border Radius</div>
          <div class="rounded-shaped border" style="width: 100px; height: 100px;">Border Radius</div>
        </div>
        <div>
          <h1 class="mt-7">Margin e Padding</h1>
          <div class="pa-4 font-weight-black" style="width: 100px; height: 100px; background-color: red;">Olá Mundo</div>
        </div>
        <h1 class="text-h6">Meu app</h1>
        <h2>Meu app</h2>
        <h3>Meu app</h3>
        <h4>Meu app</h4>
        <h5>Meu app</h5>
        <h6>Meu app</h6>
        <br><br>
        <div class="text-subtitle-2">Subtitle 1</div>
        <div class="text-caption">Subtitle 1</div>
        <div class="flex-column flex-md-row ma-10 d-flex justify-space-between">
          <div class="w-100 pa-4 border rounded-lg elevation-2">
            teste
          </div>
          <div class="w-100 pa-4 border rounded-lg elevation-2">
            teste
          </div>
          <div class="w-100 pa-4 border rounded-lg elevation-2">
            teste
          </div>
        </div>
      </v-container>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
