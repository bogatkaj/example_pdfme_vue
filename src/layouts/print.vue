<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view :style="{ 'min-height': 100 + 'px' }"/>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  setup() {
    
  },
};
</script>
