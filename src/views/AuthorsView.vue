<template>
  <div>
    <AuthorList @view-detail="viewAuthorDetail" />
  </div>
</template>

<script>

import AuthorList from '@/components/AuthorList.vue';

export default {
  components: {     
    AuthorList
  },
  methods: {
    viewAuthorDetail(id) {
      this.$router.push(`/author/${id}`);
    },      
  },
};
</script>