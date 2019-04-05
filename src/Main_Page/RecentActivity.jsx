import React from 'react';

function RecentActivity({ recentActivityList }) {
	console.log(recentActivityList);
	return recentActivityList.map((activity) => (
		<div>
			<div>
				<img src={activity.user.profilePhoto} />
				<span>
					<div>user이름: {activity.user.name}</div>
					<div>wrote a review</div>
				</span>
			</div>
			<div>레스토랑이름: {activity.restaurant.name}</div>
			<div>별점: {activity.rating}</div>
			<div>코멘트: {activity.comment}</div>
		</div>
	));
}

export default RecentActivity;
