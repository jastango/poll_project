async function updateVotes(poll) {
    const update = {
        votesA: poll.votesA,
        votesB: poll.votesB
    }
    try {
        fetch(`http://localhost:5000/polls/${poll._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(update),
        }).then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })

    } catch (error) {
        console.log(err)
    }

}

export default updateVotes
