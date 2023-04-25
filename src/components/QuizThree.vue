<script>

export default {
  data() {
    return {
      title: "International Dishes",
      questions: [
        {
          text: "Does Richard want to eat Mexican food tonight",
          options: ["Yes, he does", "No, he doesn't", "They don't say"],
          answerIndex: 1,
        },
        {
          text: "Does he want Italian?",
          options: ["No, he doesn't", "Italian food is bad", "He doesn't know the place"],
          answerIndex: 0,
        },
        {
          text: "Japanese food is Richard's favorite",
          options: ["True", "False", "They don't say"],
          answerIndex: 1,
        },
        {
          text: "Richard doesn't like spicy food",
          options: ["True", "False", "They don't say"],
          answerIndex: 0,
        },
        {
          text: "Karen loves Brazilian and Indian food",
          options: ["True", "False", "They don't say"],
          answerIndex: 0,
        },
        {
          text: "Can you eat all you want at the Chinese restaurant?",
          options: ["No. At the Thai restaurant", "No, you can't", "Yes, you can"],
          answerIndex: 2,
        },
        {
          text: "Richard is a picky eater",
          options: ["True", "False", "They don't say"],
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
    <audio controls src="https://english22.s3.amazonaws.com/international-dishes.mp3">Play me</audio>
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
