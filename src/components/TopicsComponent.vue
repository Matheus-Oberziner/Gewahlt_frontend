<template>
  <!-- Tópico Comum -->
  <div
    v-if="type === 'common'"
    class="row items-center"
  >
    <q-card
      flat
      class="bg-secondary q-pa-xs"
      style="border-radius: 50px 50px 50px 0px;"
    >
      <q-card-section class="q-py-xs">
        <span class="text-22 weight-700 text-white">{{ label }}</span>
      </q-card-section>
    </q-card>

    <div
      class="q-ml-md arrow"
      :class="{ rotated: expanded }"
    />
  </div>

  <!-- Tópico com Icon and Expansion -->
  <div
    v-if="type === 'custom'"
    class="row items-center"
  >
    <div class="row items-center bg-white q-pa-sm" style="position: relative; left: 10px; border: 8px solid #325984; border-radius: 50%;">
      <slot name="icon" />
    </div>
  
    <div class="bg-secondary q-py-sm q-px-lg" style="border-radius: 0 50px 50px 0;">
      <span class="text-20 weight-700 text-white">{{ label }}</span>
    </div>
  
    <div
      class="q-ml-md arrow"
      :class="{ rotated: expanded }"
    />
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
.arrow {
  width: 0;
  height: 0;
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  border-top: 20px solid #325984;
  transition: transform 0.3s ease;
}

.arrow.rotated {
  transform: rotate(180deg);
}

</style>