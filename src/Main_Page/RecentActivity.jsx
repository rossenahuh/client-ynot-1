import React, { Component } from 'react';
import './RecentActivity.css';
import { Card, Button, CardImg, CardTitle, CardText, CardBody, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Icon } from 'react-icons-kit';
import { notification, grin, cool } from 'react-icons-kit/icomoon';

import StarRatingComponent from 'react-star-rating-component';

class RecentActivity extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ideaPopOverOpen: false
		};
		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState({
			ideaPopOverOpen: !this.state.ideaPopOverOpen
		});
	}

	render() {
		const recentActivityList = this.props.recentActivityList;
		console.log('popover:::: ', this.state.ideaPopOverOpen);
		return recentActivityList.map((activity) => (
			<Card>
				<div className="RA-user-wrap">
					<img className="RA-user-profile" src={activity.user.profilePhoto} alt={activity.user.name} />
					<span>
						<div className="RA-context-highlight">{activity.user.name}</div>
						<div>wrote a review</div>
					</span>
				</div>

				<CardImg className="margin-bottom" src={activity.restaurant.src} alt={activity.user.name} />
				<CardTitle className="RA-context-highlight border-bottom ">{activity.restaurant.name}</CardTitle>
				<StarRatingComponent className="margin-left" editing={false} starCount={5} value={activity.rating} />
				<CardText className="border-bottom margin-left">{activity.comment}</CardText>
				<div className="margin-bottom">
					<Button onClick={this.toggle} id="Popover1" size="sm" className="button-no-border">
						<Icon icon={notification} />
					</Button>
					{/* <Popover
						placement="bottom"
						isOpen={this.state.ideaPopOverOpen}
						target="Popover1"
						toggle={this.toggle}
					>
						<PopoverHeader>Informative</PopoverHeader>
						<PopoverBody>Sed n.</PopoverBody>
					</Popover> */}
					<Button size="sm" className="button-no-border">
						<Icon icon={grin} />
					</Button>
					<Button size="sm" className="button-no-border">
						<Icon icon={cool} />
					</Button>
				</div>
			</Card>
		));
	}
}

export default RecentActivity;
