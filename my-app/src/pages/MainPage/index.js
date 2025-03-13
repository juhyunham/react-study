import requests from '../../api/request';
import Banner from '../../components/Banner';
import Row from '../../components/Row';


function MainPage() {
	return (
	<div>
		<Banner />   
		<Row 
			title="Netflix Originals" 
			id="NO"
			fetchUrl={requests.fetchNetflixOriginals}
			isLargeRow
		/>
		<Row 
			title="Trending Now" 
			id="TN"
			fetchUrl={requests.fetchTrending}
		/>
		<Row 
			title="Top Rated" 
			id="TR"
			fetchUrl={requests.fetchTopRated}
		/>
		<Row 
			title="Action Movies" 
			id="AM"
			fetchUrl={requests.fetchActionMoives}
		/>
	</div>
)
}

export default MainPage