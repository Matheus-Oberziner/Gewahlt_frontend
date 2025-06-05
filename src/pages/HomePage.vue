<template>
  <div
    class="col-12 row"
    style="padding: 4.5% 4.5% 2% 4.5%;"
  >
    <div class="col-12">
      <span class="text-18 weight-500">Acompanhe a sua solicitação de visto. Atualmente você está no nível 1.</span>
    </div>

    <div class="col-12 row q-pt-lg justify-between">
      <div class="col-7 row q-col-gutter-sm">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-4 row"
        >
          <q-avatar style="background-color: #26262680; border-radius: 7.5px; height: 52px; width: 52px;">
            <q-icon
              :name="item.icon"
              size="30px"
            />
          </q-avatar>

          <div class="q-pl-sm">
            <span class="text-16 weight-600">
              {{ item.label }}
              <q-icon
                name="info_outline"
                size="13px"
              />
            </span>
            <br>
            <span class="text-16">{{ item.value }}</span>
          </div>
        </div>
      </div>

      <div class="col-5 column justify-center items-end">
        <div class="row items-center">
          <q-img src="/levelsIcon.svg" height="33px" width="40px" class="q-my-auto q-mr-sm" />
  
          <span class="text-30 weight-500 q-my-auto">
            Seu Status é Ouro
            <q-icon
              name="info_outline"
              size="13px"
              class="q-mb-md"
            />
          </span>
        </div>

        <div class="row q-mt-sm q-pr-md" style="width: 47%;">
          <div
            v-for="(index) in 3"
            :key="index"
            class="col-4 row justify-center"
          >
            <svg v-if="index === 1" preserveAspectRatio="none" width="95%" height="7px" viewBox="0 0 101 7" fill="none" preserve-aspect-ratio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H101L98.9175 7H0V0Z" fill="#F4C571"/>
            </svg>

            <svg v-if="index === 2" preserveAspectRatio="none" width="95%" height="7px" viewBox="0 0 102 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.81218 0H102L100.188 7H0L1.81218 0Z" fill="#F4C571"/>
            </svg>

            <svg v-if="index === 3" preserveAspectRatio="none" width="95%" height="7px" viewBox="0 0 100 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 7L0 7L1.5544 2.33184e-08L100 -8.58307e-06L100 7Z" fill="#F4C571"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 q-gutter-sm" style="padding-top: 4%;">
      <q-expansion-item
        v-for="(level, index) in levels"
        :key="index"
        style="border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 20px;"
        :style="!level.isExpanded ? 'background-color: #404040;' : 'background-color: #202020;'"
        @click="level.isExpanded = !level.isExpanded"
      >
        <template #header>
          <q-item-section style="padding: 0.8%;">
            <div class="row items-center">
              <span class="q-mr-sm text-center weight-600" style="height: 28px; width: 28px; background-color: #1A1A1A; border: 3px solid #3B4043; border-radius: 50%;">
                {{ level.nivel }}
              </span>

              <span class="text-30 weight-600" style="min-width: 12%;">
                Nível {{ level.nivel }}
              </span>
  
              <q-card
                flat
                style="height: 30px; border-radius: 8px;"
                :style="level.status === 'Em análise' ? 'background-color: #6F8268;' : 'background-color: #8B8B8B;'"
              >
                <q-card-section class="text-16 weight-500 q-py-xs q-px-sm">
                  Status: {{ level.status }}
                </q-card-section>
              </q-card>
            </div>
          </q-item-section>
        </template>

        <q-card style="background-color: rgba(32, 32, 32, 1); border-radius: 20px;">
          <q-card-section>
            Conteúdo
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
</template>
<script>
import { mdiCalendar, mdiReceiptText, mdiSpellcheck } from '@quasar/extras/mdi-v7';
export default {
  setup () {
    return {
      mdiSpellcheck,
      mdiReceiptText,
      mdiCalendar
    }
  },
  data () {
    return {
      items: [
        { icon: mdiSpellcheck, label: 'Visto Contratado', value: '01 A CBZ8YXZ' },
        { icon: mdiReceiptText, label: 'N° do Contrato', value: '134567889077' },
        { icon: mdiCalendar, label: 'Data de Inicio', value: '30/05/2025' }
      ],
      levels: [
        { nivel: 1, status: 'Em análise', isExpanded: false },
        { nivel: 2, status: 'Não iniciado', isExpanded: false },
        { nivel: 3, status: 'Não iniciado', isExpanded: false },
        { nivel: 4, status: 'Não iniciado', isExpanded: false },
        { nivel: 5, status: 'Não iniciado', isExpanded: false },
        { nivel: 6, status: 'Não iniciado', isExpanded: false },
        { nivel: 7, status: 'Não iniciado', isExpanded: false },
        { nivel: 8, status: 'Não iniciado', isExpanded: false }
      ]
    }
  }
}  
</script>
<style scoped>
::v-deep(.q-expansion-item__container .q-focus-helper) {
  border-radius: 20px !important;
}
</style>
