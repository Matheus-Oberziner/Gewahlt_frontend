<template>
  <div class="col-12 row">
    <div class="col-12 col-md-6 row items-center justify-center">
      <div
        class="col-12 row"
        :class="{'justify-center' : $q.screen.lt.md}"
        :style="$q.screen.gt.sm ? 'max-width: 70%;' : 'max-width: 90%; padding-top: 15%;'"
      >
        <q-img
          v-if="!$q.dark.isActive"
          src="/gewahlt-logos-03.png"
          class="logo-img"
          :style="$q.screen.gt.sm ? 'max-width: 310px; left: -5px;' : 'max-width: 200px;'"
        />
        <q-img
          v-else
          src="/gewahlt-logos-03-white.png"
          class="logo-img"
          :style="$q.screen.gt.sm ? 'max-width: 310px; left: -5px;' : 'max-width: 200px;'"
        />

        <div class="col-12 q-pb-sm" :class="$q.screen.gt.sm ? 'q-pt-lg' : 'q-pt-xl'">
          <span style="font-size: 40px; font-weight: 600;">Login</span>
        </div>

        <div class="col-12 q-pb-lg">
          <span style="font-size: 16px; opacity: 0.75;">Digite suas credenciais enviadas por e-mail para continuar.</span>
        </div>

        <q-form class="col-12 row" ref="refLoginForm">
          <div class="col-12 q-pb-xs">
            <span style="font-size: 16px;">Login</span>
          </div>
          <div class="col-12 q-pb-lg">
            <q-input
              model-value="matheus@gmail.com"
              outlined
              autocomplete="username"
              class="input_radius"
              color="green"
            />
          </div>

          <div class="col-12 q-pb-xs q-pt-sm">
            <span style="font-size: 16px;">Senha</span>
          </div>
          <div class="col-12">
            <q-input
              model-value="sdkndhjbajiosia"
              outlined
              autocomplete="current-password"
              :type="!isPwdVisible ? 'password' : ''"
              class="input_radius"
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
                style="font-weight: 500;"
              />
            </div>

            <div
              class="col-12 col-sm-6 row text-orange self-center"
              :class="$q.screen.gt.sm ? 'justify-end' : 'justify-center q-pt-lg'"  
            >
              <span
                class="cursor-pointer"
                style="color: inherit; text-decoration: underline;"
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
          />
        </div>

        <div class="col-12 row justify-center text-center">
          <span style="font-size: 15px; font-weight: 500;">Ainda não é cliente? <a href="" style="color: #6F8268; text-decoration: none;">Solicite um orçamento conosco</a></span>
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
          src="src/assets/Auth/image1.jpg"
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
