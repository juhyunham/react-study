import React from 'react'
import "./MovieModal.css"
import { XMarkIcon  } from '@heroicons/react/24/solid'

function MovieModal({
	original_name,
	poster_path,
	overview,
	setISModalOpen
}) {
	return (
		<div className="modalWrap">
			<div className="modal">
				<div className="modalTitle">
					<h2>{original_name}</h2>
					<XMarkIcon 
						width="30"
						height="30"
						onClick={() => setISModalOpen(false)}
					/>
				</div>
				<div className="modalContent">
					<img
						className="img" 
						src={"https://image.tmdb.org/t/p/original/" + poster_path} 
						alt={original_name} 
					/>
					<p className="modalOverview">{overview}</p>
				</div>
			</div>
		</div>
	)
}

export default MovieModal