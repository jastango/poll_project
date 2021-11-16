import { ref } from 'vue'

function updatePercent(poll) {

    let percentA = ref(0);
    let percentB = ref(0);

    percentA = (Math.floor(100 / (poll.votesA + poll.votesB) * poll.votesA)).toString() + "%";
    percentB = (Math.floor(100 / (poll.votesA + poll.votesB) * poll.votesB)).toString() + "%";

    return { percentA, percentB }
}


export default updatePercent