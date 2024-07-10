class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.currentQuestionIndex = 0
        this.correctAnswers = 0
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++
    }

    shuffleQuestions() {
        this.questions.sort(() => .5 - Math.random())
    }

    checkAnswer(answer) {
        const currentAnswer = this.questions[this.currentQuestionIndex].answer

        if (answer === currentAnswer) {
            this.correctAnswers++
        }
    }

    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length
    }

    filterQuestionsByDifficulty(difficulty) {
        if (isNaN(difficulty) || !(difficulty > 0 && difficulty < 4) || typeof difficulty != 'number') {
            return
        }
        const filteredQuestions = this.questions.filter(eachQuestion => eachQuestion.difficulty === difficulty)
        this.questions = filteredQuestions
    }

    averageDifficulty() {
        const sumDifficulty = this.questions.reduce((acc, eachQuestion) => acc + eachQuestion.difficulty, 0)
        return sumDifficulty / this.questions.length
    }
}
