<template>
  <div class="col-12 row" :class="{'q-pb-md' : $q.screen.lt.sm}">
    <div class="col-12 col-md-6 row items-center justify-center">
      <div
        class="col-12 row"
        :class="{'justify-center' : $q.screen.lt.md}"
        :style="$q.screen.gt.sm ? 'max-width: 65%;' : 'max-width: 90%; padding-top: 10%;'"
      >
        <q-img
          src="/fatorX-logo.png"
          class="logo-img"
          :style="!$q.screen.lt.sm ? 'max-width: 260px;' : 'max-width: 200px;'"
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
          <span class="text-40 weight-600">Criar uma nova senha</span>
        </div>

        <div class="col-12 q-pb-lg">
          <span class="text-16 opacity-75">
            Use letras maiúsculas, minúsculas, números e caracteres especiais. Sua senha deve ter no mínimo 8 caracteres.
          </span>
        </div>

        <q-form
          class="col-12 row"
          ref="refLoginForm"
          :style="$q.screen.gt.sm ? 'padding-bottom: 9%;' : 'padding-bottom: 15%;'"
        >
          <div class="col-12 q-pb-xs">
            <span class="text-16">Nova Senha</span>
          </div>
          <div class="col-12 q-pb-md">
            <q-input
              v-model="newPassword"
              outlined
              autocomplete="off"
              :type="!isPwdVisible ? 'password' : ''"
              color="primary"
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

          <div class="col-12 q-pb-lg">
            <span
              class="text-14 weight-700"
              style="font-family: 'Mulish', sans-serif;"
            >
              Nível de segurança da senha
            </span>

            <q-linear-progress
              rounded
              size="6px"
              :value="progressValue"
              :class="progressClass"
              class="q-my-xs"
              track-color="grey"
              :style="$q.screen.gt.sm ? 'width: 70%;' : 'width: 100%;'"
            />

            <span
              class="text-14 weight-700"
              style="font-family: 'Mulish', sans-serif;"
            >
              {{ strengthMessage }}
            </span>
          </div>

          <div class="col-12 q-pb-xs q-pt-sm">
            <span style="font-size: 16px;">Repetir Senha</span>
          </div>
          <div class="col-12">
            <q-input
              model-value="sdkndhjbajiosia"
              outlined
              autocomplete="off"
              :type="!isPwdVisible2 ? 'password' : ''"
              color="primary"
            >
              <template #append>
                <q-icon
                  :name="isPwdVisible2 ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwdVisible2 = !isPwdVisible2"
                />
              </template>
            </q-input>
          </div>
        </q-form>

        <div class="col-12 row">
          <q-btn
            no-caps
            label="Enviar nova senha"
            color="primary"
            style="width: 100%;"
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
          src="/Auth/image4.jpeg"
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
      isPwdVisible2: ref(false)
    }
  },
  data () {
    return {
      newPassword: '',
    }
  },
  computed: {
    strengthLevel() {
      const length = this.newPassword.length;
      const hasNumbers = /\d/.test(this.newPassword);
      const hasLetters = /[a-z]/.test(this.newPassword);
      const hasUppercase = /[A-Z]/.test(this.newPassword)
      const hasSymbols = /[^a-zA-Z0-9]/.test(this.newPassword);

      let strength = 0

      if (length < 8) return 0
      if (hasNumbers) strength++
      if (hasLetters) strength++
      if (hasUppercase) strength++
      if (hasSymbols) strength++

      return strength
    },

    progressValue() {
      return [0.3, 0.3, 0.3, 0.6, 1.0][this.strengthLevel];
    },

    progressClass() {
      const level = this.strengthLevel;
      if (level <= 2) return 'progress-weak';
      if (level === 3) return 'progress-medium';
      return 'progress-strong';
    },

    strengthMessage() {
      const messages = [
        'Sua senha é fraca e muito curta. Tente criar uma senha mais forte.',
        'Sua senha é fraca. Tente criar uma senha mais forte.',
        'Sua senha é fraca. Tente criar uma senha mais forte.',
        'Sua senha oferece segurança média. Considere torná-la mais forte.',
        'Ótimo! Sua senha é forte e oferece excelente segurança.'
      ];
      return messages[this.strengthLevel];
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
.progress-weak :deep(.q-linear-progress__model) {
  background: linear-gradient(to right, #AC1A36, #FF1744);
}

.progress-medium :deep(.q-linear-progress__model) {
  background: linear-gradient(to right, #E2D901, #F76411);
}

.progress-strong :deep(.q-linear-progress__model) {
  background: linear-gradient(to right, #00C853, #64DD17);
}

:deep(.q-linear-progress__track) {
  opacity: 0.7;
}
</style>
