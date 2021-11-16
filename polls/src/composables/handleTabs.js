import { ref } from "vue";

const handleTabs = () => {
    const items = ref([
        {
            text: "Current Polls",
            isActive: true,
        },
        {
            text: "Add New Poll",
            isActive: false,
        },
    ]);

    const toggleTabs = () => {
        items.value.forEach((item) => {
            item.isActive = !item.isActive;
        });
    }

    return { items, toggleTabs }
}
export default handleTabs