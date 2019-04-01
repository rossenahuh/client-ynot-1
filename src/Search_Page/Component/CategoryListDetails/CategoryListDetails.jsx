import React from 'react';
import StarRating from '../StarRating';
import './CategoryListDetails.css';

const CategoryListDetails = (props) => (
	<div className="ItemWrapper">
		<img src={props.item.photo} className="itemImg" />
		<div className="itemInfo">
			<div>
				<div>
					<p>{props.item.name}</p>
					<StarRating />
					<p>$$ British, Fish & Chips, Seafood</p>
				</div>
				<div>
					<p>02-222-2222</p>
					<p>{props.item.address}</p>
					<p>이게 뭐지???</p>
				</div>
			</div>
			<div>
				<p>It is a cute little place up on the hill.</p>
			</div>
			<div>
				<button>Find a Table</button>
				<span>Offers reservatios</span>
			</div>
		</div>
	</div>
);

export default CategoryListDetails;
