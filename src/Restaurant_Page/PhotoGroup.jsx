import React from 'react';

function PhotoGroup({ reviewList }) {
	return reviewList.length ? (
		reviewList.map((review) => <img src={review.photo} alt={review.user.name} />)
	) : (
		<div>등록된 사진이 없습니다</div>
	);
}

export default PhotoGroup;
