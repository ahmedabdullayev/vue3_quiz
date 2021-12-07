<template>
  <div class="container-app">

    <div class="container-quiz">
      <div class="header-quiz">
        <h1>Quiz App</h1>
      </div>
      <div class="box" v-for="(question,index) in questions.slice(a,b)" :key="index">
        <div class="box-question">
          <h2>Question {{b}}/{{questions.length}}</h2>
          <p>{{question.question}}</p>
        </div>
        <div class="box-propositions">
          <ul>
            <li v-for="(item,index) in question.propositions" :key="index">{{item.props}}</li>
          </ul>
        </div>
      </div>
      <div class="box-score">
        <h1>Your score:</h1>
        <div class="btn-restart">
        </div>
      </div>
      <div class="footer-quiz">
        <div class="box-button">
          <button>Skip</button>
          <button>Next</button>
        </div>
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
  data(){
    return{
      questions:[
        {
          question:"Inside which HTML element do we put the JavaScript ?",
          propositions:[
            {props:'<script>',correct:true},
            {props:'<js>'},
            {props:'<scripting>',},
            {props:'<javascript>',}
          ]
        },
        {
          question:"What is the correct syntax for referring to an external script called 'xxx.js' ?",
          propositions:[
            {props:'<script href="xxx.js">',},
            {props:'<script name="xxx.js">',},
            {props:'<script src="xxx.js">',correct:true},
            {props:'<script id="xxx.js">'},
          ]

        },
        {
          question:"How do you write 'Hello World' in an alert box ?",
          propositions:[
            {props:'msg("Hello World")'},
            {props:'alertBox("Hello World")'},
            {props:'alert("Hello World")',correct:true},
            {props:'msgBox("Hello World")'},
          ]

        },
        {
          question:"How to write an IF statement in JavaScript ?",
          propositions:[
            {props:'if i = 5 then',},
            {props:'if (i == 5)',correct:true},
            {props:'if i == 5 then',},
            {props:'if i = 5',},
          ]

        },
        {
          question:"How does a FOR loop start ?",
          propositions:[
            {props:'for i = 1 to 5',},
            {props:'for (i <= 5; i++)'},
            {props:'for (i = 0; i <= 5)'},
            {props:'for (i = 0; i <= 5; i++)',correct:true},
          ]

        },
        {
          question:"How can you add a comment in a JavaScript ?",
          propositions:[
            {props:"'This is a comment"},
            {props:'//This is a comment',correct:true},
            {props:'<!--This is a comment-->'},
            {props:'*This is a comment'},
          ]

        }
      ],
      a:0,
      b:1,
    }
  }
});
</script>
