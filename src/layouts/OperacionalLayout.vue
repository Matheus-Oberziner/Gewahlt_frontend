<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Sidebar -->
    <Sidebar />

    <q-header style="background-color: #0C3159;">
      <q-toolbar style="min-height: 80px; padding: 0 6.5%;">
        <q-img
          src="/gewahlt-logos-03-white.png"
          class="logo-img"
          :style="!$q.screen.lt.sm ? 'max-width: 160px;' : 'max-width: 200px;'"
        />

        <q-space />

        <q-btn-dropdown
          no-caps
          flat
          unelevated
          content-class="user-dropdown-menu"
          style="height: 50px; border-radius: 9.2px; color: #FFFFFF;"
        >
          <template #label>
            <div class="row items-center q-gutter-md">
              <q-avatar size="32px" style="background-color: #FFFFFF; border-radius: 50%;">
                <q-icon
                  name="person"
                  style="color: #0C3159;"
                />
              </q-avatar>

              <div class="text-center text-20 weight-400 q-ml-md">
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
      <q-toolbar style="min-height: 35px; background-color: #0C3159;">
        <q-toolbar-title class="text-center text-14 weight-300">Desenvolvido por FatorX Tech - Todos os Direitos de Uso Reservados</q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container class="row justify-end" style="background-color: #F3F3F3;">
      <q-page
        :style="$q.screen.width > 1600 ? 'padding: 40px 40px 40px 0;' : 'padding: 40px 10px 40px 15px;' "
        style="max-width: 80%;"
      >
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import PaymentsDialog from 'src/components/PaymentsDialog.vue'
import Sidebar from 'src/components/SidebarComp.vue'
export default {
  components: {
    Sidebar
  },
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
<style scoped>
.user-dropdown-menu {
  margin-top: 8px !important;
  box-shadow: none !important;
  border: 0.5px solid rgba(30, 30, 30, 0.4) !important;
  border-radius: 9.2px !important;
  overflow: hidden !important;
}
</style>
