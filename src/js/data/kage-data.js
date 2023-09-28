class KageData {
    static async searchEvent(keyword) {
        try {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=${keyword}`);
            const responseJson = await response.json();

            if (responseJson.event) {
                return Promise.resolve(responseJson.event);
            } else {
                return Promise.reject(`Pertandingan antara ${keyword} tidak ditemukan`)
            };
        } catch (error) {
            return Promise.reject(`Error: ${error}`)
        }
    }
}

export default KageData;