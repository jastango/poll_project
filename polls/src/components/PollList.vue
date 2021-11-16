<template>
  <div id="polls">
    <div class="container">
      <div class="poll-list">
        <div v-for="(poll, index) in polls" :key="index">
          <div class="card">
            <h3 class="question">{{ poll.question }}</h3>
            <p>Total Votes: {{ poll.votesA + poll.votesB }}</p>
            <div
              class="answer"
              @click="(poll.votesA = poll.votesA + 1), updateVotes(poll)"
            >
              <div
                class="percent percent-a"
                :style="{ width: updatePercent(poll).percentA }"
              ></div>
              <span>{{ poll.answerA }} ({{ poll.votesA }})</span>
            </div>
            <div
              class="answer"
              @click="(poll.votesB = poll.votesB + 1), updateVotes(poll)"
            >
              <div
                class="percent percent-b"
                :style="{ width: updatePercent(poll).percentB }"
              ></div>
              <span>{{ poll.answerB }} ({{ poll.votesB }})</span>
            </div>
            <div class="center">
              <button @click.prevent="deletePoll(poll), updateLocal(poll._id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import updatePercent from "../composables/updatePercent";
import updateVotes from "../composables/updateVotes";
import getPolls from "../composables/getPolls.js";
import deletePoll from "../composables/deletePoll";
export default {
  setup() {
    const { polls, error, loadPolls } = getPolls();
    loadPolls();

    function updateLocal(id) {
      polls.value = polls.value.filter((poll) => {
        return poll._id != id;
      });
    }

    return {
      polls,
      error,
      loadPolls,
      updateVotes,
      updatePercent,
      deletePoll,
      updateLocal,
    };
  },
};
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0.75rem;
}

.poll-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
}

h3 {
  margin: 0 auto;
  color: #555;
}

p {
  margin-top: 6px;
  font-size: 14px;
  color: #aaa;
  margin-bottom: 30px;
}

.answer {
  background: #fafafa;
  cursor: pointer;
  margin: 10px auto;
  position: relative;
}

.answer:hover {
  opacity: 0.6;
}

span {
  display: inline-block;
  padding: 10px 20px;
}

.percent {
  height: 100%;
  position: absolute;
  box-sizing: border-box;
}

.percent-a {
  border-left: 4px solid #d91b42;
  background: rgba(217, 27, 66, 0.2);
}

.percent-b {
  border-left: 4px solid #45c496;
  background: rgba(69, 196, 150, 0.2);
}

.center {
  text-align: center;
}

button {
  background: #d91b02;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
}

button:hover {
  opacity: 0.7;
}
</style>