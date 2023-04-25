<script>

export default {
  data() {
    return {
        title: "Olivia's restaurant",
        questions: [
        {
          text: "What kind of restaurant did Olivia visit?",
          options: ["Mexican", "Italian", "Spanish"],
          answerIndex: 2,
        },
        {
          text: "The restaurant serves _____",
          options: ["seafood", "pasta", "ice cream"],
          answerIndex: 0,
        },
        {
          text: "Olivia had ______",
          options: ["a rice dish", "seafood soup", "fast food"],
          answerIndex: 0,
        },
        {
          text: "The restaurant doesn't serve food for vegetarians",
          options: ["True", "False", "They don't say"],
          answerIndex: 1,
        },
        {
          text: "The service was _____",
          options: ["terrible", "fast", "slow"],
          answerIndex: 2,
        },
        {
          text: "The atmosphere was _____",
          options: ["terrible", "relaxed", "fun"],
          answerIndex: 2,
        },
        {
          text: "The food was _____",
          options: ["expensive", "cheap", "bad"],
          answerIndex: 0,
        },
        {
          text: "Olivia liked the restaurant",
          options: ["true", "false", "they don't say"],
          answerIndex: 0,
        },
      ],
      selectedOptions: new Array(this.numberOfQuestions).fill(null),
      submitted: false,
      results: false,
      correctAnswers: 0,
    };
  },
  computed: {
    numberOfQuestions() {
      return this.questions.length;
    },
    allQuestionsAnswered() {
      return this.selectedOptions.every(option => option !== null);
    }
  },
  methods: {
    isCorrect(questionIndex, optionIndex) {
      return this.questions[questionIndex].answerIndex === optionIndex;
    },
    isSelected(questionIndex, optionIndex) {
      return this.selectedOptions[questionIndex] === optionIndex;
    },
    checkAnswer() {
      this.submitted = true;
      let correctAnswers = 0;
      for (let i = 0; i < this.questions.length; i++) {
        if (this.selectedOptions[i] === this.questions[i].answerIndex) {
          correctAnswers++;
        }
      }
      //alert(`You got ${correctAnswers} out of ${this.questions.length} questions correct!`);
      this.correctAnswers = correctAnswers;
      this.results = true;
    },
    resetForm() {
      this.submitted = false;
      this.selectedOptions = new Array(this.numberOfQuestions).fill(null);
      this.results = false;
      this.correctAnswers = 0;
    },
  },
};
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <audio controls src="https://english22.s3.amazonaws.com/food-olivia-restaurant.mp3">Play me</audio>
    <div v-for="(question, index) in questions" :key="index">
      <p class="question-text">{{ question.text }}</p>
      <ul class="lista">
        <li v-for="(option, optionIndex) in question.options" :key="optionIndex">
          <label :class="{ 'selected': isSelected(index, optionIndex) }">
            <input type="radio" :value="optionIndex" v-model="selectedOptions[index]" :disabled="submitted">
            {{ option }}
            <span v-if="isSelected(index, optionIndex) && isCorrect(index, optionIndex) && submitted">&#10004;</span>
            <span v-if="isSelected(index, optionIndex) && !isCorrect(index, optionIndex) && submitted">&#10008;</span>
          </label>
        </li>
      </ul>
    </div>
    <button @click="checkAnswer" :disabled="!allQuestionsAnswered || submitted" :class="{'disabled' : !allQuestionsAnswered || submitted }">Check Answers</button>
    <button @click="resetForm">Reset Form</button>
    <div v-if="results">
      <p class="result-message"><span>Results</span>: you got {{ correctAnswers }} out of {{ questions.length }} questions correct!</p>
    </div>
  </div>
</template>

<style scoped>
.correct {
  color: green;
}

.selected {
  font-weight: bold;
}
ul {
  list-style: none;
  text-align: left;
}

button {
  background: rgb(23, 23, 121);
  color: white;
}

.result-message {
  color: blue;
  font-weight: bold;
}

.disabled {
  background-color: lightblue;
  cursor: unset;
}

.question-text {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 0;
}

.lista {
  margin-top: 0;
}

.result-message span {
    color: black;
}
</style>
