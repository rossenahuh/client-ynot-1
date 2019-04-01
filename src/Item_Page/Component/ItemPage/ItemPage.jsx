import React, { Component } from 'react';
import StarRating from '../StarRating';
import ItemMap from '../ItemMap';
import ItemReview from '../ItemReview';
import './ItemPage.css';

const ItemPage = (props) => (
	<div id="ItemPgWrapper">
		<div id="ItemPgHeader">
			<div id="IPHtitle">
				<h1>item.name</h1>
				<StarRating />
				<a href="#">food styles</a>
			</div>
			<div>
				<button>Write a Review</button>
				<button>Add Photo</button>
			</div>
		</div>
		<div id="mapAndPhoto">
			<div id="mapWrapper">
				<ItemMap />
			</div>
			<div>photo</div>
		</div>
		<div>
			<div id="revHeader">
				<h1>Recommended Reviews for ItemName</h1>
				<input />
				<button />
				<span>Sort by</span>
				<select>
					<option>Yelp Sort</option>
					<option>Yelp Sort</option>
					<option>Yelp Sort</option>
					<option>Yelp Sort</option>
				</select>
				<span>Language</span>
				<select>
					<option>Korean</option>
					<option>English</option>
				</select>
			</div>
			<ItemReview />
		</div>
	</div>
);

export default ItemPage;
