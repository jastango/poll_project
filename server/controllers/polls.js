const Poll = require('../models/Poll')


// Get all Polls
exports.getPolls = async (req, res, next) => {
    try {
        const polls = await Poll.find()
        res.status(200).json(polls)
    } catch (error) {
        console.log(error)
    }
}


// Create Poll
exports.createPoll = async (req, res, next) => {
    try {
        const poll = await Poll.create(req.body)
        res.status(201).json(poll)
    } catch (error) {
        console.log(error)
    }
}

// Update Poll
exports.updatePoll = async (req, res, next) => {
    try {
        const poll = await Poll.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(poll)
    } catch (error) {
        console.log(error)
    }
}

// Delete Poll
exports.deletePoll = async (req, res, next) => {
    try {
        const poll = await Poll.findByIdAndDelete(req.params.id)
        res.send('deleted')
    } catch (error) {
        console.log(error)
    }
}