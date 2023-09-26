function main() {
    // variabel untuk url
    const url = 'https://www.themoviedb.org/documentation/api';
    const getMovies = async () => {
        try {
            const response = await fetch(`${url}/list`);
            const responseJson = await response.json();
        } catch (error) {

        }
        
    }

    
}