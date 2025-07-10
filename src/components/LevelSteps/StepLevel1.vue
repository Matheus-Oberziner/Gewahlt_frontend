<template>
  <div class="col-12 row justify-between" style="min-height: 169px; padding-bottom: 40px;">
    <div class="self-end">
      <q-card
        flat
        class="bg-info"
        style="border-radius: 50px 50px 50px 0px;"
      >
        <q-card-section class="q-py-xs">
          <span class="text-22 weight-700 text-white">Questionários</span>
        </q-card-section>
      </q-card>
    </div>

    <div>
      <q-expansion-item
        default-opened
        expand-icon="arrow_drop_down"
        class="expansion-class"
        expand-icon-class="text-primary"
      >
        <template #header>
          <span class="text-18 text-primary q-pr-xs">Acompanhar Peticionário</span>
        </template>
  
        <q-card
          flat
          class="bg-secondary text-white"
          style="border-radius: 10px;"
        >
          <q-card-section class="q-py-sm">
            <div class="col-12 row justify-between">
              <span class="text-14 weight-700">Atividade</span>

              <span class="text-14 weight-700">Status</span>
            </div>

            <div class="col-12 row justify-between items-center q-py-xs">
              <div class="row items-center">
                <q-icon
                  :name="mdiCheckboxOutline"
                  size="13px"
                  class="q-mr-xs"
                />

                <span class="text-12">Preencher Questionário</span>
              </div>

              <span class="text-12 weight-600 q-pl-sm">Concluído</span>
            </div>

            <div class="col-12 row justify-between items-center">
              <div class="row items-center">
                <q-icon
                  :name="mdiMinusCircleOutline"
                  size="13px"
                  class="q-mr-xs"
                />

                <span class="text-12">Enviar Documento</span>
              </div>

              <span class="text-12 weight-600 q-pl-sm">Pendente</span>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>

  <div class="col-12 row q-col-gutter-md" style="padding-bottom: 40px;">
    <div
      v-for="(index) in 8"
      :key="index"
      :class="$q.screen.width > 1700 ? 'col-3' : $q.screen.width > 1300 ? 'col-4' : 'col-6'"
    >
      <CardsComponent type="form" />
    </div>
  </div>

  <div style="padding: 40px 0;">
    <q-card
      flat
      class="bg-info"
      style="border-radius: 50px 50px 50px 0px;"
    >
      <q-card-section class="q-py-xs">
        <span class="text-22 weight-700 text-white">Documentos Básicos</span>
      </q-card-section>
    </q-card>
  </div>
  <div class="col-12 row q-col-gutter-lg" style="padding-bottom: 40px;">
    <div
      v-for="(index) in 8"
      :key="index"
      :class="$q.screen.width > 1700 ? 'col-3' : $q.screen.width > 1300 ? 'col-4' : 'col-6'"
      class="row justify-center"
    >
      <div style="width: 360px;">
        <CardsComponent type="document" />
      </div>
    </div>
  </div>

  <div style="padding: 40px 0;">
    <q-card
      flat
      class="bg-info"
      style="border-radius: 50px 50px 50px 0px;"
    >
      <q-card-section class="q-py-xs">
        <span class="text-22 weight-700 text-white">Critérios do visto</span>
      </q-card-section>
    </q-card>
  </div>
  <div class="col-12 row q-col-gutter-xl" style="padding-bottom: 40px;">
    <div
      v-for="(index) in 4"
      :key="index"
      class="col-12 row"
    >
      <CardsComponent type="comment" />
    </div>
  </div>

  <div style="padding: 40px 0;">
    <q-card
      flat
      class="bg-info"
      style="border-radius: 50px 50px 50px 0px;"
    >
      <q-card-section class="q-py-xs">
        <span class="text-22 weight-700 text-white">Documentos Complementares</span>
      </q-card-section>
    </q-card>
  </div>
  <div class="col-12 row q-col-gutter-xl" style="padding-bottom: 40px;">
    <div
      v-for="(index) in 3"
      :key="index"
      class="col-12 row"
    >
      <CardsComponent type="comment" />
    </div>
  </div>

  <div class="col-12 row justify-end bg-grey" style="margin: 40px 0;">
    <div class="row items-center q-py-md q-px-xl">
      <span class="text-24 text-primary weight-300 q-pr-xl">Solicitação para o Nível 2</span>

      <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="16" height="16" rx="8" fill="white"/>
        <rect x="0.5" y="0.5" width="16" height="16" rx="8" stroke="white"/>
        <circle cx="8.5" cy="8.5" r="5" fill="#2BD536" stroke="#D5D5D5" stroke-width="3"/>
      </svg>
      <span class="text-16 q-pl-sm q-pr-lg">Sim</span>

      <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="16" height="16" rx="8" fill="white"/>
        <rect x="0.5" y="0.5" width="16" height="16" rx="8" stroke="white"/>
        <circle cx="8.5" cy="8.5" r="5" fill="#C10015" stroke="#D5D5D5" stroke-width="3"/>
      </svg>
      <span class="text-16 q-pl-sm">Não</span>
    </div>
  </div>

  <div class="row q-px-xl" style="padding-bottom: 40px;">
    <div class="col-12">
      <span class="text-18 weight-700 text-primary">Escolha a opção mais adequada para a sua prioridade</span>
    </div>

    <div class="row q-col-gutter-xl q-pt-lg">
      <div>
        <div class="text-18 text-primary q-mb-sm q-pl-xl">Especialista</div>

        <div 
          class="bg-white q-pa-md q-mb-md"
          style="border-radius: 30px; box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.4);"
        >
          <q-radio
            model-value="false"
            type="radio"
            color="primary"
            dense
            label="Manter prazo padrão do especialista"
            class="text-primary"
          />
        </div>

        <div 
          class="bg-white q-pa-md"
          style="border-radius: 30px; box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.4);"
        >
          <q-radio
            model-value="false"
            type="radio"
            color="primary"
            dense
            label="Reduzir prazo especialista"
            class="text-primary"
          />
        </div>
      </div>

      <div>
        <div class="text-18 text-primary q-mb-sm q-pl-xl">Imigração</div>

        <div 
          class="bg-white q-pa-md q-mb-md"
          style="border-radius: 30px; box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.4);"
        >
          <q-radio
            model-value="false"
            type="radio"
            color="primary"
            dense
            label="Manter prazo padrão da imigração"
            class="text-primary"
          />
        </div>

        <div 
          class="bg-white q-pa-md"
          style="border-radius: 30px; box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.4);"
        >
          <q-radio
            model-value="false"
            type="radio"
            color="primary"
            dense
            label="Reduzir prazo imigração com taxa extra"
            class="text-primary"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mdiCheckboxOutline, mdiMinusCircleOutline } from '@quasar/extras/mdi-v7'
import CardsComponent from '../CardsComponent.vue'
export default {
  components: {
    CardsComponent
  },
  setup () {
    return {
      mdiCheckboxOutline,
      mdiMinusCircleOutline
    }
  }
}
</script>
<style scoped>
.expansion-class :deep(.q-icon) {
  font-size: 30px;
}

.expansion-class :deep(.q-item__section--side) {
  padding: 0;
}

.expansion-class :deep(.q-item) {
  padding: 8px 5px;
}
</style>
