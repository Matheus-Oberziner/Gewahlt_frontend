<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="background-color: #161616;">
      <q-toolbar style="min-height: 105px; padding: 0 4%;">
        <q-img
          src="/gewahlt-logos-03-white.png"
          class="logo-img"
          :style="$q.screen.gt.sm ? 'max-width: 200px;' : 'max-width: 200px;'"
        />

        <q-space />

        <q-btn-dropdown
          no-caps
          unelevated
          content-class="user-dropdown-menu"
          style="height: 61px; background-color: #26262680; border-radius: 9.2px;"
        >
          <template #label>
            <div class="row items-center q-gutter-md">
              <q-avatar style="background-color: #FFA78D; border-radius: 7.5px;">
                <q-img src="/avatar-teste.png"/>
              </q-avatar>

              <div class="text-center text-20 weight-500">
                Olá, Matheus
              </div>
            </div>
          </template>

          <q-list class="q-pa-xs">
            <q-item
              v-for="(item, index) in items"
              :key="index"
              clickable
              v-close-popup
              style="border-radius: 10px;"
              @click="item.action()"
            >
              <q-item-section>
                <q-item-label class="text-15 weight-500 opacity-55">{{ item.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-toolbar style="min-height: 48px; background-color: #161616;" />
    </q-footer>

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import PaymentsDialog from 'src/components/PaymentsDialog.vue';
export default {
  data () {
    return {
      items: [
        { label: 'Editar perfil' },
        { label: 'Pagamentos', action: () => this.openPaymentsDialog() },
        { label: 'Ajuda' },
        { label: 'Sair', action: () => this.$router.push({ path: '/login' }) }
      ]
    }
  },
  methods: {
    openPaymentsDialog () {
      this.$q.dialog({
        component: PaymentsDialog,
        parent: this
      })
    }
  }
}
</script>
<style>
.user-dropdown-menu {
  margin-top: 8px !important;
  box-shadow: none !important;
  border: 0.5px solid rgba(30, 30, 30, 0.4) !important;
  border-radius: 9.2px !important;
  overflow: hidden !important;
}
</style>
