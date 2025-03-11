import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from '../api/axios';
import requests from '../api/request';
import styled from 'styled-components';
import "./Banner.css"
import { PlayCircleIcon , ExclamationCircleIcon } from '@heroicons/react/24/solid'

function Banner() {
	const [movie, setMovie] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		fetchData();
	}, [searchParams])

	console.log(`searchParams`,searchParams)

	const isVideoPlaying = searchParams.get("video") === "true";

	const fetchData = async () => {
		// 현재 상영중인 영화 정보를 가져오기 (여러 영화)
		const request = await axios.get(requests.fetchNowPlaying);

		// 여러 영화 중 영화 하나의 ID를 가져오기
		const moveiID = request.data.results[Math.floor(Math.random() * request.data.results.length)].id; 

		// 특정 영화의 더 상세한 정보를 가져오기
		const {data: movieDetail} = await axios.get(`movie/${moveiID}`, {
			params: {
				append_to_response: "videos",
			},
		});

		setMovie(movieDetail)
	}

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n-1) + "..." : str;
	}

	console.log(1, movie)

	const playVideo = () => {
		console.log(`video`)

		setSearchParams({ video: "true" });
	}

	if (!isVideoPlaying) {
		return (
			<header className="banner" 
				style={{
					backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}.jpg")`,
					backgroundPosition: "top center",
					backgroundSize: "cover",
					}}>
			

				<div className="banner_contents">
					<h1 className="banner_title">{movie.title || movie.name || movie.original_name}</h1>

					<div className="banner_buttons">
						<button 
							className="banner_button play"
							onClick={playVideo}
						>
							<PlayCircleIcon 
								width="20"
								height="20"
								style={{marginRight: "6px"}}
							/>
							<span style={{ flex: 1}}>Play</span>
						</button>
						<button className="banner_button info">
							<ExclamationCircleIcon 
								width="20"
								height="20"
								style={{marginRight: "6px"}}
							/>
							<span style={{ flex: 1}}>More Information</span>
						</button>
					</div>
				</div>

				<h2 className="banner_description">{truncate(movie.overview, 100)}</h2>

			</header>
		)
	} else {
		const videoKey = movie.videos.results.length > 0 ? movie.videos.results[0].key : null;
		console.log(2, movie.videos.results)

		return (
			<Container>
				<HomeContainer>
					{
						videoKey ? <Iframe
						src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movie.videos.results[0].key}`}
						width="640"
						height="360"
						frameBorder="0"
						allow="autoplay; fullscreen"
						></Iframe> : 
						<p>비디오가 없습니다</p>
					}
				</HomeContainer>
			</Container>
		)
	}
}

export default Banner

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: #111;
	color: white;
`;

const HomeContainer = styled.div`
	width: 100%;
	height: 100vh;
`;

const Iframe = styled.iframe`
	width: 100%;
	height: 100vh;
	border: none;
	z-index: -1;
	
	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`