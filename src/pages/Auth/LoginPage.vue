<template>
  <div class="col-12 row" :class="{'q-pb-md' : $q.screen.lt.sm}">
    <div class="col-12 col-md-6 row items-center justify-center">
      <div
        class="col-12 row"
        :class="{'justify-center' : $q.screen.lt.md}"
        :style="$q.screen.gt.sm ? 'max-width: 70%;' : 'max-width: 90%; padding-top: 10%;'"
      >
        <q-img
          src="/gewahlt-logos-03-white.png"
          class="logo-img"
          :style="$q.screen.gt.sm ? 'max-width: 310px; left: -25px;' : 'max-width: 250px;'"
        />

        <div class="col-12 q-pb-sm q-pt-lg">
          <span class="text-40 weight-600">Login</span>
        </div>

        <div class="col-12 q-pb-lg">
          <span class="text-16 opacity-75">Digite suas credenciais enviadas por e-mail para continuar.</span>
        </div>

        <q-form class="col-12 row" ref="refLoginForm">
          <div class="col-12 q-pb-xs">
            <span class="text-16">Login</span>
          </div>
          <div class="col-12 q-pb-lg">
            <q-input
              model-value="matheus@gmail.com"
              outlined
              autocomplete="username"
              color="green"
            />
          </div>

          <div class="col-12 q-pb-xs q-pt-sm">
            <span class="text-16">Senha</span>
          </div>
          <div class="col-12">
            <q-input
              model-value="sdkndhjbajiosia"
              outlined
              autocomplete="current-password"
              :type="!isPwdVisible ? 'password' : ''"
              color="green"
            >
              <template #append>
                <q-icon
                  :name="isPwdVisible ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwdVisible = !isPwdVisible"
                />
              </template>
            </q-input>
          </div>

          <div class="col-12 row justify-between q-pt-lg q-pb-xl">
            <div class="col-12 col-sm-6">
              <q-checkbox
                v-model="checkbox"
                label="Manter-me conectado"
                class="text-14 weight-500"
              />
            </div>

            <div
              class="col-12 col-sm-6 row text-orange self-center"
              :class="!$q.screen.lt.sm ? 'justify-end' : 'justify-center q-pt-lg'"  
            >
              <span
                class="cursor-pointer"
                style="text-decoration: underline;"
                @click="$router.push({ path: '/redefinir-senha' })"
              >
                Esqueci minha senha
              </span>
            </div>
          </div>
        </q-form>

        <div class="col-12 row q-pb-lg">
          <q-btn
            no-caps
            label="Entrar"
            color="green"
            style="width: 100%;"
            @click="$router.push({ path: '/home' })"
          />
        </div>

        <div class="col-12 row justify-center text-center">
          <span class="text-15 weight-500">Ainda não é cliente? <a href="" style="color: #6F8268; text-decoration: none;">Solicite um orçamento conosco</a></span>
        </div>
      </div>
    </div>

    <div
      v-if="!$q.screen.lt.md"
      class="col-6"
    >
      <div
        class="col-12 row justify-center items-center"
        style="position: relative; height: 100vh;"
      >
        <q-img
          src="/Auth/image1.jpg"
          class="position_img"
        >
          <template #default>
            <div class="overlay" />
          </template>
        </q-img>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup () {
    return {
      isPwdVisible: ref(false),
      checkbox: ref(false)
    }
  }
}
</script>
<style>
.logo-img {
  position: relative;
  height: auto;
  object-fit: contain;
}
</style>
