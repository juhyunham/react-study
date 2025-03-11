import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import "./Row.css"

export default function Row({title, id, fetchUrl, isLargeRow}) {
	const [movies, setMovies] = useState()

	useEffect(() => {
		fetchMovieData()
	}, [])

	const fetchMovieData = async () => {
		const request = await axios.get(fetchUrl);

		setMovies(request.data.results)
	}

	console.log(`movie`, movies)

	return (
		<section>
			<h2 className="slideTitle">{title}</h2>
			<div className="slider">
				<ChevronLeftIcon
					className="arrowLeft"
					width="50"
					height="50"
				/>
				<ul className="slideList">
					{movies?.map((movie) => {
						return (
							<li 
								key={movie.id}
								className="slideItem">
								<img
									className={`poster "${isLargeRow && 'posterLarge'}"`}
									src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
									alt={movie.name}
								/>
								<div>
									<h4>{movie.name}</h4>
								</div>
							</li>
						)
					})}
				</ul>
				<ChevronRightIcon 
					className="arrowRight"
					width="50"
					height="50"
				/>
			</div>
		</section>
	)
}
