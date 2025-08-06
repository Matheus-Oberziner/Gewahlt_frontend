<template>
  <div class="col-12" style="padding: 60px 0;">
    <q-btn
      flat
      dense
      no-caps
      @click="expanded[0] = !expanded[0]"
    >
      <TopicsComponent
        label="Solicitações"
        :expanded="expanded[0]"
        type="common"
      />
    </q-btn>
  </div>
  <transition name="fade-expand">
    <div v-show="expanded[0]" class="row q-col-gutter-lg" style="padding-bottom: 40px;">
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
  </transition>

  <div class="col-12" style="padding: 40px 0;">
    <q-btn
      flat
      dense
      no-caps
      @click="expanded[1] = !expanded[1]"
    >
      <TopicsComponent
        label="Documentos Complementares"
        :expanded="expanded[1]"
        type="common"
      />
    </q-btn>
  </div>
  <transition name="fade-expand">
    <div v-show="expanded[1]" class="row q-col-gutter-xl" style="padding-bottom: 40px;">
      <div
        v-for="(index) in 3"
        :key="index"
        class="col-12 row"
      >
        <CardsComponent type="comment" />
      </div>
    </div>
  </transition>
</template>
<script>
import { ref } from 'vue'
import CardsComponent from '../CardsComponent.vue'
import TopicsComponent from '../TopicsComponent.vue'
export default {
  components: {
    CardsComponent,
    TopicsComponent
  },
  setup () {
    const expanded = ref([true, true])

    return {
      expanded
    }
  }
}
</script>
<style scoped>

</style>
