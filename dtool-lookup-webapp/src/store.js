import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    free_text: null,
    creator_username: null,
    base_uri: null,
    current_dataset_index: 0,
    current_dataset: null,
    current_dataset_manifest: null,
    current_dataset_readme: null,
    current_dataset_annotations: null
  },
  mutations: {
    update_free_text(state, free_text) {
      state.free_text = free_text;
    },
    update_creator_username(state, creator_username) {
      state.creator_username = creator_username;
    },
    update_base_uri(state, base_uri) {
      state.base_uri = base_uri;
    },
    update_current_dataset_index(state, index) {
      console.log("Store: update current dataset index");
      state.current_dataset_index = index;
    },
    update_current_dataset(state, dataset) {
      console.log("Store: update current dataset");
      state.current_dataset = dataset;
    },
    update_current_dataset_manifest(state, manifest) {
      console.log("Store: update current dataset manifest");
      state.current_dataset_manifest = manifest;
    },
    update_current_dataset_readme(state, readme) {
      console.log("Store: update current dataset readme");
      state.current_dataset_readme = readme;
    },
    update_current_dataset_annotations(state, annotations) {
      console.log("Store: update current dataset annotations");
      state.current_dataset_annotations = annotations;
    },
    clear_all(state) {
      state.free_text = null;
      state.creator_username = null;
      state.base_uri = null;
    }
  },
  actions: {}
});
