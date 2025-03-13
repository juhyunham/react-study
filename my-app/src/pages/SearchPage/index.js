import { useLocation } from 'react-router-dom';

function SearchPage() {
	console.log(`useLocation`, useLocation())

	const useQuery = () => {
		return new URLSearchParams(useLocation().search)
	}

	let query = useQuery()
	const searchTerm = query.get(`q`)

	console.log(`searchTerm`, searchTerm)

	return (
		<div>index</div>
	)
}

export default SearchPage