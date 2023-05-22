import styles from './quiz-view.module.css'

export default function QuizApp ({questionData,changeQuestion,isLastQuestion,handleSubmit}) {


    const {
        question ,
        options ,
        correctAns ,
        id ,
    } = questionData || {}

    function saveQuizResponse ( selectedOption  ) {
        // console.log({selectedOption , questionId})
        const isAnswerCorrect = selectedOption === correctAns
        const score = isAnswerCorrect ? 2 : 0
        localStorage.setItem('finalScore' ,score )
    }

    return (
        <div className={styles.container}>
            <p>{question}</p>
            <div className={styles.options}>
                {
                    options.map(option => (
                        <div key={option}>
                            <input 
                                type='radio' 
                                name='quizOptions' 
                                onChange={()=> saveQuizResponse(option)}
                            />
                            <span>{option}</span>
                        </div>
                    ))
                }

            </div>
            <div className={styles.btnContainer}>
                <button onClick={ isLastQuestion ? handleSubmit :  changeQuestion}>{
                    isLastQuestion ? 'Submit' : 'Next'
                }</button>
            </div>
        </div>
    )
}