import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
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

	return (
		<section>
			<h2 className="slideTitle">{title}</h2>
			<div className="slider">
				<div
					className="arrowLeft"
				>
					<ChevronLeftIcon
						width="50"
						height="50"
					/>
				</div>
				<Swiper
					className="slideList"
					modules={[Navigation]}
					navigation={{ nextEl: ".arrowRight", prevEl: ".arrowLeft" }} 
					spaceBetween={15} 
					loop={false} 
					watchOverflow={true} 
					autoWidth={false}
					slidesPerView={"auto"}
					breakpoints={{ 
						320: { slidesPerView: 2.5 }, 
						768: { slidesPerView: 5 }, 
						1024: { slidesPerView: 6 }, 
					}}
					//style={{ width: "100%" }} 
					>
					{movies?.map((movie) => {
						return (
							<SwiperSlide
								key={movie.id}
								className="slideItem"
								style={{ width: "150px" }}
							>
								<div className="posterWrap">
									<img
										className={`poster "${isLargeRow && 'posterLarge'}"`}
										src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
										alt={movie.name}
									/>
								</div>
								<div>
									<h4 className="movieTitle">{movie.name}</h4>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
				<div
					className="arrowRight"
				>
					<ChevronRightIcon 
						width="50"
						height="50"
					/>
				</div>
				
			</div>
		</section>
	)
}
