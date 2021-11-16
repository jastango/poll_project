const express = require('express')
const { getPolls, createPoll, updatePoll, deletePoll } = require('../controllers/polls')


const router = express.Router()

router.route('/').get(getPolls).post(createPoll)
router.route('/:id').put(updatePoll).delete(deletePoll)

module.exports = router