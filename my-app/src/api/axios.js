import axios from 'axios';


const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: "bfb1ddb27a32e8c0b29db18880642639",
		language: "ko-kr",
	},
});

export default instance;