<template>
  <div class="home">
    <div class="title">{{ $t('menu.home') }}</div>
    <div class="title">{{ $t('content.main') }}</div>
    <DatePicker type="date" placeholder="Select date"></DatePicker>
    <Page :total="40" size="small" show-total show-sizer show-elevator />
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {}
}
</script>
