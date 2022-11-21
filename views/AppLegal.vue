<template>
  <div class="content">
    <h2 class="content__heading">Legal Stuf</h2>
    <hr class="content__separator" />
    <input type="text" v-model="search">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      
      <tbody>
        <tr
          v-for="(item, i) in filteredItems"
          :key="i">
          <td>{{ item.name }}</td>
          <td>{{ item.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AppLegal"
};
</script>

<style scoped>
.content {
  padding: 7rem 2rem;
}
.content__heading {
  text-align: center;
  margin-bottom: 1rem;
}
.content__separator {
  border-color: gray;
  margin-bottom: 1rem;
}
</style>