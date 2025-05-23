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

        <div class="col-12 q-pb-md" :style="$q.screen.gt.sm ? 'padding-top: 8%;' : 'padding-top: 15%'">
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
          <span style="font-size: 40px; font-weight: 600;">Verificar Código</span>
        </div>

        <div class="col-12" :style="$q.screen.gt.sm ? 'padding-bottom: 9%;' : 'padding-bottom: 15%;'">
          <span style="font-size: 16px; opacity: 0.75;">Digite o código que você recebeu no campo abaixo:</span>
        </div>

        <div class="col-12 row" :style="$q.screen.gt.sm ? 'padding-bottom: 9%;' : 'padding-bottom: 15%;'">
          <div
            v-for="(digit, index) in 4"
            :key="index"
            class="col-3 row justify-center"
          >
            <q-input
              v-model="code[index]"
              outlined
              class="text-center input_radius input_size1"
              :class="$q.screen.gt.sm ? 'input_size1' : 'input_size2'"
              input-class="text-center"
              input-style="font-size: 40px;"
              mask="#"
              color="green"
              @keyup="handleKeyup($event, index)"
            />
          </div>
        </div>

        <div class="col-12 row justify-center text-center" :style="$q.screen.gt.sm ? 'padding-bottom: 9%;' : 'padding-bottom: 15%;'">
          <span style="font-size: 15px; font-weight: 500;">Não recebeu nenhum código? <a style="color: #6F8268; text-decoration: none;">Reenviar código</a></span>
        </div>

        <div class="col-12 row">
          <q-btn
            no-caps
            label="Enviar"
            color="green"
            style="width: 100%;"
            @click="$router.push({ path: '/redefinir-senha/criar-nova-senha' })"
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
          src="src/assets/Auth/image3.jpg"
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
export default {
  data() {
    return {
      code: ["", "", "", ""],
    };
  },
  computed: {
    codeString() {
      return this.code.join("");
    },
  },
  methods: {
    handleKeyup(event, index) {
      const value = event.target.value;
      const key = event.key;

      if (/^\d$/.test(value) && index < 3) {
        this.$nextTick(() => {
          this.$el.querySelectorAll("input")[index + 1].focus();
        });
      }

      if (key === "Backspace" && !value && index > 0) {
        this.$nextTick(() => {
          this.$el.querySelectorAll("input")[index - 1].focus();
        });
      }

      // Verifica se todos os campos estão preenchidos
      if (this.code.every(d => d !== "")) {
        // 
      }
    },
  },
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
.input_size1 :deep(.q-field__control) {
  height: 6em;
  width: 6em;
}

.input_size2 :deep(.q-field__control) {
  height: 4.5em;
  width: 4.5em;
}
</style>
