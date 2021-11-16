<template>
  <div id="home">
    <div id="tabs">
      <ul v-for="(item, index) in items" :key="index" @click="toggleTabs">
        <li :class="{ active: item.isActive }">
          {{ item.text }}
        </li>
      </ul>
    </div>
    <div id="polls" v-if="items[0].isActive">
      <div>
        <PollList />
      </div>
    </div>
    <div id="add-poll" v-else>
      <CreatePollForm @toggleTabs="toggleTabs" @updatePolls="loadPolls" />
    </div>
  </div>
</template>

<script>
import PollList from "../components/PollList.vue";
import CreatePollForm from "../components/CreatePollForm.vue";
import getPolls from "../composables/getPolls.js";
import handleTabs from "../composables/handleTabs.js";
export default {
  name: "Home",
  components: {
    CreatePollForm,
    PollList,
  },
  setup() {
    const { polls, error, loadPolls } = getPolls();
    const { items, toggleTabs } = handleTabs();

    loadPolls();
    return { polls, error, items, toggleTabs, loadPolls };
  },
};
</script>

<style>
#home {
  max-width: 960px;
  margin: 40px auto;
}

#tabs {
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  margin: 0 16px;
  font-size: 18px;
  color: #555;
  cursor: pointer;
}

.active {
  color: #d91b42;
  border-bottom: 2px solid #d91b42;
  padding-bottom: 8px;
}
</style>
