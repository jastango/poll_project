async function deletePoll(poll) {
    try {
        fetch(`http://localhost:5000/polls/${poll._id}`, {
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


