import axios from 'axios';

const instances = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	parmas: {
		api_key: "886dba6c33e164d34c0abd935132f119",
		language: "ko-KR"
	}
})

export default instances;