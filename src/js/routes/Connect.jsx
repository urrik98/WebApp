import React, { Component } from "react";
import { Link } from "react-router";
import { Button } from "react-bootstrap";
import AddFriends from "../components/Friends/AddFriends";
//import OrganizationsToFollowList from "../components/OrganizationsToFollowList";

/* VISUAL DESIGN HERE: https://invis.io/E45246B2C */

export default class Connect extends Component {
	static propTypes = {

	};

	constructor (props) {
		super(props);
	}

	static getProps () {
		return {};
	}

	render () {
		var floatRight = {
			float: "right"
		};
		return <div>
			<div className="container-fluid well u-gutter__top--small fluff-full1">
				<h4 className="text-left">Add Friends</h4>
				<AddFriends />
      </div>

			<div className="container-fluid well u-gutter__top--small fluff-full1">
				<h4 className="text-left">Who You Can Follow</h4>
				<span style={floatRight}>
					<Link to="/opinions"><Button bsStyle="primary">Next &#x21AC;</Button></Link>
				</span>
				<p>Find voter guides you can follow. These voter guides have been created by nonprofits, public figures, your friends, and more.<br />
				<br /></p>

				{/*
				<input type="text" name="search_opinions" className="form-control"
					   placeholder="Search by name or twitter handle." />
				<Link to="add_friends_message"><Button bsStyle="primary">Select from those I Follow on Twitter &#x21AC;</Button></Link>
				<OrganizationsToFollowList />
				<br />
				*/}
			</div>
		</div>;
	}
}
