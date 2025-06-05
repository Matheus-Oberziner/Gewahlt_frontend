<template>
  <q-dialog
    ref="refDialog"
    no-backdrop-dismiss
  >
    <div style="min-width: 35%;">
      <q-card flat style="border-radius: 20px;">
        <q-card-section class="row justify-between q-px-lg text-white">
          <span class="text-30 weight-600">Pagamentos</span>
  
          <q-btn
            round
            flat
            v-close-popup
            icon="close"
          />
        </q-card-section>

        <q-card-section class="q-px-lg q-pt-none">
          <span class="text-18 weight-500 opacity-75">Verifique suas informações de pagamentos</span>
        </q-card-section>

        <q-card-section class="row q-px-lg q-pt-lg">
          <div class="col-12 row justify-between text-25 weight-600">
            <span class="opacity-75">
              TOTAL
              <q-icon
                name="info_outline"
                size="13px"
                class="q-mb-md"
              />
            </span>

            <span>R$ 852,95</span>
          </div>

          <div class="col-12 row justify-between">
            <span class="text-18 weight-600 opacity-75">6 parcelas á pagar, 2 vencidas</span>

            <span class="text-20 text-orange weight-500 opacity-75">R$ 243,35</span>
          </div>
        </q-card-section>

        <q-card-section class="row q-gutter-sm">
          <q-card
            v-for="(index) in 3"
            :key="index"
            bordered
            flat
            style="border-radius: 20px; border-left: 16px solid #6F8268;"
            class="col-12 q-px-md"
          >
            <q-card-section class="row justify-between items-center">
              <div>
                <span class="text-25 weight-600">R$ 426,47</span>

                <br>

                <span class="text-16 weight-500 opacity-75">Parcela {{ index + 5 }} de 10</span>
              </div>

              <div>
                <q-card
                  flat
                  class="bg-green"
                  style="border-radius: 6px;"
                >
                  <q-card-section class="q-pa-sm">
                    <span class="text-white text-16 weight-500">
                      <q-icon
                        name="event"
                        size="20px"
                        class="q-pr-xs"
                      />
                      
                      Data de Vencimento: 16/0{{ index + 5}}/2025
                    </span>
                  </q-card-section>
                </q-card>
              </div>
            </q-card-section>
          </q-card>
        </q-card-section>

        <q-card-actions class="row justify-center q-pb-md">
          <q-btn
            no-caps
            flat
            style="width: 25%; border-radius: 6px;"
          >
            <div class="column items-center">
              <q-icon :name="mdiCash" size="22px" />
              <span class="text-18 weight-500 opacity-75 q-mt-xs">Em aberto</span>
            </div>
          </q-btn>

          <q-btn
            no-caps
            flat
            style="width: 25%; border-radius: 6px;"
          >
            <div class="column items-center">
              <q-icon :name="mdiCurrencyUsd" size="22px" />
              <span class="text-18 weight-500 opacity-75 q-mt-xs">Pagas</span>
            </div>
          </q-btn>

          <q-btn
            no-caps
            flat
            style="width: 25%; border-radius: 6px;"
          >
            <div class="column items-center">
              <q-icon :name="mdiWalletOutline" size="22px" />
              <span class="text-18 weight-500 opacity-75 q-mt-xs">Total Parcelas</span>
            </div>
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-dialog>
</template>
<script>
import { mdiCash, mdiCurrencyUsd, mdiWalletOutline } from '@quasar/extras/mdi-v7';
export default {
  setup() {
    return {
      mdiCash,
      mdiCurrencyUsd,
      mdiWalletOutline
    }
  }
}
</script>
