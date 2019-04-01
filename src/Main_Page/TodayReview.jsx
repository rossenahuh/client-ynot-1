import React from 'react';

function TodayReview({ reviewOfTheDay }) {
	// console.log('review::: ', reviewOfTheDay);
	return (
		<div>
			<div>userName</div>
			<div>REVIEW OF THE DAY!</div>
			<div>
				<span>{reviewOfTheDay.rating}</span>
				<span>{reviewOfTheDay.date}</span>
			</div>
			<div>{reviewOfTheDay.comment}</div>
		</div>
	);
}

export default TodayReview;
