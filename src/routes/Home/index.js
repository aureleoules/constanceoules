import React from 'preact';

import './styles.scss';

import rows from './pictures.json';

import Photo from 'components/Photo';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			zoom: null
		}
	}

	componentDidMount() {
		document.title = "Constance Oulès - Interior Design"; 
	}

	getPicture = name => {
		const src = require('assets/photos/Homepage/' + name + '.jpg');
		const hd = require('assets/photos/HD/Homepage/' + name + '.jpg');
		return <Photo 
			onClick={() => this.setState({zoom: name})} 
			removeZoom={e => this.setState({zoom: null})}
			src={this.state.zoom === name ? hd : src} 
			alt="Design"
			zoom={this.state.zoom === name}
			zoomable
			isMobile={this.props.isMobile}
		/>
	}

    render() {
			return (	
				<div className="photos">

					{rows.map((row, index) => {
						return (
							<div className={["row", row.length === 3 ? "three": ""].join(" ")}>
								{row.map((picture, i) => {
									return (
										<div className={picture.layout}>
											{picture.type !== "split" && 
												this.getPicture(picture.image)
											}
											{picture.type === "split" &&
												<div>
													<div className="top">
														{this.getPicture(picture.images[0])}
													</div>
													<div className="bottom">
														{this.getPicture(picture.images[1])}
													</div>
												</div>
											}
										</div>
									)
								})}
							</div>
						)
					})}
				</div>
			);
    }
}

export default Home;
