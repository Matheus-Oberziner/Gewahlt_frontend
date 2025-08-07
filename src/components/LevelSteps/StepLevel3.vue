<template>
  <div class="col-12" style="padding: 60px 0;">
    <q-btn
      flat
      dense
      no-caps
      @click="expanded[0] = !expanded[0]"
    >
      <TopicsComponent
        label="Construção Case"
        :expanded="expanded[0]"
        type="common"
      />
    </q-btn>
  </div>
  <transition name="fade-expand">
    <div v-show="expanded[0]" class="col-12 row q-col-gutter-lg" style="padding-bottom: 40px;">
      <div
        v-for="(item, index) in itemsTopic1"
        :key="index"
        :class="$q.screen.width > 1700 ? 'col-3' : $q.screen.width > 1300 ? 'col-4' : 'col-6'"
        class="row"
      >
        <div style="width: 360px;">
          <CardsComponent
            type="type4"
            :index="index"
            :item-data="item"
          >
            <template #content>
              <div class="col-12 row text-primary text-center text-15">
                <span class="col-12">Data de Início: </span>
                <span class="col-12 opacity-60">05/05/2025</span>
              </div>
            
              <div class="col-12 row text-primary text-center text-15">
                <span class="col-12">Data de Conclusão: </span>
                <span class="col-12 opacity-60">05/05/2025</span>
              </div>
            
              <div class="col-12 row items-center text-center text-15">
                <span class="col-12 text-primary q-pr-sm">Status:</span>
              
                <div class="col-12 row q-gutter-xs justify-center">
                  <svg class="text-grey" width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0.84375C10.9968 0.84375 8.54988 1.58603 6.46857 2.97671C4.38726 4.3674 2.76508 6.34404 1.80716 8.65666C0.849234 10.9693 0.598598 13.514 1.08694 15.9691C1.57529 18.4242 2.78068 20.6793 4.55069 22.4493C6.32069 24.2193 8.57582 25.4247 11.0309 25.9131C13.486 26.4014 16.0307 26.1508 18.3433 25.1928C20.656 24.2349 22.6326 22.6127 24.0233 20.5314C25.414 18.4501 26.1563 16.0032 26.1563 13.5C26.155 10.1437 24.8212 6.92526 22.448 4.55202C20.0747 2.17878 16.8563 0.844964 13.5 0.84375ZM21.0938 14.9259H5.90626V12.0741H21.0938V14.9259Z" fill="currentColor"/>
                  </svg>
                
                  <svg class="text-warning" width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5108 0.0109863C12.5074 0.0109863 12.503 0.0115381 12.4997 0.0115381C12.4959 0.0115381 12.4926 0.0109863 12.4887 0.0109863C5.59191 0.0109863 0 5.60234 0 12.5002C0 19.397 5.59191 24.9889 12.4887 24.9889C12.4926 24.9889 12.4959 24.9889 12.4997 24.9889C12.503 24.9889 12.5074 24.9889 12.5108 24.9889C19.4075 24.9889 24.9994 19.397 24.9994 12.5002C25 5.60234 19.4081 0.0109863 12.5108 0.0109863ZM12.5108 21.4136C12.5074 21.4136 12.503 21.4131 12.4997 21.4131C12.4959 21.4131 12.4926 21.4136 12.4887 21.4136C11.3598 21.4136 10.4445 20.4988 10.4445 19.3694C10.4445 18.2411 11.3598 17.3263 12.4887 17.3263C12.4926 17.3263 12.4959 17.3263 12.4997 17.3263C12.503 17.3263 12.5074 17.3263 12.5108 17.3263C13.6391 17.3263 14.5555 18.2411 14.5555 19.3694C14.5555 20.4983 13.6407 21.4136 12.5108 21.4136ZM15.4422 5.83628C15.3086 7.87607 14.3762 13.9425 14.3762 13.9425C14.3762 14.9654 13.5381 15.7941 12.5152 15.7941C12.5097 15.7941 12.5041 15.7941 12.4992 15.7941C12.4942 15.7941 12.4881 15.7941 12.4832 15.7941C11.4608 15.7941 10.6227 14.9643 10.6227 13.9425C10.6227 13.9425 9.6908 7.87607 9.55728 5.83628C9.49107 4.81501 10.2734 2.91867 12.4837 2.91867C12.4892 2.91867 12.4948 2.91922 12.4997 2.91922C12.5047 2.91922 12.5102 2.91867 12.5157 2.91867C14.7255 2.91867 15.5089 4.81501 15.4422 5.83628Z" fill="currentColor"/>
                  </svg>
                
                  <svg class="text-grey" width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0002 25.7999C20.0694 25.7999 25.8002 20.0691 25.8002 13C25.8002 5.9307 20.0694 0.199951 13.0002 0.199951C5.93095 0.199951 0.200195 5.9307 0.200195 13C0.200195 20.0691 5.93095 25.7999 13.0002 25.7999ZM19.0253 11.345C19.5251 10.8452 19.5251 10.0347 19.0253 9.53485C18.5254 9.03498 17.7149 9.03498 17.2151 9.53485L11.7202 15.0298L8.7853 12.0949C8.28542 11.595 7.47497 11.595 6.97509 12.0949C6.47523 12.5947 6.47523 13.4052 6.97509 13.905L10.8151 17.745C11.3149 18.2449 12.1254 18.2449 12.6253 17.745L19.0253 11.345Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </template>
          </CardsComponent>
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
        label="Documentos Complementares Case"
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

  <div class="col-12" style="padding: 40px 0;">
    <q-btn
      flat
      dense
      no-caps
      @click="expanded[2] = !expanded[2]"
    >
      <TopicsComponent
        label="Construção Business Plan"
        :expanded="expanded[2]"
        type="common"
      />
    </q-btn>
  </div>
  <transition name="fade-expand">
    <div v-show="expanded[2]" class="col-12 row q-col-gutter-lg" style="padding-bottom: 40px;">
      <div
        v-for="(item, index) in itemsTopic2"
        :key="index"
        :class="$q.screen.width > 1700 ? 'col-3' : $q.screen.width > 1300 ? 'col-4' : 'col-6'"
        class="row justify-center"
      >
        <div style="width: 360px;">
          <CardsComponent
            type="type4"
            :index="index"
            :item-data="item"
          >
            <template #content>
              <div class="col-12 row text-primary text-center text-15">
                <span class="col-12">Data de Início: </span>
                <span class="col-12 opacity-60">05/05/2025</span>
              </div>
            
              <div class="col-12 row text-primary text-center text-15">
                <span class="col-12">Data de Conclusão: </span>
                <span class="col-12 opacity-60">05/05/2025</span>
              </div>
            
              <div class="col-12 row items-center text-center text-15">
                <span class="col-12 text-primary q-pr-sm">Status:</span>
              
                <div class="col-12 row q-gutter-xs justify-center">
                  <svg class="text-grey" width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0.84375C10.9968 0.84375 8.54988 1.58603 6.46857 2.97671C4.38726 4.3674 2.76508 6.34404 1.80716 8.65666C0.849234 10.9693 0.598598 13.514 1.08694 15.9691C1.57529 18.4242 2.78068 20.6793 4.55069 22.4493C6.32069 24.2193 8.57582 25.4247 11.0309 25.9131C13.486 26.4014 16.0307 26.1508 18.3433 25.1928C20.656 24.2349 22.6326 22.6127 24.0233 20.5314C25.414 18.4501 26.1563 16.0032 26.1563 13.5C26.155 10.1437 24.8212 6.92526 22.448 4.55202C20.0747 2.17878 16.8563 0.844964 13.5 0.84375ZM21.0938 14.9259H5.90626V12.0741H21.0938V14.9259Z" fill="currentColor"/>
                  </svg>
                
                  <svg class="text-warning" width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5108 0.0109863C12.5074 0.0109863 12.503 0.0115381 12.4997 0.0115381C12.4959 0.0115381 12.4926 0.0109863 12.4887 0.0109863C5.59191 0.0109863 0 5.60234 0 12.5002C0 19.397 5.59191 24.9889 12.4887 24.9889C12.4926 24.9889 12.4959 24.9889 12.4997 24.9889C12.503 24.9889 12.5074 24.9889 12.5108 24.9889C19.4075 24.9889 24.9994 19.397 24.9994 12.5002C25 5.60234 19.4081 0.0109863 12.5108 0.0109863ZM12.5108 21.4136C12.5074 21.4136 12.503 21.4131 12.4997 21.4131C12.4959 21.4131 12.4926 21.4136 12.4887 21.4136C11.3598 21.4136 10.4445 20.4988 10.4445 19.3694C10.4445 18.2411 11.3598 17.3263 12.4887 17.3263C12.4926 17.3263 12.4959 17.3263 12.4997 17.3263C12.503 17.3263 12.5074 17.3263 12.5108 17.3263C13.6391 17.3263 14.5555 18.2411 14.5555 19.3694C14.5555 20.4983 13.6407 21.4136 12.5108 21.4136ZM15.4422 5.83628C15.3086 7.87607 14.3762 13.9425 14.3762 13.9425C14.3762 14.9654 13.5381 15.7941 12.5152 15.7941C12.5097 15.7941 12.5041 15.7941 12.4992 15.7941C12.4942 15.7941 12.4881 15.7941 12.4832 15.7941C11.4608 15.7941 10.6227 14.9643 10.6227 13.9425C10.6227 13.9425 9.6908 7.87607 9.55728 5.83628C9.49107 4.81501 10.2734 2.91867 12.4837 2.91867C12.4892 2.91867 12.4948 2.91922 12.4997 2.91922C12.5047 2.91922 12.5102 2.91867 12.5157 2.91867C14.7255 2.91867 15.5089 4.81501 15.4422 5.83628Z" fill="currentColor"/>
                  </svg>
                
                  <svg class="text-grey" width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0002 25.7999C20.0694 25.7999 25.8002 20.0691 25.8002 13C25.8002 5.9307 20.0694 0.199951 13.0002 0.199951C5.93095 0.199951 0.200195 5.9307 0.200195 13C0.200195 20.0691 5.93095 25.7999 13.0002 25.7999ZM19.0253 11.345C19.5251 10.8452 19.5251 10.0347 19.0253 9.53485C18.5254 9.03498 17.7149 9.03498 17.2151 9.53485L11.7202 15.0298L8.7853 12.0949C8.28542 11.595 7.47497 11.595 6.97509 12.0949C6.47523 12.5947 6.47523 13.4052 6.97509 13.905L10.8151 17.745C11.3149 18.2449 12.1254 18.2449 12.6253 17.745L19.0253 11.345Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </template>
          </CardsComponent>
        </div>
      </div>
    </div>
  </transition>

  <div class="col-12" style="padding: 40px 0;">
    <q-btn
      flat
      dense
      no-caps
      @click="expanded[3] = !expanded[3]"
    >
      <TopicsComponent
        label="Documentos Complementares Business Plan"
        :expanded="expanded[3]"
        type="common"
      />
    </q-btn>
  </div>
  <transition name="fade-expand">
    <div v-show="expanded[3]" class="row q-col-gutter-xl" style="padding-bottom: 40px;">
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
    const expanded = ref([true, true, true, true])

    return {
      expanded
    }
  },
  data () {
    return {
      itemsTopic1: [
        {
          title: 'Análise',
          colors: {
            background: 'blue',
            text: 'white'
          }
        },
        {
          title: 'Contrução',
          colors: {
            background: 'grey',
            text: 'black'
          }
        },
        {
          title: 'Revisão',
          colors: {
            background: 'grey',
            text: 'black'
          }
        },
        {
          title: 'Draft',
          colors: {
            background: 'grey',
            text: 'black'
          }
        }
      ],
      itemsTopic2: [
        {
          title: 'Pré-Contrução',
          colors: {
            background: 'blue',
            text: 'white'
          }
        },
        {
          title: 'Contrução',
          colors: {
            background: 'grey',
            text: 'black'
          }
        },
        {
          title: 'Revisão',
          colors: {
            background: 'grey',
            text: 'black'
          }
        },
        {
          title: 'Draft',
          colors: {
            background: 'grey',
            text: 'black'
          }
        }
      ]
    }
  }
}
</script>
<style scoped>

</style>
