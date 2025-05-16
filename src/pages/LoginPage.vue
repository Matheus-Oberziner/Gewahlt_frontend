<template>
  <div class="col-12 row">
    <div class="col-12 col-md-6">
      <div class="col-12 row">
        <q-img
          v-if="!$q.dark.isActive"
          src="/gewahlt-logos-01.png"
          class="position_logo"
        />
        <q-img
          v-else
          src="/gewahlt-logos-01-white.png"
          class="position_logo"
        />
      </div>

      <div class="col-12 row form_container">
        <div class="col-12 q-pb-md">
          <span style="font-size: 40px; font-weight: 600;">Login</span>
        </div>

        <div class="col-12 q-pb-xl">
          <span style="font-size: 16px; font-weight: 400; opacity: 0.75;">Digite suas credenciais enviadas por e-mail para continuar.</span>
        </div>

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
            type="password"
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
          <div class="col-6">
            <q-checkbox
              v-model="checkbox"
              label="Manter-me conectado"
              style="font-weight: 500;"
            />
          </div>

          <div class="col-6 row justify-end text-orange self-center">
            <a href="" style="font-weight: 400; color: inherit;">Esqueci minha senha</a>
          </div>
        </div>

        <div class="col-12 row q-pb-lg">
          <q-btn
            no-caps
            label="Entrar"
            color="green"
            style="width: 100%;"
          />
        </div>

        <div class="col-12 row justify-center">
          <span style="font-size: 15px; font-weight: 500;">Ainda não é cliente? <a href="" style="color: #6F8268; text-decoration: none;">Solicite um orçamento conosco</a></span>
        </div>
      </div>
    </div>

    <div
      v-if="!$q.screen.lt.md"
      class="col-6"
    >
      <div class="col-12 row justify-center items-center" style="position: relative; height: 100vh;">
        <q-img
          src="pexels-camcasey-1157255.jpg"
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
  },
  created () {
    this.$q.dark.set(false)
  }
}
</script>
<style>
.position_logo {
  position: relative;
  height: 378px;
  width: 672px;
  top: -15px;
  right: 7vw;
  /* right: 133px; */
}

.form_container {
  position: relative;
  top: -135px;
  width: 40vw;
  margin: 0 auto;
  padding: 2px;
}

.position_img {
  position: relative;
  width: 85%;
  height: 90%;
  border-radius: 24px;
  overflow: hidden;
}

.position_img > .q-img__content > div {
  background: rgba(111, 130, 104, 0.53);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.95;
  border-radius: 24px;
  z-index: 1;
}
</style>
