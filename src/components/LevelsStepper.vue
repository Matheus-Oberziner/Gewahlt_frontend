<template>
  <div
    :class="{'full-width' : activeStep !== 6}"
    :style="activeStep === 6 ? 'width: 60vw;' : ''"
  >
    <div class="row items-center no-wrap full-width relative-position">

      <template v-for="(step, index) in steps" :key="index">
        <!-- Step + label acima -->
        <div class="column items-center" style="position: relative;">
          <!-- Label acima e à esquerda -->
          <div
            v-if="activeStep === index"
            class="text-20 weight-600 text-primary"
            style="position: absolute; bottom: 35px; left: 70px; white-space: nowrap;"
          >
            {{ step.label }}
          </div>

          <!-- Círculo numerado -->
          <div
            class="step-circle text-caption text-white text-24 weight-700 cursor-pointer"
            :class="{
              'bg-blue': index <= activeStep,
              'bg-grey': index > activeStep
            }"
            @click="$emit('atualiza-level', index)"
          >
            {{ (index + 1).toString().padStart(2, '0') }}
          </div>
        </div>

        <!-- Linha de conexão -->
        <div
          v-if="index < steps.length - 1"
          class="step-line-wrapper"
          :class="{ 'step-line-wrapper-active': index === activeStep }"
        >
          <div
            class="step-line-base"
            :class="{
              'bg-grey': index >= activeStep,
              'bg-blue': index < activeStep
            }"
          >
            <!-- Linha com progresso parcial apenas no step atual -->
            <div
              v-if="index === activeStep"
              class="step-line-progress bg-blue"
            ></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomStepper',
  props: {
    steps: {
      type: Array,
      required: true
    },
    activeStep: {
      type: Number,
      default: 0
    }
  },
  emits: ['atualiza-level']
}
</script>

<style scoped>
.step-circle {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  font-weight: 500;
}

.step-line-wrapper {
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 0 4px;
}

.step-line-wrapper-active {
  min-width: 35%; /* linha entre step atual e próximo */
}

.step-line-base {
  position: relative;
  height: 5px;
  width: 100%;
  border-radius: 10px;
}

.step-line-progress {
  height: 5px;
  width: 90%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px 0 0 10px;
}
</style>
