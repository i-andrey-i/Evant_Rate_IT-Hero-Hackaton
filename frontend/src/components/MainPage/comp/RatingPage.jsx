import React, { useState, useEffect } from 'react'
import MyButton from './UI/button/MyButton'
import { useParams, Link } from 'react-router-dom'

const RatingPage = () => {
	const { id } = useParams()
	const [criteria, setCriteria] = useState([]) // store criteria from previous page
	const [ratings, setRatings] = useState([]) // store ratings for each criterion
	const [comment, setComment] = useState('')

	// initialize ratings array with zeros
	useEffect(() => {
		setRatings(new Array(criteria.length).fill(0))
	}, [criteria])

	const handleStarClick = (criterionIndex, ratingIndex) => {
		setRatings(ratings =>
			ratings.map((rating, index) => {
				if (index === criterionIndex) {
					return ratingIndex + 1
				}
				return rating
			})
		)
	}

	const handleCommentChange = event => {
		setComment(event.target.value)
	}
	const handleSubmit = event => {
		event.preventDefault()
		alert(`Ваш комментарий: ${comment}`)
		setComment('')
	}

	return (
		<div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
			<h3>Оценить команду</h3>

			<h3>Team1</h3>
			{criteria.map((criterion, index) => (
				<div key={index}>
					<h4>{criterion.name}</h4>
					<p>{criterion.description}</p>
					<div style={{ marginBottom: '10px' }}>
						{[...Array(5)].map((_, ratingIndex) => (
							<span
								key={ratingIndex}
								onClick={() => handleStarClick(index, ratingIndex)}
								style={{
									cursor: 'pointer',
									fontSize: '6vw',
									color: ratingIndex < ratings[index] ? '#006FFD' : 'gray',
								}}
							>
								★
							</span>
						))}
					</div>
				</div>
			))}

			<h4>Хотите оставить комментарий?</h4>

			<form onSubmit={handleSubmit}>
				<textarea
					value={comment}
					onChange={handleCommentChange}
					placeholder='Ждем ваш комментарий'
					rows='4'
					cols='50'
					style={{ marginBottom: '10px' }}
				/>
				<br />
				<Link to={'/main_page'}>
					<MyButton>Оценить команду</MyButton>
				</Link>
			</form>
		</div>
	)
}

export default RatingPage
