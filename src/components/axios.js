import axios from "axios";

const instance = axios.create({
    baseURL: "Https://api.themoviedb.org/3",    
});

export default instance;