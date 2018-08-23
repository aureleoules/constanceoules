import React from 'preact';

import './styles.scss';

class Home extends React.Component {

	componentDidMount() {
		document.title = "Constance Oulès - Interior Design"; 
	}

	getPicture = name => {
		return require('assets/photos/Homepage/' + name + '.jpg');
	}

    render() {
			return (	
				<div className="photos">
					<div className="row">
						<div className="two third">
							<img alt="project" src={this.getPicture(1)}/>
						</div>
						<div className="third">
							<div className="top">
								<img alt="project" src={this.getPicture(2)}/>
							</div>
							<div className="bottom">
								<img alt="project" src={this.getPicture(3)}/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="third">
							<img alt="project" src={this.getPicture(4)}/>
						</div>
						<div className="two third">
							<img alt="project" src={this.getPicture(5)}/>
						</div>
					</div>
					<div className="row">
						<div className="half">
							<img alt="project" src={this.getPicture(6)}/>
						</div>
						<div className="half">
							<img alt="project" src={this.getPicture(7)}/>
						</div>
					</div>
					<div className="row three">
						<div className="third">
							<img alt="project" src={this.getPicture(8)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(9)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(10)}/>
						</div>
					</div>
					<div className="row">
						<div className="third">
							<div className="top">
								<img alt="project" src={this.getPicture(11)}/>
							</div>
							<div className="bottom">
								<img alt="project" src={this.getPicture(12)}/>
							</div>
						</div>
						<div className="two third">
							<img alt="project" src={this.getPicture(13)}/>
						</div>
					</div>
					<div className="row three">
						<div className="third">
							<img alt="project" src={this.getPicture(14)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(15)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(16)}/>
						</div>
					</div>
					<div className="row">
						<div className="half">
							<img alt="project" src={this.getPicture(17)}/>
						</div>
						<div className="half">
							<img alt="project" src={this.getPicture(18)}/>
						</div>
					</div>
					<div className="row three">
						<div className="third">
							<img alt="project" src={this.getPicture(19)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(20)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(21)}/>
						</div>
					</div>
					<div className="row">
						<div className="two third">
							<img alt="project" src={this.getPicture(22)}/>
						</div>
						<div className="third">
							<div className="top">
								<img alt="project" src={this.getPicture(23)}/>
							</div>
							<div className="bottom">
								<img alt="project" src={this.getPicture(24)}/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="half">
							<img alt="project" src={this.getPicture(25)}/>
						</div>
						<div className="half">
							<img alt="project" src={this.getPicture(26)}/>
						</div>
					</div>
					<div className="row">
						<div className="third">
							<img alt="project" src={this.getPicture(27)}/>
						</div>
						<div className="two third">
							<img alt="project" src={this.getPicture(28)}/>
						</div>
					</div>
					<div className="row">
						<div className="half">
							<img alt="project" src={this.getPicture(29)}/>
						</div>
						<div className="half">
							<img alt="project" src={this.getPicture(30)}/>
						</div>
					</div>
					<div className="row">
						<div className="two third">
							<img alt="project" src={this.getPicture(31)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(32)}/>
						</div>
					</div>
					<div className="row">
						<div className="third">
							<div className="top">
								<img alt="project" src={this.getPicture(33)}/>
							</div>
							<div className="bottom">
								<img alt="project" src={this.getPicture(34)}/>
							</div>
						</div>
						<div className="two third">
							<img alt="project" src={this.getPicture(35)}/>
						</div>
					</div>
					<div className="row">
						<div className="half">
							<img alt="project" src={this.getPicture(36)}/>
						</div>
						<div className="half">
							<img alt="project" src={this.getPicture(37)}/>
						</div>
					</div>
					<div className="row three">
						<div className="third">
							<img alt="project" src={this.getPicture(38)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(39)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(40)}/>
						</div>
					</div>
					<div className="row">
						<div className="two third">
							<img alt="project" src={this.getPicture(41)}/>
						</div>
						<div className="third">
							<div className="top">
								<img alt="project" src={this.getPicture(42)}/>
							</div>
							<div className="bottom">
								<img alt="project" src={this.getPicture(43)}/>
							</div>
						</div>
					</div>
					<div className="row three">
						<div className="third">
							<img alt="project" src={this.getPicture(44)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(45)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(46)}/>
						</div>
					</div>
					<div className="row">
						<div className="half">
							<img alt="project" src={this.getPicture(47)}/>
						</div>
						<div className="half">
							<img alt="project" src={this.getPicture(48)}/>
						</div>
					</div>
					<div className="row">
						<div className="third">
							<div className="top">
								<img alt="project" src={this.getPicture(49)}/>
							</div>
							<div className="bottom">
								<img alt="project" src={this.getPicture(50)}/>
							</div>
						</div>
						<div className="two third">
							<img alt="project" src={this.getPicture(51)}/>
						</div>
					</div>
					<div className="row">
						<div className="two third">
							<img alt="project" src={this.getPicture(52)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(53)}/>
						</div>
					</div>
					<div className="row three">
						<div className="third">
							<img alt="project" src={this.getPicture(54)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(55)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(56)}/>
						</div>
					</div>
					<div className="row">
						<div className="third">
							<div className="top">
								<img alt="project" src={this.getPicture(57)}/>
							</div>
							<div className="bottom">
								<img alt="project" src={this.getPicture(58)}/>
							</div>
						</div>
						<div className="two third">
							<img alt="project" src={this.getPicture(59)}/>
						</div>
					</div>
					<div className="row">
						<div className="two third">
							<img alt="project" src={this.getPicture(60)}/>
						</div>
						<div class="third">
							<img alt="project" src={this.getPicture(61)}/>
						</div>
					</div>
					<div className="row three">
						<div className="third">
							<img alt="project" src={this.getPicture(62)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(63)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(64)}/>
						</div>
					</div>
					<div className="row">
						<div className="two third">
							<img alt="project" src={this.getPicture(65)}/>
						</div>
						<div className="third">
							<div className="top">
								<img alt="project" src={this.getPicture(66)}/>
							</div>
							<div className="bottom">
								<img alt="project" src={this.getPicture(67)}/>
							</div>
						</div>
					</div>
					<div className="row three">
						<div className="third">
							<img alt="project" src={this.getPicture(68)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(69)}/>
						</div>
						<div className="third">
							<img alt="project" src={this.getPicture(70)}/>
						</div>
					</div>
				</div>
			);
    }
}

export default Home;
