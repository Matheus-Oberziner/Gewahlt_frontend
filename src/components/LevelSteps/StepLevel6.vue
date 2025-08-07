<template>
  <div class="col-12 row justify-center" style="padding: 60px 0;">
    <!-- Step 1 -->
    <q-card class="shadow_bottom q-mb-xl" style="width: 95%; border-radius: 30px;">
      <q-card-section class="col-12 row no-padding">
        <div class="row items-center q-py-sm q-px-lg q-gutter-md text-primary" style="background-color: #F3F3F3; border-bottom-right-radius: 15px;">
          <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.5333 9.29375L26.4771 7.20833C26.0763 6.81259 25.5566 6.55964 24.9979 6.48848C24.4392 6.41733 23.8726 6.53192 23.3854 6.81458V2.83333C23.3816 2.15766 23.1115 1.51075 22.6337 1.03297C22.1559 0.555187 21.509 0.285078 20.8333 0.28125H3.33333C2.65766 0.285078 2.01075 0.555187 1.53297 1.03297C1.05519 1.51075 0.785078 2.15766 0.78125 2.83333V26.1667C0.785078 26.8423 1.05519 27.4893 1.53297 27.967C2.01075 28.4448 2.65766 28.7149 3.33333 28.7188H20.8333C21.509 28.7149 22.1559 28.4448 22.6337 27.967C23.1115 27.4893 23.3816 26.8423 23.3854 26.1667V18.0583L28.5333 12.9104C29.0107 12.4296 29.2785 11.7796 29.2785 11.1021C29.2785 10.4246 29.0107 9.77455 28.5333 9.29375ZM21.1979 26.1667C21.1979 26.2634 21.1595 26.3561 21.0911 26.4245C21.0228 26.4928 20.93 26.5312 20.8333 26.5312H3.33333C3.23664 26.5312 3.14391 26.4928 3.07553 26.4245C3.00716 26.3561 2.96875 26.2634 2.96875 26.1667V2.83333C2.96875 2.73664 3.00716 2.64391 3.07553 2.57553C3.14391 2.50716 3.23664 2.46875 3.33333 2.46875H20.8333C20.93 2.46875 21.0228 2.50716 21.0911 2.57553C21.1595 2.64391 21.1979 2.73664 21.1979 2.83333V8.9L14.0083 16.0896C13.7709 16.3268 13.583 16.6088 13.4553 16.9192C13.3276 17.2296 13.2628 17.5623 13.2646 17.8979V19.9542C13.2646 20.631 13.5335 21.2802 14.0121 21.7588C14.4907 22.2374 15.1398 22.5063 15.8167 22.5063H17.9167C18.5753 22.5061 19.2081 22.2498 19.6812 21.7917L21.1396 20.3333L21.1979 26.1667ZM27.0312 11.3646L18.1792 20.2167C18.1462 20.2536 18.1057 20.2831 18.0604 20.3032C18.0152 20.3233 17.9662 20.3336 17.9167 20.3333H15.8167C15.72 20.3333 15.6272 20.2949 15.5589 20.2266C15.4905 20.1582 15.4521 20.0654 15.4521 19.9688V17.8979C15.45 17.8495 15.458 17.8011 15.4756 17.7559C15.4931 17.7108 15.5199 17.6697 15.5542 17.6354L24.4062 8.78333C24.4393 8.74642 24.4797 8.71694 24.525 8.69683C24.5702 8.67672 24.6192 8.66644 24.6687 8.66667C24.7661 8.66573 24.8601 8.70228 24.9312 8.76875L26.9875 10.825C27.0251 10.8592 27.0551 10.9008 27.0757 10.9473C27.0962 10.9937 27.1069 11.044 27.1069 11.0948C27.1069 11.1456 27.0962 11.1958 27.0757 11.2423C27.0551 11.2888 27.0251 11.3304 26.9875 11.3646H27.0312ZM13.1771 23.25C13.1733 23.5389 13.0569 23.8149 12.8526 24.0192C12.6482 24.2235 12.3722 24.34 12.0833 24.3438H6.25C5.95992 24.3438 5.68172 24.2285 5.4766 24.0234C5.27148 23.8183 5.15625 23.5401 5.15625 23.25C5.15625 22.9599 5.27148 22.6817 5.4766 22.4766C5.68172 22.2715 5.95992 22.1562 6.25 22.1562H12.0833C12.3722 22.16 12.6482 22.2765 12.8526 22.4808C13.0569 22.6851 13.1733 22.9611 13.1771 23.25ZM13.1771 14.5C13.1733 14.7889 13.0569 15.0649 12.8526 15.2692C12.6482 15.4735 12.3722 15.59 12.0833 15.5938H6.25C5.95992 15.5938 5.68172 15.4785 5.4766 15.2734C5.27148 15.0683 5.15625 14.7901 5.15625 14.5C5.15625 14.2099 5.27148 13.9317 5.4766 13.7266C5.68172 13.5215 5.95992 13.4062 6.25 13.4062H12.0833C12.3722 13.41 12.6482 13.5265 12.8526 13.7308C13.0569 13.9351 13.1733 14.2111 13.1771 14.5ZM5.15625 10.125C5.16003 9.83609 5.27647 9.56008 5.48078 9.35578C5.68508 9.15147 5.96109 9.03503 6.25 9.03125H17.9167C18.2067 9.03125 18.4849 9.14648 18.6901 9.3516C18.8952 9.55672 19.0104 9.83492 19.0104 10.125C19.0104 10.4151 18.8952 10.6933 18.6901 10.8984C18.4849 11.1035 18.2067 11.2188 17.9167 11.2188H6.25C5.96109 11.215 5.68508 11.0985 5.48078 10.8942C5.27647 10.6899 5.16003 10.4139 5.15625 10.125ZM5.15625 5.75C5.16003 5.46109 5.27647 5.18508 5.48078 4.98078C5.68508 4.77647 5.96109 4.66003 6.25 4.65625H17.9167C18.2067 4.65625 18.4849 4.77148 18.6901 4.9766C18.8952 5.18172 19.0104 5.45992 19.0104 5.75C19.0104 6.04008 18.8952 6.31828 18.6901 6.5234C18.4849 6.72852 18.2067 6.84375 17.9167 6.84375H6.25C5.96109 6.83997 5.68508 6.72353 5.48078 6.51922C5.27647 6.31492 5.16003 6.03891 5.15625 5.75Z" fill="currentColor"/>
          </svg>
  
          <span class="text-26 weight-700">
            Step 1 - Após o Processo Enviado
          </span>
        </div>
      </q-card-section>

      <q-card-section
        class="row"
        style="padding: 60px 0;"
      >
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
              <template v-if="index === 0" #content>
                <div class="col-12 row text-primary text-center text-15">
                  <span class="col-12">Confirme se o pagamento foi efetivado?</span>

                  <div class="col-12 row justify-center q-gutter-md q-pt-sm">
                    <q-radio
                      v-model="radio"
                      label="Sim"
                      color="positive"
                      size="sm"
                      val="sim"
                    />

                    <q-radio
                      v-model="radio"
                      label="Não"
                      color="negative"
                      size="sm"
                      val="nao"
                    />
                  </div>
                </div>
              </template>

              <template v-else-if="index === 1" #content>
                <div class="col-12 row text-primary text-center text-15">
                  <span class="col-12">Faça upload da carta com o protocolo da imigração</span>

                  <div class="col-12 row justify-center q-pt-sm">
                    <svg class="cursor-pointer" width="60" height="60" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="87" height="87" rx="43.5" fill="#0E79B2"/><g clip-path="url(#clip0_238_2142)"><path d="M40.4998 33.9V49.5H46.4998V33.9L50.9998 38.4L55.4998 34.2L43.4998 22.5L31.7998 34.2L35.9998 38.4L40.4998 33.9Z" fill="white"/><path d="M31.5 55.5H55.5V61.5H31.5V55.5Z" fill="white"/><path d="M43.5 13.5C27 13.5 13.5 27 13.5 43.5C13.5 60 27 73.5 43.5 73.5C60 73.5 73.5 60 73.5 43.5C73.5 27 60 13.5 43.5 13.5ZM43.5 67.5C30.3 67.5 19.5 56.7 19.5 43.5C19.5 30.3 30.3 19.5 43.5 19.5C56.7 19.5 67.5 30.3 67.5 43.5C67.5 56.7 56.7 67.5 43.5 67.5Z" fill="white"/></g><defs><clipPath id="clip0_238_2142"><rect width="60" height="60" fill="white" transform="translate(13.5 13.5)"/></clipPath></defs>
                    </svg>
                  </div>
                </div>
              </template>

              <template v-else-if="index === 2" #content>
                <div class="col-12 row text-primary text-center text-15">
                  <span class="col-12">Você optou por abrir uma conta USCIS?</span>

                  <div class="col-12 row justify-center q-gutter-md q-pt-sm">
                    <q-radio
                      v-model="radio"
                      label="Sim"
                      color="positive"
                      size="sm"
                      val="sim"
                    />

                    <q-radio
                      v-model="radio"
                      label="Não"
                      color="negative"
                      size="sm"
                      val="nao"
                    />
                  </div>
                </div>
              </template>
            </CardsComponent>
          </div>
        </div>
        <div
          class="row items-center q-px-lg"
          :class="$q.screen.width > 1700 ? 'col-3' : $q.screen.width > 1300 ? 'col-4' : 'col-6'"
        >
          <div class="col-12 row justify-center q-gutter-md">
            <span class="text-primary text-center">Número de Protocolo</span>
  
            <div
              style="border: 1px solid #8C8C8C; border-radius: 30px;"
              class="col-12 row justify-center q-px-lg q-py-sm"
            >
              <span class="text-16 text-blue">4359761823564</span>
            </div>

            <span class="text-12 text-grey-2 text-center">Data Input: 05/05/2025</span>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Step 2 -->
    <q-card class="shadow_bottom q-mb-xl" style="width: 95%; border-radius: 30px;">
      <q-card-section class="col-12 row no-padding">
        <div class="row items-center q-py-sm q-px-lg q-gutter-md text-primary" style="background-color: #F3F3F3; border-bottom-right-radius: 15px;">
          <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.5333 9.29375L26.4771 7.20833C26.0763 6.81259 25.5566 6.55964 24.9979 6.48848C24.4392 6.41733 23.8726 6.53192 23.3854 6.81458V2.83333C23.3816 2.15766 23.1115 1.51075 22.6337 1.03297C22.1559 0.555187 21.509 0.285078 20.8333 0.28125H3.33333C2.65766 0.285078 2.01075 0.555187 1.53297 1.03297C1.05519 1.51075 0.785078 2.15766 0.78125 2.83333V26.1667C0.785078 26.8423 1.05519 27.4893 1.53297 27.967C2.01075 28.4448 2.65766 28.7149 3.33333 28.7188H20.8333C21.509 28.7149 22.1559 28.4448 22.6337 27.967C23.1115 27.4893 23.3816 26.8423 23.3854 26.1667V18.0583L28.5333 12.9104C29.0107 12.4296 29.2785 11.7796 29.2785 11.1021C29.2785 10.4246 29.0107 9.77455 28.5333 9.29375ZM21.1979 26.1667C21.1979 26.2634 21.1595 26.3561 21.0911 26.4245C21.0228 26.4928 20.93 26.5312 20.8333 26.5312H3.33333C3.23664 26.5312 3.14391 26.4928 3.07553 26.4245C3.00716 26.3561 2.96875 26.2634 2.96875 26.1667V2.83333C2.96875 2.73664 3.00716 2.64391 3.07553 2.57553C3.14391 2.50716 3.23664 2.46875 3.33333 2.46875H20.8333C20.93 2.46875 21.0228 2.50716 21.0911 2.57553C21.1595 2.64391 21.1979 2.73664 21.1979 2.83333V8.9L14.0083 16.0896C13.7709 16.3268 13.583 16.6088 13.4553 16.9192C13.3276 17.2296 13.2628 17.5623 13.2646 17.8979V19.9542C13.2646 20.631 13.5335 21.2802 14.0121 21.7588C14.4907 22.2374 15.1398 22.5063 15.8167 22.5063H17.9167C18.5753 22.5061 19.2081 22.2498 19.6812 21.7917L21.1396 20.3333L21.1979 26.1667ZM27.0312 11.3646L18.1792 20.2167C18.1462 20.2536 18.1057 20.2831 18.0604 20.3032C18.0152 20.3233 17.9662 20.3336 17.9167 20.3333H15.8167C15.72 20.3333 15.6272 20.2949 15.5589 20.2266C15.4905 20.1582 15.4521 20.0654 15.4521 19.9688V17.8979C15.45 17.8495 15.458 17.8011 15.4756 17.7559C15.4931 17.7108 15.5199 17.6697 15.5542 17.6354L24.4062 8.78333C24.4393 8.74642 24.4797 8.71694 24.525 8.69683C24.5702 8.67672 24.6192 8.66644 24.6687 8.66667C24.7661 8.66573 24.8601 8.70228 24.9312 8.76875L26.9875 10.825C27.0251 10.8592 27.0551 10.9008 27.0757 10.9473C27.0962 10.9937 27.1069 11.044 27.1069 11.0948C27.1069 11.1456 27.0962 11.1958 27.0757 11.2423C27.0551 11.2888 27.0251 11.3304 26.9875 11.3646H27.0312ZM13.1771 23.25C13.1733 23.5389 13.0569 23.8149 12.8526 24.0192C12.6482 24.2235 12.3722 24.34 12.0833 24.3438H6.25C5.95992 24.3438 5.68172 24.2285 5.4766 24.0234C5.27148 23.8183 5.15625 23.5401 5.15625 23.25C5.15625 22.9599 5.27148 22.6817 5.4766 22.4766C5.68172 22.2715 5.95992 22.1562 6.25 22.1562H12.0833C12.3722 22.16 12.6482 22.2765 12.8526 22.4808C13.0569 22.6851 13.1733 22.9611 13.1771 23.25ZM13.1771 14.5C13.1733 14.7889 13.0569 15.0649 12.8526 15.2692C12.6482 15.4735 12.3722 15.59 12.0833 15.5938H6.25C5.95992 15.5938 5.68172 15.4785 5.4766 15.2734C5.27148 15.0683 5.15625 14.7901 5.15625 14.5C5.15625 14.2099 5.27148 13.9317 5.4766 13.7266C5.68172 13.5215 5.95992 13.4062 6.25 13.4062H12.0833C12.3722 13.41 12.6482 13.5265 12.8526 13.7308C13.0569 13.9351 13.1733 14.2111 13.1771 14.5ZM5.15625 10.125C5.16003 9.83609 5.27647 9.56008 5.48078 9.35578C5.68508 9.15147 5.96109 9.03503 6.25 9.03125H17.9167C18.2067 9.03125 18.4849 9.14648 18.6901 9.3516C18.8952 9.55672 19.0104 9.83492 19.0104 10.125C19.0104 10.4151 18.8952 10.6933 18.6901 10.8984C18.4849 11.1035 18.2067 11.2188 17.9167 11.2188H6.25C5.96109 11.215 5.68508 11.0985 5.48078 10.8942C5.27647 10.6899 5.16003 10.4139 5.15625 10.125ZM5.15625 5.75C5.16003 5.46109 5.27647 5.18508 5.48078 4.98078C5.68508 4.77647 5.96109 4.66003 6.25 4.65625H17.9167C18.2067 4.65625 18.4849 4.77148 18.6901 4.9766C18.8952 5.18172 19.0104 5.45992 19.0104 5.75C19.0104 6.04008 18.8952 6.31828 18.6901 6.5234C18.4849 6.72852 18.2067 6.84375 17.9167 6.84375H6.25C5.96109 6.83997 5.68508 6.72353 5.48078 6.51922C5.27647 6.31492 5.16003 6.03891 5.15625 5.75Z" fill="currentColor"/>
          </svg>
  
          <span class="text-26 weight-700">
            Step 2 - Consultar Status
          </span>
        </div>
      </q-card-section>

      <q-card-section
        class="row"
        style="padding: 60px 0;"
      >
        <div
          v-for="(item, index) in itemsTopic2"
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
              <template v-if="index === 0" #content>
                <div class="col-12 row text-primary text-center text-15">
                  <span class="col-12">Iniciamos a consulta diária no site da imigração</span>
                </div>
              </template>

              <template v-else-if="index === 1" #content>
                <div class="col-12 row text-primary text-center text-15">
                  <span class="col-12">Estamos verificando o seu status</span>
                </div>
              </template>

              <template v-else-if="index === 2" #content>
                <div class="col-12 row text-primary text-center text-15">
                  <span class="col-12">Confira ao lado a sua resposta do seu status hoje:</span>
                </div>
              </template>
            </CardsComponent>
          </div>
        </div>
        <div
          class="row items-center q-px-lg"
          :class="$q.screen.width > 1700 ? 'col-3' : $q.screen.width > 1300 ? 'col-4' : 'col-6'"
        >
          <div
            :class="{ 'col-6 q-mt-md' : $q.screen.width < 1170 }"
            :style="{
              flex: $q.screen.width >= 1170 ? '1 1 0%' : undefined,
              minWidth: $q.screen.width >= 1170 ? 'auto' : undefined
            }"
          >
            <div
              class="bg-white shadow q-pa-md"
              style="border-radius: 20px; min-height: 130px; flex: 1 1 0%;  min-width: auto;"
            >
              <span class="text-15 text-grey-2">Resposta da Imigração</span>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { ref } from 'vue'
import CardsComponent from '../CardsComponent.vue'
export default {
  components: {
    CardsComponent
  },
  setup () {
    return {
      radio: ref('sim')
    }
  },
  data () {
    return {
      itemsTopic1: [
        {
          title: 'Pagamento',
          colors: {
            background: 'blue',
            text: 'white'
          }
        },
        {
          title: 'Construir',
          colors: {
            background: 'grey',
            text: 'black'
          }
        },
        {
          title: 'Conta USCIS',
          colors: {
            background: 'grey',
            text: 'black'
          }
        }
      ],
      itemsTopic2: [
        {
          title: 'Consulta',
          colors: {
            background: 'blue',
            text: 'white'
          }
        },
        {
          title: 'Verificação',
          colors: {
            background: 'grey',
            text: 'black'
          }
        },
        {
          title: 'Resposta',
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
.shadow {
  box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.3);
}
</style>
