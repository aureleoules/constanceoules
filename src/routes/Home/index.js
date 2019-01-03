import React from 'preact';

import './styles.scss';

import Photo from 'components/Photo';

import client from 'services/client';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			zoom: null,
			rows: []
		}
	}

	componentDidMount() {
		document.title = "Constance Oulès - Interior Design";
		client.get('/rows').then(response => {
			const rows = response.data.payload || [];
			const parsedRows = this.parseData(rows);
			this.setState({rows: parsedRows});
		}).catch(err => {
			if(err) throw err;
		})
	}

	//jesus fucking christ i know it's bad but works fucking well
	parseData = rows => {
		console.time("hey");
		const parsedRows = [];
		rows.forEach((row, i) => {
			parsedRows[i] = {
				columns: [],
				count: row.photos.length
			}
			let alreadySplit = false;
			row.photos.forEach((photo) => {
				if(photo.size === 0 || photo.size === 1 || (photo.size === 2 && !this.isSplit(row, photo))) {
					parsedRows[i].columns.push({
						photos: [photo]
					});
				} else {
					if(!alreadySplit) {
						const splittedPhotos = [];
						for(let i = 0; i < row.photos.length; i++) {
							if(row.photos[i].size === 2) {
								splittedPhotos.push(row.photos[i]);
							}
						}
						parsedRows[i].columns.push({
							type: "split",
							photos: splittedPhotos
						});
						alreadySplit = true;
					}
				}
			});
		});
		console.timeEnd("hey");
		return parsedRows;
	}

	getPicture = photo => {
		return <Photo 
			onClick={() => this.setState({zoom: photo.id})} 
			removeZoom={e => this.setState({zoom: null})}
			src={photo.url} 
			alt="Design"
			zoom={this.state.zoom === photo.id}
			zoomable
			isMobile={this.props.isMobile}
		/>
	}

	isSplit = (row, photo) => {
		let numOfOneThirdSize = 0;
		row.photos.forEach(photo => {
			if(photo.size === 2) {
				numOfOneThirdSize++;
			}
		});
		const split = photo.size === 2 && numOfOneThirdSize === 2;
		return split;
	}

	getLayout = photo => {
		if(photo.size === 0) return "two third";
		if(photo.size === 1) return "half";
		if(photo.size === 2) return "third";
	}

    render() {
			return (	
				<div className="photos">
					{this.state.rows.map((row, index) => {
						console.log(row);
						return (
							<div className={["row", row.count === 3 ? "three" : ""].join(" ")}>
								{row.columns.map((column, i) => {
									if(column.type === "split") {
										return (
											<div className="third split">
												<div className="top">
													{this.getPicture(column.photos[0])}
												</div>
												<div className="bottom">
													{this.getPicture(column.photos[1])}
												</div>
											</div>
										)
									} else {
										return column.photos.map((photo, i) => (
											<div className={this.getLayout(photo)}>
												{this.getPicture(photo)}
											</div>
										))
									}
								})}
							</div>
						)
					})}
				</div>
			);
    }
}

export default Home;
