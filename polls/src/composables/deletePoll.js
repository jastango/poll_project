async function deletePoll(poll) {
    try {
        fetch(`https://poll-project-heroku.herokuapp.com/${poll._id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log('deleted')
    } catch (error) {
        console.log(error)
    }
}

export default deletePoll


