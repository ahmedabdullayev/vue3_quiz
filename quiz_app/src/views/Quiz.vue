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
<!--            <li v-for="(item,index) in question.answers" :key="index" :class="select ? check(item, item.id) : ''" @click="selectResponse(item.id)">{{item.answerName}}</li>-->
            <li v-for="(item,index) in question.propositions" :key="index" :class="select ? check(item) : ''" @click="selectResponse(item)">{{item.props}}</li>
          </ul>
        </div>
      </div>
      <div class="box-score">
        <h1>Your score:</h1>
        <h2>{{score}}/{{questions.length}}</h2>
        <div class="btn-restart">
        </div>
      </div>
      <div class="footer-quiz">
        <div class="box-button">
          <button>Skip</button>
          <button @click="nextQuestion">Next</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
interface propositions{
  props: string,
  correct: boolean
}
export interface questions{
  question: string,
  propositions:propositions[]
}
import { defineComponent } from 'vue';
import axios from "axios";
// import QuizComponent from "@/components/QuizComponent.vue";
export default defineComponent({
  name: 'Quiz',
  components: {
    // QuizComponent,
  },
  data(){
    return{
      api_questions:[],
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
            {props:'for (i = 0; i <= 5; i++)',correct:true as boolean},
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
      ] as questions[],
      a:0,
      b:1,
      select:false,
      score: 0,
    }
  },
  methods:{
    selectResponse(value : propositions){
      if(this.select){
        return
      }
      this.select = true;

      if(value.correct){
        this.score++;
      }
    },

    check(status : any){
      if(status.correct){
        return 'correct'
      }else{
        return 'incorrect'
      }
    },
    nextQuestion(){
      this.a++;
      this.b++;
      this.select = false;
    },
    async apiCall(){
     await axios.get("https://localhost:5001/api/v1/Question/GetQuestions/8a7f8094-7a36-4ead-b2f3-6d155cf5e65e").then((response) => {
        console.log(response.data)
       this.api_questions = response.data
       console.warn(this.api_questions)
      })
    }

  },
  mounted() {
    this.apiCall();
  },
});
</script>
