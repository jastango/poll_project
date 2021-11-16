const mongoose = require('mongoose')

const PollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Please add a question"],
        unique: true,
        maxlength: [300, 'Question cannot exceed 300 characters']
    },
    answerA: {
        type: String,
        required: [true, "Two answers are required"],
        maxlength: [100, "Answer cannot exceed 100 characters"]
    },
    answerB: {
        type: String,
        required: [true, "Two answers are required"],
        maxlength: [100, "Answer cannot exceed 100 characters"]
    },
    votesA: {
        type: Number
    },
    votesB: {
        type: Number
    }
})

module.exports = mongoose.model('Poll', PollSchema)