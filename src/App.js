import logo from './logo.svg';
import './App.css';
import QuizApp from './components/organisms/quiz-view/quiz-view';
import { useState } from 'react';

function App() {
  const questions = [
    {
      question : 'what is 1+1 ?' ,
      options : [ 2,3,4,5] ,
      correctAns : 2 ,
      id :1
    },
    {
      question : 'what is 2+2 ?' ,
      options : [ 2,3,4,5] ,
      correctAns : 4 ,
      id : 2
    },
    {
      question : 'what is 3+3 ?' ,
      options : [ 2,3,4,5] ,
      correctAns : 2 ,
      id :3
    }
  ]
  const [currectQuestionIndex , setCurrentQuestionIndex] = useState(0)
  const [finalScore , setFinalScore] = useState(0)

  function changeQuestion () {
    setCurrentQuestionIndex(currectQuestionIndex + 1)
  }
  function handleSubmit () {
    // submit ka code write here
    alert('submitto the quiz')
    // just read the final score value from localstorage
    setFinalScore(
      //  here to save final score read from local storage
    )
  }
  const isLastQuestion = currectQuestionIndex + 1 === questions.length

  return (
    <div className="App">
      <QuizApp 
        questionData = {questions[currectQuestionIndex]}
        changeQuestion = {changeQuestion}
        isLastQuestion = {isLastQuestion}
        handleSubmit = {handleSubmit}
      />
    
    </div>
  );
}

export default App;
