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

	text-transform: uppercase;
	text-decoration: none;
	font-weight: 500;
	letter-spacing: 0.05rem;
	padding-top: 6px;
`;

const styles = {
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
			<React.Fragment>
				{/* Desktop View */}
				<Hidden xsDown>
					<Grid
						container
						zeroMinWidth
						direction="column"
						justify="center"
						alignItems="center"
						style={{
							backgroundColor: '#292828',
							height: '100vh',
							width: '12rem',
							position: 'absolute',
							top: '0',
							paddingBottom: '160px'
						}}
					>
						<Grid item md={12}>
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

					{/* Content Container */}
					<Grid
						container
						direction="column"
						style={{
							maxWidth: '75rem',
							paddingLeft: '14em'
						}}
					>
						<Grid item>
							<Typography
								css={css`
									padding-right: 6px;
									color: #abaeb7;
									display: inline-block;
								`}
								variant="h3"
								component="h3"
							>
								Saud
							</Typography>
							<Typography
								css={css`
									display: inline-block;
									color: #bd5d38;
								`}
								variant="h3"
								component="h3"
							>
								Tauqeer
							</Typography>

							<Typography css={css`padding-top: 2px;`}>
								Pakistan · (+92) 321-5991397 · {' '}
								<a
									css={css`
										color: #dddbdb;
										&:hover {
											color: #cfbaba8f;
										}
										text-decoration: none;
									`}
									href="mailto:saudtauqeer381@gmail.com"
								>
									saudtauqeer381@gmail.com
								</a>
							</Typography>
						</Grid>
					</Grid>
				</Hidden>

				{/* Mobile view */}
				<Hidden smUp>
					<Typography>Mobile</Typography>
				</Hidden>
			</React.Fragment>
		);
	}
}

export default App;
