<template>
  <div>
    <div class="list-group">
      <a
        href=""
        class="list-group-item list-group-item-action"
        v-for="(dataset, index) in datasetHits"
        v-bind:class="{ active: selected === index }"
        v-bind:key="dataset.uri"
        @click.prevent="updateSelectedDataset(index)"
      >
        <div class="d-flex flex-row justify-content-between">
          <h6 class="p-0">{{ dataset.name }}</h6>
          <small class="p-0">{{
            moment(dataset.created_at).format("YYYY-MM-DD")
          }}</small>
        </div>

        <div class="d-flex flex-row justify-content-between">
          <small class="p-0">{{ dataset.creator_username }}</small>
          <small class="p-0">{{ dataset.uuid }}</small>
        </div>

        <div class="d-flex flex-row">
          <div class="p-0">
            <template v-for="(tag, index) in dataset.tags">
              <span class="badge badge-pill badge-info" v-bind:key="index">{{
                tag
              }}</span
              >{{ "&nbsp;" }}
            </template>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
var moment = require("moment");
export default {
  name: "DatasetTable",
  props: {
    datasetHits: Array
  },
  data: function() {
    return {
      moment: moment
    };
  },
  computed: {
    selected: function() {
      return this.$store.state.current_dataset_index;
    }
  },
  methods: {
    updateSelectedDataset: function(index) {
      this.$store.commit("update_current_dataset_index", index);
      this.$store.commit("update_current_dataset", this.datasetHits[index]);
      this.$emit("update-dataset");
    }
  }
};
</script>

<style></style>
