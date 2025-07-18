<template>
  <div class="row justify-center">
    <q-card
      style="border-radius: 30px; width: 280px; padding: 0 5px 20px; position: relative;"
      class="shadow_bottom"
    >
      <!-- Header com seta -->
      <div
        class="etapa-banner row justify-center items-center text-white bg-accent"
        style="border-radius: 0px;"
      >
        <span class="col-12 text-center text-28 weight-700">{{ titulo }}</span>
      </div>

      <!-- Círculo com número -->
      <div
        class="etapa-numero text-24 weight-700 text-white bg-accent"
        style="border-radius: 50%; border: 5px solid #F4F4F4;"
      >
        {{ numeroEtapa }}
      </div>
      
      <q-card-section class="row q-col-gutter-md q-px-lg" style="margin-top: 10px;">
        <div class="col-12 row text-primary text-center">
          <span class="col-12 text-16 weight-500">Data de Início:</span>
          <span class="col-12 opacity-60 text-14">{{ dataInicio }}</span>
        </div>
      
        <div class="col-12 row text-primary text-center">
          <span class="col-12 text-16 weight-500">Data de Conclusão:</span>
          <span class="col-12 opacity-60 text-14">{{ dataConclusao }}</span>
        </div>
      
        <div class="col-12 row items-center text-center">
          <span class="col-12 text-primary text-16 weight-500 q-mb-sm">Status:</span>
        
          <div class="col-12 row q-gutter-xs justify-center">
            <!-- Ícone de status negativo/pendente -->
            <svg 
              class="text-negative" 
              width="24" 
              height="24" 
              viewBox="0 0 26 26" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 0.84375C10.9968 0.84375 8.54988 1.58603 6.46857 2.97671C4.38726 4.3674 2.76508 6.34404 1.80716 8.65666C0.849234 10.9693 0.598598 13.514 1.08694 15.9691C1.57529 18.4242 2.78068 20.6793 4.55069 22.4493C6.32069 24.2193 8.57582 25.4247 11.0309 25.9131C13.486 26.4014 16.0307 26.1508 18.3433 25.1928C20.656 24.2349 22.6326 22.6127 24.0233 20.5314C25.414 18.4501 26.1563 16.0032 26.1563 13.5C26.155 10.1437 24.8212 6.92526 22.448 4.55202C20.0747 2.17878 16.8563 0.844964 13.5 0.84375ZM21.0938 14.9259H5.90626V12.0741H21.0938V14.9259Z" fill="currentColor"/>
            </svg>
          
            <!-- Ícone de status neutro/em progresso -->
            <svg 
              class="text-grey-5" 
              width="24" 
              height="24" 
              viewBox="0 0 26 26" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.5108 0.0109863C12.5074 0.0109863 12.503 0.0115381 12.4997 0.0115381C12.4959 0.0115381 12.4926 0.0109863 12.4887 0.0109863C5.59191 0.0109863 0 5.60234 0 12.5002C0 19.397 5.59191 24.9889 12.4887 24.9889C12.4926 24.9889 12.4959 24.9889 12.4997 24.9889C12.503 24.9889 12.5074 24.9889 12.5108 24.9889C19.4075 24.9889 24.9994 19.397 24.9994 12.5002C25 5.60234 19.4081 0.0109863 12.5108 0.0109863ZM12.5108 21.4136C12.5074 21.4136 12.503 21.4131 12.4997 21.4131C12.4959 21.4131 12.4926 21.4136 12.4887 21.4136C11.3598 21.4136 10.4445 20.4988 10.4445 19.3694C10.4445 18.2411 11.3598 17.3263 12.4887 17.3263C12.4926 17.3263 12.4959 17.3263 12.4997 17.3263C12.503 17.3263 12.5074 17.3263 12.5108 17.3263C13.6391 17.3263 14.5555 18.2411 14.5555 19.3694C14.5555 20.4983 13.6407 21.4136 12.5108 21.4136ZM15.4422 5.83628C15.3086 7.87607 14.3762 13.9425 14.3762 13.9425C14.3762 14.9654 13.5381 15.7941 12.5152 15.7941C12.5097 15.7941 12.5041 15.7941 12.4992 15.7941C12.4942 15.7941 12.4881 15.7941 12.4832 15.7941C11.4608 15.7941 10.6227 14.9643 10.6227 13.9425C10.6227 13.9425 9.6908 7.87607 9.55728 5.83628C9.49107 4.81501 10.2734 2.91867 12.4837 2.91867C12.4892 2.91867 12.4948 2.91922 12.4997 2.91922C12.5047 2.91922 12.5102 2.91867 12.5157 2.91867C14.7255 2.91867 15.5089 4.81501 15.4422 5.83628Z" fill="currentColor"/>
            </svg>
          
            <!-- Ícone de status positivo/concluído -->
            <svg 
              class="text-grey-5" 
              width="24" 
              height="24" 
              viewBox="0 0 26 26" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0002 25.7999C20.0694 25.7999 25.8002 20.0691 25.8002 13C25.8002 5.9307 20.0694 0.199951 13.0002 0.199951C5.93095 0.199951 0.200195 5.9307 0.200195 13C0.200195 20.0691 5.93095 25.7999 13.0002 25.7999ZM19.0253 11.345C19.5251 10.8452 19.5251 10.0347 19.0253 9.53485C18.5254 9.03498 17.7149 9.03498 17.2151 9.53485L11.7202 15.0298L8.7853 12.0949C8.28542 11.595 7.47497 11.595 6.97509 12.0949C6.47523 12.5947 6.47523 13.4052 6.97509 13.905L10.8151 17.745C11.3149 18.2449 12.1254 18.2449 12.6253 17.745L19.0253 11.345Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'CardEtapa',
  props: {
    titulo: {
      type: String,
      default: 'Análise'
    },
    numeroEtapa: {
      type: [String, Number],
      default: '01'
    },
    dataInicio: {
      type: String,
      default: '05/05/2025'
    },
    dataConclusao: {
      type: String,
      default: '05/05/2025'
    },
    status: {
      type: String,
      default: 'pendente', // pendente, em_progresso, concluido
      validator: (value) => ['pendente', 'em_progresso', 'concluido'].includes(value)
    }
  }
}
</script>

<style scoped>
.shadow_bottom {
  box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.15);
}

.etapa-banner {
  width: 350px;
  height: 70px;
  margin-bottom: 20px;
  position: relative;
  left: -15%;
  clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.etapa-numero {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-primary {
  background-color: #1976D2;
}

.text-primary {
  color: #1976D2;
}

.weight-700 {
  font-weight: 700;
}

.weight-500 {
  font-weight: 500;
}

.text-28 {
  font-size: 28px;
}

.text-24 {
  font-size: 24px;
}

.text-16 {
  font-size: 16px;
}

.text-14 {
  font-size: 14px;
}

.opacity-60 {
  opacity: 0.6;
}
</style>