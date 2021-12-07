<template>
  <div class="container-app">

    <div class="container-quiz">
      <div class="header-quiz">
        <h1>Quiz App</h1>
      </div>
        <div class="box-question">
          <h2>Question</h2>
        </div>
        <div class="box-propositions">
          <ul>
            <li>Test</li>
          </ul>
        </div>
      <div class="box-score">
        <h1>Your score:</h1>
        <div class="btn-restart">
        </div>
      </div>
      <div class="footer-quiz">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import QuizComponent from "@/components/QuizComponent.vue";
export default defineComponent({
  name: 'Quiz',
  components: {
    // QuizComponent,
  },
});
</script>
