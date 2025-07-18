<template>
  <div style="padding: 40px 0;">
    <TopicsComponent
      label="Solicitações"
      :expanded="expanded"
      type="common"
    />
  </div>
  <div class="row q-col-gutter-lg" style="padding-bottom: 40px;">
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
    <TopicsComponent
      label="Documentos Complementares"
      :expanded="expanded"
      type="common"
    />
  </div>
  <div class="row q-col-gutter-xl" style="padding-bottom: 40px;">
    <div
      v-for="(index) in 3"
      :key="index"
      class="col-12 row"
    >
      <CardsComponent type="comment" />
    </div>
  </div>
</template>
<script>
import CardsComponent from '../CardsComponent.vue'
import TopicsComponent from '../TopicsComponent.vue';
export default {
  components: {
    CardsComponent,
    TopicsComponent
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
