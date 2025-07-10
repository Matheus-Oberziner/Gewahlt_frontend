<template>
  <!-- Card Type Form -->
  <q-card
    v-if="type === 'form'"
    style="border-radius: 30px;"
    class="shadow_bottom"
  >
    <q-card-section class="no-padding">
      <div class="col-12 row">
        <div class="col-9 row justify-end items-center q-pr-md">
          <span class="text-15 text-primary">STATUS</span>
        </div>

        <div class="col-3 row justify-center items-center q-py-sm q-px-md" style="background-color: #F3F3F3; border-bottom-left-radius: 10px;">
          <svg class="q-mr-md text-warning" width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5108 0.0109863C12.5074 0.0109863 12.503 0.0115381 12.4997 0.0115381C12.4959 0.0115381 12.4926 0.0109863 12.4887 0.0109863C5.59191 0.0109863 0 5.60234 0 12.5002C0 19.397 5.59191 24.9889 12.4887 24.9889C12.4926 24.9889 12.4959 24.9889 12.4997 24.9889C12.503 24.9889 12.5074 24.9889 12.5108 24.9889C19.4075 24.9889 24.9994 19.397 24.9994 12.5002C25 5.60234 19.4081 0.0109863 12.5108 0.0109863ZM12.5108 21.4136C12.5074 21.4136 12.503 21.4131 12.4997 21.4131C12.4959 21.4131 12.4926 21.4136 12.4887 21.4136C11.3598 21.4136 10.4445 20.4988 10.4445 19.3694C10.4445 18.2411 11.3598 17.3263 12.4887 17.3263C12.4926 17.3263 12.4959 17.3263 12.4997 17.3263C12.503 17.3263 12.5074 17.3263 12.5108 17.3263C13.6391 17.3263 14.5555 18.2411 14.5555 19.3694C14.5555 20.4983 13.6407 21.4136 12.5108 21.4136ZM15.4422 5.83628C15.3086 7.87607 14.3762 13.9425 14.3762 13.9425C14.3762 14.9654 13.5381 15.7941 12.5152 15.7941C12.5097 15.7941 12.5041 15.7941 12.4992 15.7941C12.4942 15.7941 12.4881 15.7941 12.4832 15.7941C11.4608 15.7941 10.6227 14.9643 10.6227 13.9425C10.6227 13.9425 9.6908 7.87607 9.55728 5.83628C9.49107 4.81501 10.2734 2.91867 12.4837 2.91867C12.4892 2.91867 12.4948 2.91922 12.4997 2.91922C12.5047 2.91922 12.5102 2.91867 12.5157 2.91867C14.7255 2.91867 15.5089 4.81501 15.4422 5.83628Z" fill="currentColor"/>
          </svg>

          <svg class="text-grey" width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0002 25.7999C20.0694 25.7999 25.8002 20.0691 25.8002 13C25.8002 5.9307 20.0694 0.199951 13.0002 0.199951C5.93095 0.199951 0.200195 5.9307 0.200195 13C0.200195 20.0691 5.93095 25.7999 13.0002 25.7999ZM19.0253 11.345C19.5251 10.8452 19.5251 10.0347 19.0253 9.53485C18.5254 9.03498 17.7149 9.03498 17.2151 9.53485L11.7202 15.0298L8.7853 12.0949C8.28542 11.595 7.47497 11.595 6.97509 12.0949C6.47523 12.5947 6.47523 13.4052 6.97509 13.905L10.8151 17.745C11.3149 18.2449 12.1254 18.2449 12.6253 17.745L19.0253 11.345Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div class="col-12 row justify-center q-py-lg">
        <div class="bg-grey-1" style="width: 80%; height: 160px; border-radius: 15px;">
          <q-icon
            name="info_outline"
            size="22px"
            class="text-grey-2"
            style="position: absolute; top: 70px; right: 50px;"
          />
          
          <div class="row justify-center items-center" style="height: 100%; width: 100%;">
            <svg class="text-primary q-mr-md" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6">
                <path d="M26.1682 7.28859L19.1372 0.25752C18.9704 0.0907031 18.7426 0 18.5156 0H6.21094C4.75705 0 3.57422 1.18283 3.57422 2.63672V27.3633C3.57422 28.8172 4.75705 30 6.21094 30H23.7891C25.2429 30 26.4258 28.8172 26.4258 27.3633V7.91016C26.4258 7.66898 26.3237 7.44393 26.1682 7.28859ZM19.3945 3.00076L23.425 7.03125H20.2734C19.7888 7.03125 19.3945 6.63697 19.3945 6.15234V3.00076ZM23.7891 28.2422H6.21094C5.72631 28.2422 5.33203 27.8479 5.33203 27.3633V2.63672C5.33203 2.15209 5.72631 1.75781 6.21094 1.75781H17.6367V6.15234C17.6367 7.60623 18.8195 8.78906 20.2734 8.78906H24.668V27.3633C24.668 27.8479 24.2737 28.2422 23.7891 28.2422Z" fill="currentColor"/><path d="M20.2734 14.1797H11.4844C10.999 14.1797 10.6055 14.5732 10.6055 15.0586C10.6055 15.544 10.999 15.9375 11.4844 15.9375H20.2734C20.7588 15.9375 21.1523 15.544 21.1523 15.0586C21.1523 14.5732 20.7588 14.1797 20.2734 14.1797Z" fill="currentColor"/><path d="M20.2734 17.6953H11.4844C10.999 17.6953 10.6055 18.0888 10.6055 18.5742C10.6055 19.0596 10.999 19.4531 11.4844 19.4531H20.2734C20.7588 19.4531 21.1523 19.0596 21.1523 18.5742C21.1523 18.0888 20.7588 17.6953 20.2734 17.6953Z" fill="currentColor"/><path d="M20.2734 21.2109H11.4844C10.999 21.2109 10.6055 21.6045 10.6055 22.0898C10.6055 22.5752 10.999 22.9688 11.4844 22.9688H20.2734C20.7588 22.9688 21.1523 22.5752 21.1523 22.0898C21.1523 21.6045 20.7588 21.2109 20.2734 21.2109Z" fill="currentColor"/><path d="M7.96854 15.9371C8.45383 15.9371 8.84723 15.5437 8.84723 15.0584C8.84723 14.5731 8.45383 14.1797 7.96854 14.1797C7.48325 14.1797 7.08984 14.5731 7.08984 15.0584C7.08984 15.5437 7.48325 15.9371 7.96854 15.9371Z" fill="currentColor"/><path d="M7.96854 19.4527C8.45383 19.4527 8.84723 19.0593 8.84723 18.574C8.84723 18.0887 8.45383 17.6953 7.96854 17.6953C7.48325 17.6953 7.08984 18.0887 7.08984 18.574C7.08984 19.0593 7.48325 19.4527 7.96854 19.4527Z" fill="currentColor"/><path d="M7.96854 22.9683C8.45383 22.9683 8.84723 22.5749 8.84723 22.0896C8.84723 21.6043 8.45383 21.2109 7.96854 21.2109C7.48325 21.2109 7.08984 21.6043 7.08984 22.0896C7.08984 22.5749 7.48325 22.9683 7.96854 22.9683Z" fill="currentColor"/>
              </g>
            </svg>

            <span class="text-18 weight-700 text-primary" style="line-height: 1.4;">Preencher <br> Formulário 01</span>
          </div>

          <svg style="position: absolute; top: 170px; right: 15px;" width="80" height="80" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="87" height="87" rx="43.5" fill="#0E79B2"/>
            <g clip-path="url(#clip0_238_2691)">
              <path d="M43.5 13.5C26.9575 13.5 13.5 26.9575 13.5 43.5C13.5 60.0425 26.9575 73.5 43.5 73.5C60.0425 73.5 73.5 60.0425 73.5 43.5C73.5 26.9575 60.0425 13.5 43.5 13.5ZM43.5 68.5C29.715 68.5 18.5 57.285 18.5 43.5C18.5 29.715 29.715 18.5 43.5 18.5C57.285 18.5 68.5 29.715 68.5 43.5C68.5 57.285 57.285 68.5 43.5 68.5ZM46.9475 29.4475L28.5 47.895V58.5H39.105L57.5525 40.0525C60.4775 37.1275 60.4775 32.3725 57.5525 29.4475C54.6275 26.5225 49.8725 26.5225 46.9475 29.4475ZM37.035 53.5H33.5V49.965L44.34 39.125L47.875 42.66L37.035 53.5ZM54.0175 36.5175L51.41 39.125L47.875 35.59L50.4825 32.9825C51.46 32.005 53.04 32.005 54.0175 32.9825C54.995 33.96 54.9925 35.5425 54.0175 36.5175Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_238_2691">
                <rect width="60" height="60" fill="white" transform="translate(13.5 13.5)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div class="row q-pb-md">
        <div class="row" style="margin-left: 10%;">
          <div style="width: 4px; border-radius: 30px; background-color: #D5D5D5;" />
        </div>

        <div class="q-pl-md text-15 text-primary">
          <div class="col-12">
            <span>Data Solicitada: </span>
            <span class="opacity-60">05/05/2025</span>
          </div>
  
          <div class="col-12 text-primary">
            <span>Prazo Final de Entrega: </span>
            <span class="weight-700 text-accent">05/05/2025</span>
          </div>
  
          <div class="col-12">
            <span>Data da Entrega: </span>
            <span class="opacity-60">05/05/2025</span>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>

  <!-- Card Type Documents -->
  <q-card
    v-if="type === 'document'"
    style="border-radius: 30px;"
    class="shadow_bottom"
  >
    <q-card-section class="row q-pa-sm">
      <div class="col-12 text-center q-py-md" style="border: 1px solid #324984; border-radius: 30px 30px 0 0;">
        <span class="text-20 weight-700 text-primary">Passaporte Beneficiário</span>
      </div>
    </q-card-section>

    <q-card-section class="row justify-between items-center q-pt-sm q-px-lg">
      <svg width="80" height="80" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="87" height="87" rx="43.5" fill="#0E79B2"/>
        <g clip-path="url(#clip0_238_2142)">
          <path d="M40.4998 33.9V49.5H46.4998V33.9L50.9998 38.4L55.4998 34.2L43.4998 22.5L31.7998 34.2L35.9998 38.4L40.4998 33.9Z" fill="white"/>
          <path d="M31.5 55.5H55.5V61.5H31.5V55.5Z" fill="white"/>
          <path d="M43.5 13.5C27 13.5 13.5 27 13.5 43.5C13.5 60 27 73.5 43.5 73.5C60 73.5 73.5 60 73.5 43.5C73.5 27 60 13.5 43.5 13.5ZM43.5 67.5C30.3 67.5 19.5 56.7 19.5 43.5C19.5 30.3 30.3 19.5 43.5 19.5C56.7 19.5 67.5 30.3 67.5 43.5C67.5 56.7 56.7 67.5 43.5 67.5Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_238_2142">
            <rect width="60" height="60" fill="white" transform="translate(13.5 13.5)"/>
          </clipPath>
        </defs>
      </svg>

      <div class="row items-center">
        <div class="arrow" />

        <div class="q-pa-md bg-grey-1 text-primary" style="border-radius: 15px;">
          <span>Data Solicitada:</span>
          <br>
          <span class="opacity-60">05/05/2025</span>
          <br>
          <span>Prazo Final de Entrega:</span>
          <br>
          <span class="weight-700 text-accent">05/05/2025</span>
          <br>
          <span>Data da Entrega:</span>
          <br>
          <span class="opacity-60">05/05/2025</span>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="row q-col-gutter-xs q-px-lg">
      <div class="col-12 text-primary">
        <span>Prazo de Resposta: </span>
        <span class="opacity-60">05/05/2025</span>
      </div>

      <div class="col-12 row items-center">
        <span class="text-primary q-pr-sm">Status:</span>

        <div class="row q-gutter-xs">
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

      <div class="col-12 text-primary">
        <span>Data de Retorno: </span>
        <span class="opacity-60">05/05/2025</span>
      </div>

      <div class="col-12 row justify-end">
        <svg class="cursor-pointer" width="50" height="50" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="8" width="48" height="48" rx="24" fill="#0E79B2"/><rect x="1" y="8" width="48" height="48" rx="24" stroke="white" stroke-width="2"/>
          <g clip-path="url(#clip0_340_9671)"><mask id="mask0_340_9671" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="11" y="18" width="28" height="28"><path d="M11.5 18.5H38.5V45.5H11.5V18.5Z" fill="white"/></mask><g mask="url(#mask0_340_9671)"><path d="M31.75 26.375C32.3713 26.375 32.875 25.8713 32.875 25.25C32.875 24.6287 32.3713 24.125 31.75 24.125H18.25C17.6287 24.125 17.125 24.6287 17.125 25.25C17.125 25.8713 17.6287 26.375 18.25 26.375H31.75Z" fill="white"/><path d="M31.75 29.75C32.3713 29.75 32.875 29.2463 32.875 28.625C32.875 28.0037 32.3713 27.5 31.75 27.5H18.25C17.6287 27.5 17.125 28.0037 17.125 28.625C17.125 29.2463 17.6287 29.75 18.25 29.75H31.75Z" fill="white"/><path d="M23.875 32C23.875 32.6213 23.3713 33.125 22.75 33.125H18.25C17.6287 33.125 17.125 32.6213 17.125 32C17.125 31.3787 17.6287 30.875 18.25 30.875H22.75C23.3713 30.875 23.875 31.3787 23.875 32Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.875 18.5C13.011 18.5 11.5 20.011 11.5 21.875V35.375C11.5 37.239 13.011 38.75 14.875 38.75H16V44.375C16 44.8011 16.2408 45.1906 16.6219 45.3812C17.003 45.5718 17.4591 45.5307 17.8 45.275L26.5 38.75H35.125C36.989 38.75 38.5 37.239 38.5 35.375V21.875C38.5 20.011 36.989 18.5 35.125 18.5H14.875ZM13.75 21.875C13.75 21.2537 14.2537 20.75 14.875 20.75H35.125C35.7463 20.75 36.25 21.2537 36.25 21.875V35.375C36.25 35.9963 35.7463 36.5 35.125 36.5H26.125C25.8815 36.5 25.6447 36.579 25.45 36.725L18.25 42.125V37.625C18.25 37.0037 17.7463 36.5 17.125 36.5H14.875C14.2537 36.5 13.75 35.9963 13.75 35.375V21.875Z" fill="white"/></g></g>
          <circle cx="42.3301" cy="13.3301" r="12" fill="white" stroke="#FF8F10" stroke-width="2.66016"/>
          <path d="M43.3114 8.57617L43.1289 15.2897H41.4154L41.2281 8.57617H43.3114ZM42.2721 18.286C41.9631 18.286 41.6978 18.1767 41.4762 17.9582C41.2546 17.7366 41.1454 17.4714 41.1485 17.1624C41.1454 16.8565 41.2546 16.5943 41.4762 16.3758C41.6978 16.1574 41.9631 16.0481 42.2721 16.0481C42.5686 16.0481 42.8292 16.1574 43.0539 16.3758C43.2787 16.5943 43.3926 16.8565 43.3957 17.1624C43.3926 17.3684 43.338 17.5572 43.2318 17.7288C43.1289 17.8974 42.9931 18.0332 42.8245 18.1362C42.656 18.236 42.4719 18.286 42.2721 18.286Z" fill="#FF8F10"/>
          <defs><clipPath id="clip0_340_9671"><rect width="27" height="27" fill="white" transform="translate(11.5 18.5)"/></clipPath></defs>
        </svg>
      </div>
    </q-card-section>
  </q-card>

  <!-- Card Type With Comment -->
  <div v-if="type === 'comment'" class="col-12 row">
    <div class="col-12 row q-pl-xl q-pb-md text-primary items-center">
      <svg class="q-mr-md" width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.1683 7.28859L19.1372 0.25752C18.9731 0.0933398 18.7491 0 18.5156 0H6.21094C4.75705 0 3.57422 1.18283 3.57422 2.63672V27.3633C3.57422 28.8172 4.75705 30 6.21094 30H23.7891C25.2429 30 26.4258 28.8172 26.4258 27.3633V7.91016C26.4258 7.67051 26.3252 7.44545 26.1683 7.28859ZM19.3945 3.00076L23.425 7.03125H20.2734C19.7888 7.03125 19.3945 6.63697 19.3945 6.15234V3.00076ZM23.7891 28.2422H6.21094C5.72631 28.2422 5.33203 27.8479 5.33203 27.3633V2.63672C5.33203 2.15209 5.72631 1.75781 6.21094 1.75781H17.6367V6.15234C17.6367 7.60623 18.8196 8.78906 20.2734 8.78906H24.668V27.3633C24.668 27.8479 24.2737 28.2422 23.7891 28.2422Z" fill="currentColor"/><path d="M20.2734 12.4219H9.72656C9.24117 12.4219 8.84766 12.8154 8.84766 13.3008C8.84766 13.7862 9.24117 14.1797 9.72656 14.1797H20.2734C20.7588 14.1797 21.1523 13.7862 21.1523 13.3008C21.1523 12.8154 20.7588 12.4219 20.2734 12.4219Z" fill="currentColor"/><path d="M20.2734 15.9375H9.72656C9.24117 15.9375 8.84766 16.331 8.84766 16.8164C8.84766 17.3018 9.24117 17.6953 9.72656 17.6953H20.2734C20.7588 17.6953 21.1523 17.3018 21.1523 16.8164C21.1523 16.331 20.7588 15.9375 20.2734 15.9375Z" fill="currentColor"/><path d="M20.2734 19.4531H9.72656C9.24117 19.4531 8.84766 19.8466 8.84766 20.332C8.84766 20.8174 9.24117 21.2109 9.72656 21.2109H20.2734C20.7588 21.2109 21.1523 20.8174 21.1523 20.332C21.1523 19.8466 20.7588 19.4531 20.2734 19.4531Z" fill="currentColor"/><path d="M16.7578 22.9688H9.72656C9.24117 22.9688 8.84766 23.3623 8.84766 23.8477C8.84766 24.333 9.24117 24.7266 9.72656 24.7266H16.7578C17.2432 24.7266 17.6367 24.333 17.6367 23.8477C17.6367 23.3623 17.2432 22.9688 16.7578 22.9688Z" fill="currentColor"/>
      </svg>

      <span class="text-18 weight-700">Carta de Recomendação</span>
    </div>

    <div class="row items-center" style="width: 100%;">
      <div class="row bg-white shadow_bottom" style="margin-left: 45px; border-radius: 20px;">
        <div class="row items-center" style="position: relative; left: -35px;">
          <svg width="80" height="80" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="87" height="87" rx="43.5" fill="#0E79B2"/>
            <g clip-path="url(#clip0_238_2142)">
              <path d="M40.4998 33.9V49.5H46.4998V33.9L50.9998 38.4L55.4998 34.2L43.4998 22.5L31.7998 34.2L35.9998 38.4L40.4998 33.9Z" fill="white"/>
              <path d="M31.5 55.5H55.5V61.5H31.5V55.5Z" fill="white"/>
              <path d="M43.5 13.5C27 13.5 13.5 27 13.5 43.5C13.5 60 27 73.5 43.5 73.5C60 73.5 73.5 60 73.5 43.5C73.5 27 60 13.5 43.5 13.5ZM43.5 67.5C30.3 67.5 19.5 56.7 19.5 43.5C19.5 30.3 30.3 19.5 43.5 19.5C56.7 19.5 67.5 30.3 67.5 43.5C67.5 56.7 56.7 67.5 43.5 67.5Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_238_2142">
                <rect width="60" height="60" fill="white" transform="translate(13.5 13.5)"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        <div class="text-15 text-primary q-py-md q-pr-xl">
          <div class="col-12">
            <span>Data Solicitada: </span>
            <span class="opacity-60">05/05/2025</span>
          </div>

          <div class="col-12 text-primary">
            <span>Prazo Final de Entrega: </span>
            <span class="weight-700 text-accent">05/05/2025</span>
          </div>

          <div class="col-12">
            <span>Data da Entrega: </span>
            <span class="opacity-60">05/05/2025</span>
          </div>
        </div>
      </div>

      <div class="arrow_2 q-pr-md" />

      <div class="row bg-white shadow_bottom items-center" style="border-radius: 20px;">
        <div class="arrow_3" />

        <div class="text-15 text-primary q-pa-md">
          <div class="col-12 text-primary">
            <span>Prazo de Resposta: </span>
            <span class="opacity-60">05/05/2025</span>
          </div>

          <div class="col-12 row items-center">
            <span class="text-primary q-pr-sm">Status:</span>

            <div class="row q-gutter-xs">
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

          <div class="col-12 text-primary">
            <span>Data de Retorno: </span>
            <span class="opacity-60">05/05/2025</span>
          </div>
        </div>

        <div class="arrow_4" />
      </div>

      <div
        class="row items-center"
        :class="{ 'col-6 q-mt-md' : $q.screen.width < 1170 }"
        :style="{
          flex: $q.screen.width >= 1170 ? '1 1 0%' : undefined,
          minWidth: $q.screen.width >= 1170 ? 'auto' : undefined
        }"
      >
        <div class="arrow_5 q-pl-md" />
  
        <div
          class="bg-white shadow_bottom q-pa-sm"
          style="border-radius: 20px; height: 99.5px; flex: 1 1 0%;  min-width: auto;"
        >
          <q-input
            filled
            label="Comentário do Especialista"
            type="textarea"
            autogrow="false"
            label-color="primary"
            style="width: 100%;"
            color="primary"
            input-style="resize: none; height: 55px;"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mdiInformationSymbol } from '@quasar/extras/mdi-v7'
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  setup () {
    return {
      mdiInformationSymbol
    }
  }
}
</script>
<style scoped>
.arrow {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-right: 12px solid #F4F4F4;
  border-bottom: 8px solid transparent;
}
.arrow_2 {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 12px solid #FFFFFF;
  border-bottom: 8px solid transparent;
}
.arrow_3 {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 12px solid #F4F4F4;
  border-bottom: 8px solid transparent;
}
.arrow_4 {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-right: 12px solid #F4F4F4;
  border-bottom: 8px solid transparent;
}
.arrow_5 {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-right: 12px solid #FFFFFF;
  border-bottom: 8px solid transparent;
}

.shadow_bottom {
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.3);
}
</style>
