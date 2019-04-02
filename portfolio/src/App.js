import React, { Component } from 'react';
import { Typography, Avatar, Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import ScrollspyNav from 'react-scrollspy-nav';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const SidePaneLinkCss = css`
	color: #dddddd;
	&:hover {
		color: #16a422;
	}
	font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
		sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
	display: flex;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	letter-spacing: 0.05rem;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 500;
	letter-spacing: 0.05rem;
	padding-top: 7px;
`;

const styles = {
	sidePane: {
		textAlign: 'center',
		backgroundColor: '#292828',
		position: 'fixed',
		top: 0,
		left: 0,

		width: '12rem'
	},
	sidePaneAvatar: {
		width: '92px',
		height: '92px',
		marginTop: '9rem',
		border: 'solid 0.3rem #16a422'
	}
};

class App extends Component {
	render() {
		return (
			// <React.Fragment>
			// 	{/* Desktop View */}
			// 	<Grid container direction="column" style={{height: "100vh"}}>
			// 	<Hidden xsDown>
			// 		{/* Side Pane */}
			// 			<Grid item xs={12}>
			// 				<div style={styles.sidePane}>
			// 					<div
			// 						style={{
			// 							marginLeft: 'auto',
			// 							marginRight: 'auto'
			// 						}}
			// 					>
			// 						{/* Profile image */}
			// 						<Avatar
			// 							style={styles.sidePaneAvatar}
			// 							src="https://avatars1.githubusercontent.com/u/42393962?s=460&v=4"
			// 							alt="Saud Tauqeer Profile image"
			// 						/>
			// 					</div>
			// 					<div>

			// 					</div>
			// 				</div>
			// 			</Grid>
			// 		</Grid>
			// 	</Hidden>

			// 	{/* Mobile view */}
			// 	<Hidden smUp>
			// 		<Typography>Mobile</Typography>
			// 	</Hidden>
			// </React.Fragment>
			<React.Fragment>
				{/* <Hidden xsDown> */}
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					style={{
						backgroundColor: '#292828',
						height: '100vh',
						width: '12rem',
						position: 'absolute',
						paddingBottom: '220px'
					}}
				>
					<Grid item>
						<Avatar
							style={styles.sidePaneAvatar}
							src="https://avatars1.githubusercontent.com/u/42393962?s=460&v=4"
							alt="Saud Tauqeer Profile image"
						/>
						<Grid item style={{ textAlign: 'center' }}>
							<ScrollspyNav
								scrollTargetIds={[ 'about', 'skills', 'experience', 'projects', 'learning' ]}
								activeNavClass="is-active"
							>
								<Typography css={SidePaneLinkCss} href="#about">
									About
								</Typography>

								<Typography css={SidePaneLinkCss} href="#skills">
									Skills
								</Typography>

								<Typography css={SidePaneLinkCss} href="#experience">
									Experience
								</Typography>

								<Typography css={SidePaneLinkCss} href="#projects">
									Projects
								</Typography>

								<Typography css={SidePaneLinkCss} href="#learning">
									learning
								</Typography>
							</ScrollspyNav>
						</Grid>
					</Grid>
				</Grid>
				{/* </Hidden> */}
			</React.Fragment>
		);
	}
}

export default App;
