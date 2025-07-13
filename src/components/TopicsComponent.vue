<template>
  <!-- Tópico Comum -->
  <q-card
    v-if="type === 'common'"
    flat
    class="bg-info"
    style="border-radius: 50px 50px 50px 0px;"
  >
    <q-card-section class="q-py-xs">
      <span class="text-22 weight-700 text-white">{{ label }}</span>
    </q-card-section>
  </q-card>

  <!-- Tópico com Icon and Expansion -->
  <div
    v-if="type === 'custom'"
    class="row items-center"
  >
    <div class="row items-center bg-white q-pa-sm" style="position: relative; left: 10px; border: 8px solid #007AFF; border-radius: 50%;">
      <slot name="icon" />
    </div>
  
    <div class="bg-info q-py-sm q-px-lg" style="border-radius: 0 50px 50px 0;">
      <span class="text-20 weight-700 text-white">{{ label }}</span>
    </div>
  
    <div class="q-ml-md" :class="expanded ? 'arrow_expanded' : 'arrow_not_expanded'" />
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    expanded: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.arrow_expanded {
  width: 0;
  height: 0;
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  border-top: 20px solid #007AFF;
}

.arrow_not_expanded {
  width: 0;
  height: 0;
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  border-bottom: 20px solid #007AFF;
}
</style>