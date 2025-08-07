<template>
  <div class="row q-col-gutter-lg" style="padding-top: 60px; width: 100vw;">
    <div
      v-for="(index) in 4"
      :key="index"
      :class="$q.screen.width > 1700 ? 'col-3' : $q.screen.width > 1300 ? 'col-4' : 'col-6'"
      class="row justify-center"
    >
      <div style="width: 360px;">
        <CardsComponent type="type4" />
      </div>
    </div>
  </div>

  <div
    class="row justify-center items-center bg-grey q-py-sm q-px-xl"
    style="margin-top: 60px; margin-bottom: 30px; width: 100vw; margin-left: calc(-6.5vw); margin-right: calc(-6.5vw);"
  >
    <span class="text-20 text-primary">Favor revisar o documento e confirmar sua aprovação para seguir ao próximo nível</span>
    <button class="q-btn q-btn--dense q-btn--rounded bg-blue text-white q-px-lg q-ml-md cursor-pointer" style="font-size: 16px; text-transform: none;">
      Revisar
    </button>
  </div>
  
</template>
<script>
import CardsComponent from '../CardsComponent.vue'
export default {
  components: {
    CardsComponent
  },
  setup () {
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
