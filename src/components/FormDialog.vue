<template>
  <q-dialog
    ref="refDialog"
    no-backdrop-dismiss
  >
    <div style="min-width: 40%; max-height: 90vh;">
      <q-card flat style="border-radius: 20px; background-color: #F3F3F3; display: flex; flex-direction: column; max-height: 90vh;">
        <q-card-section class="q-px-lg bg-primary text-white text-center">
          <span class="text-30 weight-600">Formulário 1</span>
        </q-card-section>

        <q-card-section class="q-px-md q-py-sm" style="overflow-y: auto; flex: 1 1 auto;">
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
                        v-model="form1.primeiroNome"
                        outlined
                        label="Primeiro Nome *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="form1.meioNome"
                        outlined
                        label="Nome do Meio"
                        stack-label
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="form1.ultimoNome"
                        outlined
                        label="Último Nome *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
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
                        v-model="form1.logradouro"
                        outlined
                        label="Logradouro *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-3">
                      <q-input
                        v-model="form1.numero"
                        outlined
                        label="Número *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-5">
                      <q-select
                        v-model="form1.adicionalInfo"
                        outlined
                        multiple
                        :options="['Apartamento', 'Suite', 'Piso']"
                        label="Detalhes Adicionais *"
                        use-chips
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => val.length > 0 || false]"
                      />
                    </div>
                    <div class="col-7">
                      <q-input
                        v-model="form1.descricao"
                        outlined
                        label="Descrição *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-8">
                      <q-input
                        v-model="form1.cidade"
                        outlined
                        label="Cidade *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="form1.estado"
                        outlined
                        label="Estado (sigla) *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="form1.codigo"
                        outlined
                        label="Código Postal *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="form1.provincia"
                        outlined
                        label="Província"
                        stack-label
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="form1.pais"
                        outlined
                        label="País *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                  </div>
                </div>
              </q-form>
            </q-step>

            <q-step
              :name="2"
              title="Dados Empresariais"
              icon=""
              :done="step > 2"
            >
              <q-form
                ref="refFormStep2"
                class="q-gutter-xl"
              >
                <div class="col-12 row">
                  <div class="col-12 text-22 weight-500 text-orange">
                    <span class="text-black">Informações do peticionário</span>
                  </div>

                  <div class="col-12 q-col-gutter-sm row q-pt-md">
                    <div class="col-8">
                      <q-input
                        v-model="form2.empresaNome"
                        outlined
                        label="Nome da Empresa/Organização *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="form2.ein"
                        outlined
                        label="EIN"
                        stack-label
                      />
                    </div>
                    <div class="col-12">
                      <q-input
                        v-model="form2.contaNumero"
                        outlined
                        label="Número de Conta Online USCIS"
                        stack-label
                      />
                    </div>
                    <div class="col-12">
                      <q-input
                        v-model="form2.responsavelNome"
                        outlined
                        label="Nome do Responsável *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-8">
                      <q-input
                        v-model="form2.email"
                        outlined
                        label="E-Mail *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="form2.celular"
                        outlined
                        label="Celular *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
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
                        v-model="form2.logradouro"
                        outlined
                        label="Logradouro *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-3">
                      <q-input
                        v-model="form2.numero"
                        outlined
                        label="Número *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-5">
                      <q-select
                        v-model="form2.adicionalInfo"
                        outlined
                        multiple
                        use-input
                        new-value-mode="add"
                        :options="['Apartamento', 'Suite', 'Piso']"
                        label="Detalhes Adicionais *"
                        use-chips
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => val.length > 0 || false]"
                      />
                    </div>
                    <div class="col-7">
                      <q-input
                        v-model="form2.descricao"
                        outlined
                        label="Descrição *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-8">
                      <q-input
                        v-model="form2.cidade"
                        outlined
                        label="Cidade *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-4">
                      <q-input
                        v-model="form2.estado"
                        outlined
                        label="Estado (sigla) *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-6">
                      <q-input
                        v-model="form2.codigo"
                        outlined
                        label="Código Postal *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                    <div class="col-6">
                      <q-input
                        v-model="form2.pais"
                        outlined
                        label="País *"
                        stack-label
                        hide-bottom-space
                        lazy-rules
                        :rules="[val => !!val || false]"
                      />
                    </div>
                  </div>
                </div>
              </q-form>
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
      form1: {
        primeiroNome: '',
        meioNome: '',
        ultimoNome: '',
        logradouro: '',
        numero: '',
        adicionalInfo: [],
        descricao: '',
        cidade: '',
        estado: '',
        codigo: '',
        provincia: '',
        pais: ''
      },
      form2: {
        empresaNome: '',
        ein: '',
        contaNumero: '',
        responsavelNome: '',
        logradouro: '',
        numero: '',
        adicionalInfo: [],
        descricao: '',
        cidade: '',
        estado: '',
        codigo: '',
        pais: '',
        celular: '',
        email: ''
      }
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
