<template>
  <div>      
    <BookList @view-detail="viewBookDetail" />
    
  </div>
</template>

<script>
import BookList from '@/components/BookList.vue';


export default {
  components: {
    BookList,
    
  },
  methods: {
    viewBookDetail(id) {
      this.$router.push(`/book/${id}`);
    },      
  },
};
</script>
  