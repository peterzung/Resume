import React, { Component } from 'react';
import { Typography, Avatar, Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import ScrollspyNav from 'react-scrollspy-nav';
import Styled from 'styled-components';

const PanelLink = Styled.a`
color: #dddddd;
&:hover {
    color: #cfbaba8f;
  };
  font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
		sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  text-decoration: none;

`;

const styles = {
	sidePane: {
		textAlign: 'center',
		backgroundColor: '#292828',
		position: 'fixed',
		top: 0,
		left: 0,
		display: 'flex',
		flexDirection: 'column',
		width: '12rem',
		height: '100vh'
	},
	sidePaneAvatar: {
		width: '92px',
		height: '92px',
		marginTop: '4rem',
		border: 'solid 0.3rem #16a422'
	}
};

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* Desktop View */}
				<Hidden xsDown>
					{/* Side Pane */}
					<div style={styles.sidePane}>
						<div
							style={{
								marginLeft: 'auto',
								marginRight: 'auto'
							}}
						>
							{/* Profile image */}
							<Avatar
								style={styles.sidePaneAvatar}
								src="https://avatars1.githubusercontent.com/u/42393962?s=460&v=4"
								alt="Saud Tauqeer Profile image"
							/>
						</div>
						<div>
							<ScrollspyNav
								scrollTargetIds={[ 'about', 'skills', 'experience', 'projects', 'learning' ]}
								activeNavClass="is-active"
							>
								<PanelLink href="#about">About</PanelLink>

								<PanelLink href="#skills">Skills</PanelLink>

								<PanelLink href="#experience">Experience</PanelLink>

								<PanelLink href="#projects">Projects</PanelLink>

								<PanelLink href="#learning">learning</PanelLink>
							</ScrollspyNav>
						</div>
					</div>
					<Grid container />
				</Hidden>

				{/* Mobile view */}
				<Hidden smUp>
					<Typography>Mobile</Typography>
				</Hidden>
			</div>
		);
	}
}

export default App;
