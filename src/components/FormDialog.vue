<template>
  <q-dialog
    ref="refDialog"
    no-backdrop-dismiss
  >
    <div style="min-width: 40%;">
      <q-card flat style="border-radius: 20px; background-color: #F3F3F3;">
        <q-card-section class="q-px-lg bg-primary text-white text-center">
          <span class="text-30 weight-600">Formulário 1</span>
        </q-card-section>

        <q-card-section class="q-px-md q-py-sm">
          <q-stepper
            ref="stepper"
            flat
            v-model="step"
            alternative-labels
            keep-alive
            animated
            done-color="info"
            active-color="accent"
            inactive-color="primary"
            style="background-color: #F3F3F3;"
          >
            <q-step
              :name="1"
              :title="`Dados Pessoais`"
              icon=""
              :done="step > 1"
            >
              <q-form
                ref="refFormStep1"
                class="q-gutter-xl"
              >
                <div class="col-12 row">
                  <div class="col-12 text-22 weight-500 text-orange">
                    <span class="text-black">Nome Completo</span>
                  </div>
                
                  <div class="col-12 q-col-gutter-sm row q-pt-md">
                    <div class="col-4">
                      <q-input
                        v-model="firstName"
                        outlined
                        label="Primeiro Nome *"
                        stack-label
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="middleName"
                        outlined
                        label="Nome do Meio"
                        stack-label
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="lastName"
                        outlined
                        label="Último Nome *"
                        stack-label
                      />
                    </div>
                  </div>
                </div>
              
                <div class="col-12 row">
                  <div class="col-12 text-22 weight-500 text-orange">
                    <span class="text-black">Endereço</span>
                  </div>
                
                  <div class="col-12 q-col-gutter-sm row q-pt-md">
                    <div class="col-9">
                      <q-input
                        v-model="address"
                        outlined
                        label="Logradouro *"
                        stack-label
                      />
                    </div>
                    <div class="col-3">
                      <q-input
                        v-model="number"
                        outlined
                        label="Número *"
                        stack-label
                      />
                    </div>
                    <div class="col-5">
                      <q-select
                        v-model="additionalInfo"
                        outlined
                        multiple
                        :options="['Apartamento', 'Suite', 'Piso']"
                        label="Detalhes Adicionais *"
                        use-chips
                        stack-label
                      />
                    </div>
                    <div class="col-7">
                      <q-input
                        v-model="description"
                        outlined
                        label="Descrição *"
                        stack-label
                      />
                    </div>
                    <div class="col-8">
                      <q-input
                        v-model="city"
                        outlined
                        label="Cidade *"
                        stack-label
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="state"
                        outlined
                        label="Estado (sigla) *"
                        stack-label
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="postalCode"
                        outlined
                        label="Código Postal *"
                        stack-label
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="province"
                        outlined
                        label="Província"
                        stack-label
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="country"
                        outlined
                        label="País *"
                        stack-label
                      />
                    </div>
                  </div>
                </div>
              </q-form>
            </q-step>

            <q-step
              :name="2"
              title="Informações do peticionário"
              icon=""
              :done="step > 2"
            >

            </q-step>

            <q-step
              :name="3"
              title="Step 3"
              icon=""
              :done="step > 3"
            >

            </q-step>

            <q-step
              :name="4"
              title="Step 4"
              icon=""
              :done="step > 4"
            >

            </q-step>
          </q-stepper>
        </q-card-section>

        <q-card-actions class="row justify-center q-pb-md">
          <q-btn
            v-close-popup
            no-caps
            color="white"
            text-color="black"
            label="Cancelar"
            class="text-16"
            style="min-width: 8em; border-radius: 10px;"
          />
          <q-btn
            v-if="step > 1"
            no-caps
            color="white"
            text-color="black"
            label="Voltar"
            class="text-16"
            style="min-width: 8em; border-radius: 10px;"
            @click="this.$refs.stepper.previous()"
          />
          <q-btn
            no-caps
            color="primary"
            label="Avançar"
            class="text-16"
            style="min-width: 8em; border-radius: 10px;"
            @click="avancar"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-dialog>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    return {
      step: ref(1)
    }
  },
  data () {
    return {
      firstName: '',
      middleName: '',
      lastName: '',
      address: '',
      number: '',
      additionalInfo: [],
      description: '',
      city: '',
      state: '',
      postalCode: '',
      province: '',
      country: ''
    }
  },
  methods: {
    avancar () {
      this.$refs.refFormStep1.validate()
        .then(valid => {
          if (valid) {
            this.$refs.stepper.next()
          }
        })
    }
  }
}
</script>
<style scoped>
:deep(.q-field__control) {
  background-color: white;
}
</style>
