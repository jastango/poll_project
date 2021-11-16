import { computed, ref } from "vue";

const getPolls = () => {
    const error = ref(null);
    const polls = ref([])
    const loadPolls = async () => {
        try {

            let data = await fetch("https://poll-project-heroku.herokuapp.com/")

            // Check if data is ok
            if (!data.ok) {
                throw Error("no data available");
            }

            polls.value = await data.json();
        } catch (err) {
            error.value = err.message;
        }
    };

    return { polls, error, loadPolls }
}

export default getPolls