<template>
  <div id="create-poll">
    <form @submit.prevent="addPoll">
      <div class="form-field">
        <label for="question">Poll Question</label>
        <input type="text" id="question" v-model="fields.question" />
        <div class="error" v-if="errors.qErr">{{ errors.qErr }}</div>
      </div>
      <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" v-model="fields.answerA" />
        <div class="error" v-if="errors.aErr">{{ errors.aErr }}</div>
      </div>
      <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" v-model="fields.answerB" />
        <div class="error" v-if="errors.bErr">{{ errors.bErr }}</div>
      </div>
      <div class="center">
        <button>Add Poll</button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  data() {
    return {
      fields: {
        question: "",
        answerA: "",
        answerB: "",
        votesA: 0,
        votesB: 0,
      },
      errors: {
        qErr: "",
        aErr: "",
        bErr: "",
      },
      valid: false,
    };
  },
  methods: {
    addPoll() {
      this.valid = true;
      // Validate Question
      if (this.fields.question.trim().length < 5) {
        this.valid = false;
        this.errors.qErr = "Question must be at least 5 characters";
      } else {
        this.errors.qErr = "";
      }
      // Validate A
      if (this.fields.answerA.trim().length < 1) {
        this.valid = false;
        this.errors.aErr = "Answer must be at least 1 character";
      } else {
        this.errors.aErr = "";
      }
      // Validate B
      if (this.fields.answerB.trim().length < 1) {
        this.valid = false;
        this.errors.bErr = "Answer must be at least 1 character";
      } else {
        this.errors.bErr = "";
      }

      // Post Poll
      if (this.valid) {
        fetch("https://poll-project-heroku.herokuapp.com/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.fields),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success", data);
            this.$emit("toggleTabs");
            this.$emit("updatePolls");
          })

          .catch((err) => console.log(err));
      }
    },
  },
};
</script>

<style scoped>
#create-form {
  color: #555;
}

form {
  max-width: 420px;
  margin: 30px auto;
  background: #fff;

  border-radius: 10px;
}

.form-field {
  margin: 20px auto;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #ddd;
  color: #555;
}

input:focus {
  outline: 1px solid #555;
}

label {
  color: #555;
  display: inline-block;
  margin: 25px 0 15px;
}

.center {
  text-align: center;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
}

button:hover {
  background: #555;
}

.error {
  margin-top: 5px;
  font-weight: bold;
  font-size: 13px;
  color: #d91b42;
  text-align: center;
}
</style>