import React from 'react';
import { Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function RecommendedReviews({ reviewList }) {
	return (
		<Col>
			<h4>Recommended Reviews</h4>
			{reviewList.length ? (
				reviewList.map((review) => (
					<Row>
						<Row>
							<img src={review.user.profilePhoto} alt={review.user.name} />
							<Col>
								<div>{review.user.name}</div>
								<div>review Number</div>
								<div>Photo Number</div>
							</Col>
						</Row>
						<Col>
							<Row>
								<div>{review.rating}</div>
								<div>{review.createdAt.slice(0, 10)}</div>
							</Row>
							<div>{review.comment}</div>
							<Row>
								<div>:></div>
								<div>:></div>
								<div>:></div>
							</Row>
						</Col>
					</Row>
				))
			) : (
				'리뷰가 없습니다'
			)}
		</Col>
	);
}

export default RecommendedReviews;
