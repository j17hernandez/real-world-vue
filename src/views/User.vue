<template>
  <h1>This is {{ username }}'s Page</h1>
</template>
<script>
export default {
  name: 'UserPage',
  props: {
    username: {
      type: String,
      default: '',
    },
  },
};
</script>
