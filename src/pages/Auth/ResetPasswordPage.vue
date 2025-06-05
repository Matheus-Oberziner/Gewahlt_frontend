<template>
  <div class="col-12 row" :class="{'q-pb-md' : $q.screen.lt.sm}">
    <div class="col-12 col-md-6 row items-center justify-center">
      <div
        class="col-12 row"
        :class="{'justify-center q-pt-xl' : $q.screen.lt.md}"
        :style="$q.screen.gt.sm ? 'max-width: 70%;' : 'max-width: 90%; padding-top: 10%;'"
      >
        <q-img
          src="/gewahlt-logos-03-white.png"
          class="logo-img"
          :style="$q.screen.gt.sm ? 'max-width: 310px; left: -25px;' : 'max-width: 250px;'"
        />

        <div class="col-12 q-pb-md" :style="$q.screen.gt.sm ? 'padding-top: 5%;' : 'padding-top: 10%'">
          <q-btn
            no-caps
            flat
            dense
            icon="chevron_left"
            label="Voltar para tela de login"
            @click="$router.push({ path: '/login' })"
          />
        </div>

        <div class="col-12 q-pb-sm">
          <span class="text-40 weight-600">Redefinir senha</span>
        </div>

        <div class="col-12" :style="$q.screen.gt.sm ? 'padding-bottom: 6%;' : 'padding-bottom: 15%;'">
          <span class="text-16 opacity-75">Escolha a melhor opção para enviar a redefinição de senha.</span>
        </div>

        <div class="col-12 row text-16">
          <div class="col-12 q-mb-xl">
            <q-radio
              v-model="radio"
              color="green"
              val="email"
              class="full-width"
            >
              <template #default>
                <div class="col-12 row justify-between">
                  <span>Email</span>

                  <span>******@gmail.com</span>
                </div>
              </template>
            </q-radio>
          </div>

          <div
            class="col-12 row justify-between"
          >
            <q-radio
              v-model="radio"
              color="green"
              val="sms"
              class="full-width"
            >
              <template #default>
                <div class="col-12 row justify-between">
                  <span>SMS</span>

                  <span>(55) +11 ****-5212</span>
                </div>
              </template>
            </q-radio>
          </div>
        </div>

        <div
          class="col-12 row"
          :class="$q.screen.gt.sm ? 'justify-end' : 'justify-center'"
          :style="$q.screen.gt.sm ? 'padding-top: 12%;' : 'padding-top: 20%;'"
        >
          <q-btn
            no-caps
            label="Cancelar"
            color="orange"
            class="q-mr-md q-px-lg"
            @click="$router.push({ path: '/login' })"
          />

          <q-btn
            no-caps
            label="Solicitar Código"
            color="green"
            class="q-px-lg"
            @click="$router.push({ path: '/redefinir-senha/verificar-codigo' })"
          />
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
          src="/Auth/image2.jpg"
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
      radio: ref('email')
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
<style scoped>
:deep(.q-radio__label) {
  width: 100%;
}
</style>
