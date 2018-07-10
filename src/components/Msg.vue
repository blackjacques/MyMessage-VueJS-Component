<template>
  <div class="msg">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MyMessage',
  data () {
    return {
      msg: 'Welcome Rob!'
    }
  }
}
</script>
