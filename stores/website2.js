import {defineStore} from "pinia"
import {ref} from "vue"

export const useWebsiteStore = defineStore('websiteStore', () => {
    const tableData = ref()

    async function fetchData() {
        const client = useSupabaseClient();
        const {data, error} = await client.from('Apartments')
            .select('*')
            .limit(100);
        if (data) {
            tableData.value = data
        } else {
            console.error('Error when fetching the data:', error)
        }
    }

    return {tableData, fetchData}
})