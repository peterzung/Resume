import React, { Component } from 'react';
import { Typography, Avatar, Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import ScrollspyNav from 'react-scrollspy-nav';
import Scrollbar from 'react-scrollbars-custom';

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

					{/* Header Content */}
					<Grid
						container
						direction="column"
						style={{
							maxWidth: '75rem',
							paddingLeft: '13em'
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

							<Typography>
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
							{/* social links */}
							<Grid item>
								<a
									href="https://drive.google.com/file/d/1jJjONanUisBlDVYVE6HsjABFPecwatNL/view?usp=sharing"
									target="blank"
								>
									<img alt="PDF resume icon" src="/img/svg/pdf.svg" width="50" height="55" />
								</a>
								<a class="mb-3" href="https://www.linkedin.com/in/saud-tauqeer" target="blank">
									<img alt="LinkedIn icon" src="./img/svg/linkedin.svg" width="50" height="55" />
								</a>
								<a href="https://github.com/SaudTauqeer" target="blank">
									<img alt="Github" src="/img/svg/github.svg" width="50" height="55" />
								</a>
								<a href="https://twitter.com/@Saud_Tauqeer" target="blank">
									<img alt="Twitter" src="./img/svg/twitter.svg" width="50" height="55" />
								</a>
								<a href="https://www.facebook.com/supreme381" target="blank">
									<img alt="Messenger icon" src="./img/svg/messenger.svg" width="50" height="55" />
								</a>
							</Grid>
							{/* Scroll Container  */}
							<Grid
								container
								style={{
									padding: '10px 10px 6em 10px',
									height: '100vh',
									overflowY: 'auto'
								}}
							>
								<Grid item xs={12}>
									<Scrollbar height={'100vh'}>
										<Grid style={{ padding: '4px 10px 10px 10px' }}>
											<Typography>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus et
												metus sagittis scelerisque. Morbi malesuada quam in mauris dapibus, sit
												amet ullamcorper sem tincidunt. Praesent sed felis quam. Aliquam porta
												vel justo id interdum. Fusce tincidunt dolor est, nec dignissim felis
												accumsan placerat. Cras tempus lobortis commodo. Duis finibus
												sollicitudin augue, sed bibendum est vulputate sit amet. Praesent
												laoreet elit vel viverra efficitur. Aliquam ut lacinia lacus. Aenean
												venenatis in elit quis varius. Nullam sapien nulla, condimentum ut lacus
												ut, blandit facilisis arcu. Vestibulum augue ante, tempus vitae sapien
												et, commodo porta quam. Maecenas dictum nulla massa, a egestas lectus
												cursus id. Morbi vel lorem in ipsum convallis sodales in quis arcu.
												Donec molestie ante nibh, sed auctor purus pulvinar sit amet. Cras sed
												bibendum leo. Cras nunc risus, scelerisque vel neque nec, tempus
												tincidunt ligula. Maecenas condimentum sodales libero, sit amet sodales
												est iaculis quis. Donec malesuada ligula orci, nec sollicitudin tortor
												mollis sed. Nunc eu ligula nulla. Lorem ipsum dolor sit amet,
												consectetur adipiscing elit. Sed ut pretium leo. Sed sapien nunc,
												placerat consequat fermentum sit amet, aliquam vulputate dolor. Nullam
												eu felis eu leo faucibus aliquet. Nunc placerat imperdiet pretium.
												Curabitur interdum leo semper molestie ultricies. Donec augue lectus,
												lobortis ut sollicitudin eu, rutrum at lectus. Nunc varius elit lacus,
												eu cursus libero pellentesque quis. Integer non tempor justo. Quisque at
												commodo risus. Nam pharetra et nisi vitae dictum. Duis in nisi sit amet
												dui malesuada pellentesque. Nullam ipsum sem, viverra vitae leo et,
												finibus aliquet nulla. Phasellus finibus dictum pulvinar. Pellentesque a
												lectus id tortor dictum scelerisque sed et nunc. Vivamus lacinia magna
												quis est varius, id commodo urna commodo. Suspendisse consequat
												ullamcorper quam, sit amet dictum lectus varius non. Sed suscipit dolor
												non aliquet aliquam. In turpis metus, tincidunt vitae tortor molestie,
												blandit pellentesque elit. Vestibulum feugiat nunc eget sapien tempus
												pellentesque. Mauris commodo justo a purus facilisis blandit. Mauris
												eget bibendum erat, non consectetur velit. Aliquam tempor id est sed
												bibendum. Vestibulum congue ex sem, ut cursus ante congue non. Phasellus
												luctus molestie venenatis. Vestibulum mi mi, euismod nec fringilla et,
												viverra in diam. Donec elementum diam a ante tristique finibus. Mauris
												sed diam quis leo bibendum fringilla vel ut ex. Nunc venenatis lectus
												tortor, a dictum justo vestibulum molestie. Aenean nec elementum odio,
												ac posuere lectus. Nam eu tellus mauris. Mauris sodales enim in
												pellentesque dignissim. Sed ultrices vestibulum sem ut sodales.
												Vestibulum tellus lacus, aliquet quis elit ac, tempor vulputate tortor.
												Etiam gravida urna at nisl posuere condimentum. Phasellus massa nisl,
												elementum aliquet eros sit amet, hendrerit volutpat ligula. Duis ac
												mauris libero. In tempus dictum turpis ac egestas. Nam interdum maximus
												augue a dictum. Phasellus at rhoncus turpis. Vivamus accumsan sapien in
												sapien malesuada, id maximus diam ornare. Morbi et lorem eu nulla
												convallis commodo. Nunc a urna neque. Donec non condimentum odio, eu
												congue mauris. Pellentesque nec eros malesuada, ultricies orci in,
												efficitur tellus. Proin nec laoreet tellus, ac pretium turpis. Maecenas
												luctus porta velit. In viverra, ante ultricies semper sollicitudin, nisl
												tortor facilisis mi, eu consectetur nibh mi quis justo. Praesent at
												nulla ut sem ultrices pharetra. Vivamus id turpis ultrices ipsum mollis
												rutrum et nec nulla. Integer eu fermentum neque. Vivamus elementum
												imperdiet erat eu rhoncus. Morbi vitae nisl mattis, auctor ante at,
												consequat nisi. Duis placerat suscipit varius. Sed mollis sagittis
												tortor et semper. Duis non arcu bibendum, fermentum risus eleifend,
												porttitor dui. Nam at porta orci, a blandit nulla. Mauris molestie
												malesuada hendrerit. Vivamus sem purus, volutpat quis ex sed, maximus
												tempor libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Etiam interdum commodo tellus, sed tincidunt nisi vestibulum fringilla.
												Nulla eu tortor et tellus pretium feugiat a id ex. Ut id massa turpis.
												Morbi eu laoreet magna, a lobortis mi. Sed auctor ultrices purus, ut
												vehicula ipsum aliquam in. Donec ac pulvinar tellus, eget molestie erat.
												Aenean in arcu non ligula tempus faucibus. Cras sed euismod elit.
												Vivamus interdum diam nec odio sagittis convallis. Sed ac sapien nec
												arcu pellentesque semper eget molestie dolor. Pellentesque lacinia, nibh
												ac vulputate finibus, lacus nisi cursus tortor, eget maximus urna nunc
												in velit. Phasellus a sem erat. Nam bibendum sollicitudin ex et laoreet.
												In dictum felis et erat commodo, tristique blandit lectus pretium.
												Praesent metus nisi, hendrerit nec bibendum in, tincidunt mollis risus.
												Maecenas luctus pharetra tincidunt. Curabitur ultrices nisl nec quam
												accumsan, at sollicitudin diam vehicula. Proin erat eros, accumsan a
												volutpat ac, euismod ac lorem. Donec non sapien eu arcu posuere molestie
												quis sit amet odio. Nulla facilisi. Nam lobortis neque at elit eleifend,
												eget finibus turpis tincidunt. Proin laoreet scelerisque est, id euismod
												lorem feugiat vel. Phasellus fringilla augue condimentum rhoncus congue.
												Nulla facilisi. Mauris porttitor rhoncus neque, at ornare arcu feugiat
												nec. Proin aliquam nulla augue, et consequat nulla ultrices id.
												Suspendisse eu turpis et tellus efficitur commodo in id risus. Maecenas
												in sollicitudin augue. Donec sit amet bibendum magna. Nulla in quam ac
												nibh egestas bibendum nec quis arcu. Etiam id risus quam. Sed tellus
												magna, bibendum vel egestas et, iaculis quis felis. Praesent suscipit in
												tellus sed dignissim. Etiam tincidunt vestibulum odio. Sed volutpat sem
												erat, sit amet mollis elit cursus vel. Fusce accumsan dapibus velit,
												placerat mollis ligula ultrices a. Nullam at augue viverra, sodales
												massa a, pellentesque urna. In ornare sem in quam elementum venenatis.
												Suspendisse vehicula volutpat fringilla. Sed at sagittis lorem, non
												sagittis diam. Aliquam euismod at velit id auctor. Nam sit amet ipsum
												vitae augue facilisis posuere at id dolor. Donec iaculis mauris eros,
												sit amet molestie felis sagittis eu. Cras vehicula eu augue at
												facilisis. Mauris vestibulum lacus vel metus aliquam, quis tempus risus
												viverra. Vestibulum volutpat malesuada iaculis. Duis vitae laoreet orci.
												Phasellus malesuada tellus non lacus volutpat ornare. Sed tincidunt
												augue sapien, a fringilla metus lacinia et. Morbi pellentesque tincidunt
												ligula. Phasellus magna velit, interdum eu odio id, suscipit aliquam
												libero. Sed maximus et sapien quis fermentum. Mauris imperdiet sit amet
												diam eget luctus. Mauris quis pulvinar sem, non convallis arcu. Donec
												ullamcorper odio et urna placerat, cursus porta ex interdum. Donec
												sodales lorem erat, at volutpat ipsum vehicula non. Nullam facilisis
												eleifend tristique. Maecenas tellus purus, pulvinar sed ultrices et,
												pretium tristique diam. Vestibulum a urna volutpat, cursus turpis eget,
												hendrerit quam. Maecenas blandit nisi eget ex iaculis congue. Donec
												porttitor eget tellus a commodo. Mauris dapibus mollis vestibulum.
												Aliquam at tellus nulla. Aliquam erat volutpat. Aliquam fringilla arcu
												sit amet ante bibendum egestas. Curabitur eu nunc finibus, euismod est
												a, placerat massa. Suspendisse et mollis mi. Integer placerat, metus et
												ultrices laoreet, arcu ex viverra metus, congue congue ipsum diam eget
												nunc. Nulla vestibulum nunc a sapien consectetur dignissim. Duis
												eleifend tempor dui, et porta lacus. Cras ultrices blandit tortor in
												luctus. Morbi tristique diam nec ligula elementum, eu sodales sem
												dapibus. Ut pulvinar augue et porttitor semper. Nunc tincidunt sed
												tortor at blandit. Nunc molestie orci vel ipsum auctor, quis viverra
												dolor suscipit. Sed interdum ultricies posuere. Vivamus viverra sit amet
												arcu eget tempor. Vestibulum tincidunt viverra faucibus. Integer at
												sapien facilisis, lobortis elit et, vestibulum nisl. Pellentesque
												facilisis congue elit. Phasellus posuere vestibulum nibh, convallis
												accumsan ante semper vel. Duis sit amet nisl lacus. Nulla id dui justo.
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non ex nec
												neque sollicitudin tempus. Curabitur vel est vel justo vestibulum
												maximus porta sed metus. Phasellus lorem mi, placerat sed lectus quis,
												varius luctus velit. Nulla facilisi. Nunc ex dui, pellentesque non
												tempus a, efficitur nec diam. Aliquam vel tempus nulla. Vivamus
												dignissim tellus sed efficitur lobortis. Donec odio enim, tempus eu
												auctor id, molestie nec odio. Suspendisse congue et ante eu tincidunt.
												Cras quis rutrum elit. Donec sed varius tellus. Etiam eget mollis massa.
												Aliquam consectetur varius tellus, bibendum finibus magna egestas nec.
												Etiam risus magna, egestas at consequat eget, pellentesque sit amet
												metus. Cras eget porta orci. Vivamus rhoncus eget tellus consequat
												porttitor. Cras commodo risus vitae nibh tempus, tincidunt malesuada
												erat sagittis. Vivamus leo nulla, rhoncus quis euismod in, euismod a
												velit. Vivamus eu nisl elit. Nullam id placerat turpis. Pellentesque
												congue mauris nec sapien convallis porttitor. Praesent ut consequat
												felis, a congue odio. Curabitur eu metus ipsum. Morbi ac commodo odio,
												quis consequat dui. Nunc sodales, arcu eget lobortis mollis, massa nunc
												dictum nibh, sit amet tempus neque justo et leo. Ut eu ligula
												condimentum, maximus lorem nec, maximus dui. Integer faucibus sodales
												nibh, quis aliquet justo. Maecenas tortor massa, ullamcorper a massa
												sed, pharetra hendrerit lacus. Sed sit amet dictum augue. Etiam sem est,
												viverra sed porta in, finibus id sapien. Phasellus maximus nisl sit amet
												egestas luctus. Vestibulum ipsum nulla, eleifend ultricies dictum ut,
												dictum vitae sem. Nunc scelerisque, nunc id feugiat porta, turpis nibh
												sollicitudin libero, ut pellentesque odio lorem vitae lorem. Donec
												consectetur laoreet nisl nec euismod. Aliquam blandit feugiat justo,
												quis rutrum est viverra ac. Pellentesque fermentum erat at libero
												consequat vulputate. Pellentesque molestie sagittis ligula, non
												sollicitudin arcu aliquet at. Sed blandit mollis bibendum. Aenean
												feugiat urna sit amet ligula venenatis, sit amet convallis ligula
												cursus. Phasellus at sodales neque. Integer pharetra est id augue
												lacinia convallis. Vivamus et nunc mauris. Phasellus ante lectus,
												condimentum a commodo a, malesuada sed nisi. Phasellus imperdiet tempus
												velit a interdum. Etiam hendrerit egestas odio. Aliquam id ipsum tellus.
												Aenean in tincidunt dui. Phasellus in varius sapien, at pellentesque mi.
												Mauris ante justo, ultricies eu ligula et, consequat pellentesque massa.
												Aliquam erat volutpat. In et elit et leo bibendum vehicula suscipit id
												est. Maecenas iaculis ipsum vitae nisl malesuada varius. Vestibulum
												luctus urna quis purus ullamcorper venenatis. Donec in scelerisque
												tellus, a sodales lacus. Sed sed suscipit orci. Curabitur in vulputate
												ex. Nulla facilisi. Suspendisse congue maximus magna, quis lacinia enim
												imperdiet eu. Aliquam erat tellus, dictum eu ligula non, tempus accumsan
												ante. Maecenas aliquet nisl lectus, et porta libero cursus vel. Nunc sed
												sem nunc. Sed vitae hendrerit tellus. Vestibulum lacinia sagittis mi,
												pretium egestas sapien molestie vel. Nam eu porttitor nunc, sed blandit
												purus. Nunc lacinia fermentum lorem quis commodo. Nunc suscipit feugiat
												lectus in semper. In at quam laoreet, lacinia risus eget, porttitor
												diam. Fusce maximus a neque vel sodales. Nam luctus quis tortor et
												suscipit. Donec tincidunt nunc id sem laoreet rhoncus. Proin nibh
												turpis, lobortis sit amet dui quis, gravida vestibulum urna. Aenean
												interdum nunc eu lectus commodo feugiat sed et tellus. Integer nec massa
												in nibh euismod porttitor tempor eu libero. Sed pellentesque ut orci et
												dapibus. Nunc maximus dapibus pharetra. Etiam accumsan tellus quis enim
												lobortis laoreet. Pellentesque nisl orci, posuere blandit dolor sit
												amet, lobortis vehicula dui. Fusce hendrerit tellus id diam tempor
												feugiat. Proin vestibulum viverra felis eget bibendum. Mauris sodales
												odio et nisi vestibulum, id eleifend nisl lacinia. Morbi ut tincidunt
												leo. Nullam tortor leo, imperdiet vitae mollis in, suscipit nec massa.
												Cras lobortis consequat nulla in lacinia. Pellentesque blandit ut nulla
												quis mattis. Donec quis neque eros. Curabitur molestie faucibus sapien
												sed tincidunt. Proin eu ligula non elit interdum tristique tincidunt sed
												orci. Quisque placerat ipsum nisi, quis venenatis nisl vulputate ac.
												Fusce quis turpis nec quam ultricies aliquam. Sed tempor ultricies
												lacus, a euismod ligula consectetur sit amet. Curabitur interdum rutrum
												massa, et viverra lacus. Nullam eleifend felis id mauris pulvinar
												volutpat. Nulla lobortis dolor id maximus posuere. Donec at posuere
												sapien. Fusce sed dolor condimentum, consectetur ex at, sagittis nisi.
												Morbi pretium scelerisque nisi sit amet tempor. Pellentesque ut volutpat
												orci. Integer et lacus a felis tempor facilisis non et diam. Sed tempor
												libero lacus, sit amet ultricies enim volutpat eu. Aenean laoreet, orci
												porttitor porttitor rutrum, diam dui pellentesque dolor, ac tincidunt
												nibh lectus nec orci. Fusce et sollicitudin nisl, vitae lobortis lacus.
												Nam hendrerit non lacus vitae auctor. Morbi ac odio turpis. Duis quis
												sapien ante. Phasellus non pretium mi, eu pharetra diam. Maecenas libero
												velit, eleifend in felis auctor, euismod feugiat risus. Curabitur
												elementum, tellus sit amet sollicitudin feugiat, nunc lacus consequat
												diam, et fringilla risus nisi vitae justo. Cras non blandit libero, sit
												amet ultricies sapien. Morbi id suscipit quam, in aliquam orci. Donec
												suscipit dapibus purus sit amet faucibus. Morbi et lobortis turpis, eget
												congue odio. Nulla ac velit pulvinar, vulputate augue a, bibendum ex.
												Aenean nec aliquet risus. In vitae consequat nunc. Mauris sed purus id
												velit gravida varius. Nunc posuere dignissim turpis. Maecenas nec arcu
												vitae mauris convallis suscipit. Praesent augue magna, posuere a orci
												eu, porttitor tristique arcu. Curabitur placerat imperdiet magna sit
												amet iaculis. Maecenas egestas vitae eros cursus laoreet. Nunc vel quam
												aliquet sapien dapibus porta quis eu diam. Suspendisse potenti. Donec
												vitae sem sollicitudin, eleifend nisi et, lacinia elit. Etiam cursus
												placerat rhoncus. Donec mi eros, sodales a rhoncus ac, semper ut urna.
												Pellentesque commodo commodo vestibulum. Etiam tincidunt euismod ante.
												Maecenas eu lectus facilisis, dapibus sem id, ultricies tortor.
												Vestibulum interdum quis tortor ac aliquet. Nulla facilisi. Duis porta
												ipsum quis leo lobortis ultrices. Donec convallis commodo ex, eget
												molestie purus mollis vel. Class aptent taciti sociosqu ad litora
												torquent per conubia nostra, per inceptos himenaeos. Suspendisse
												elementum hendrerit consectetur. Praesent convallis ipsum urna, vel
												tincidunt dolor sagittis non. Vestibulum et lacus ut ex semper bibendum
												sit amet non augue. Nunc diam eros, pulvinar ac diam in, pellentesque
												volutpat turpis. Ut non risus sed nunc mattis faucibus. Fusce convallis
												eleifend pulvinar. Integer a velit sed dolor consectetur laoreet.
												Integer aliquam non velit vel fringilla. Ut sollicitudin enim et lectus
												fermentum, sed egestas ex vulputate. Cras sed augue mi. Pellentesque
												dignissim porta arcu, sed elementum mauris ullamcorper eu. Morbi in
												laoreet libero, eu cursus diam. Sed congue malesuada magna, et vulputate
												purus volutpat vitae. Phasellus eleifend odio nec urna tempor maximus
												vel a elit. Proin in imperdiet velit. Aliquam eu ullamcorper justo.
												Integer nec arcu maximus, luctus lectus in, porttitor est. In euismod
												vestibulum sollicitudin. Aenean ac nisi commodo turpis iaculis eleifend
												at id tortor. Sed sed felis vestibulum, elementum metus vitae, luctus
												ipsum. Fusce nisl lectus, feugiat ac massa in, varius elementum lorem.
												Nullam imperdiet, mauris eget auctor varius, sem augue pulvinar enim,
												eget eleifend mi tellus id velit. In efficitur justo ut erat pretium
												convallis. Donec purus purus, aliquam sit amet viverra a, scelerisque at
												nisl. Praesent tristique malesuada turpis, quis laoreet nibh commodo et.
												Fusce tristique enim dolor, vel eleifend tortor rhoncus eget. Morbi non
												lacus nulla. Sed laoreet eu nulla luctus ultrices. Vestibulum posuere
												pretium elit ut mattis. Integer ac tincidunt metus. Nullam mauris
												turpis, facilisis eu velit in, semper lobortis elit. Sed vestibulum mi
												dolor, in porttitor purus eleifend ac. Duis in varius odio, tempus
												faucibus justo. Maecenas sed arcu et arcu molestie suscipit porttitor
												vitae arcu. Vestibulum ex ligula, suscipit eu molestie non, vehicula non
												diam. Sed hendrerit eleifend tempor. Duis ullamcorper nisi id lacus
												eleifend, et elementum erat eleifend. Curabitur euismod, enim nec
												euismod porttitor, elit magna suscipit neque, a elementum turpis ante
												vitae nibh. Nunc sed pretium lorem, a congue libero. Suspendisse
												elementum lorem id nisl varius viverra. Nunc aliquet maximus ante, in
												aliquam felis commodo nec. Vivamus maximus justo eget tincidunt luctus.
												Etiam non ipsum nunc. Aliquam ullamcorper augue a varius pharetra. Proin
												lobortis pulvinar ipsum, eu consequat neque scelerisque ut. Nam a velit
												euismod, tincidunt arcu nec, pharetra libero. Morbi eleifend leo ante,
												non commodo risus ultricies ac. Nullam bibendum est non rutrum
												porttitor. Nam congue, justo rutrum hendrerit gravida, leo dolor auctor
												libero, eu imperdiet arcu turpis porttitor dolor. Vivamus justo tellus,
												vestibulum vitae congue nec, viverra sit amet eros. Nam eu augue et eros
												dignissim sagittis at at metus. Suspendisse feugiat, dolor vel sodales
												gravida, sapien augue varius felis, sit amet imperdiet augue quam vitae
												lectus. Aenean feugiat arcu non tempus porta. Mauris consequat magna
												lacus, ac mattis tortor tristique ac. Fusce semper lacinia nulla id
												imperdiet. Sed a pulvinar lorem, et placerat nisi. Pellentesque ut
												lectus quam. In molestie at tellus id placerat. Curabitur porttitor
												suscipit felis, non feugiat ligula consequat eu. Mauris vehicula ante ac
												ipsum iaculis, nec placerat erat sollicitudin. Pellentesque vel congue
												ipsum, vel eleifend ante. Nullam ac laoreet felis. Sed mattis, tellus
												quis luctus fringilla, turpis nulla laoreet leo, et convallis ligula sem
												laoreet purus. Ut lobortis justo a molestie volutpat. Nunc consequat
												nibh vitae dui auctor vulputate. Nam euismod bibendum neque, accumsan
												lacinia leo fringilla id. Nunc congue nisl eget leo vehicula, eu posuere
												lacus pellentesque. Morbi ultricies ipsum non nulla suscipit laoreet. Ut
												commodo justo pellentesque tellus feugiat, id facilisis sapien varius.
												Donec quam augue, aliquam ultricies suscipit a, dapibus sit amet nulla.
												Morbi pulvinar porttitor metus, quis ullamcorper mi ullamcorper sit
												amet. Donec sodales felis sit amet dui tempor, et tincidunt libero
												vehicula. Aenean sit amet felis quis quam luctus imperdiet nec at nibh.
												Ut a magna nulla. Sed sed neque dolor. Mauris consectetur odio eget arcu
												posuere, sed condimentum lacus dictum. Sed at auctor massa. Quisque
												ornare, felis ac vestibulum iaculis, velit justo condimentum purus, ut
												fermentum nulla lectus quis odio. Proin iaculis rutrum elit, vel
												hendrerit leo porttitor ac. Vivamus varius fermentum tortor, eu blandit
												quam vulputate vel. Nunc id ex augue. Donec ultrices commodo massa, ut
												luctus elit faucibus quis. Etiam eget est cursus, rhoncus lectus ut,
												accumsan sapien. Mauris consectetur nunc eget ex gravida facilisis. Ut
												ornare maximus est a eleifend. Suspendisse scelerisque aliquam rhoncus.
												Quisque pharetra consectetur arcu eget consectetur. Quisque non mollis
												massa. Morbi aliquet tincidunt dolor. Mauris in dolor tincidunt, feugiat
												ligula ut, vulputate urna. Nam consectetur luctus tortor, non aliquet
												ipsum faucibus id. Ut at suscipit ex. Vestibulum quis eros erat. Duis
												pretium mattis quam, in posuere lectus semper nec. Etiam tincidunt enim
												dapibus mauris vehicula maximus. Quisque sem diam, porta id finibus
												eget, dictum non velit. Maecenas est sem, sollicitudin ac ipsum sed,
												luctus posuere augue. In hac habitasse platea dictumst. Mauris leo erat,
												rutrum et quam posuere, pellentesque pharetra leo. Vestibulum enim
												nulla, egestas vitae tellus imperdiet, tristique elementum ante. Nam mi
												purus, laoreet scelerisque fermentum in, dapibus non odio. Etiam cursus
												urna nec eleifend mattis. Aenean fringilla nunc odio, a pretium dui
												tempus ac. Sed sodales turpis at eros venenatis posuere. Aliquam egestas
												gravida dolor, quis gravida orci gravida quis. Praesent odio nibh,
												fringilla ac lorem ac, pharetra bibendum nibh. Nulla mollis nisl eu
												purus semper blandit. Duis vestibulum tempor dui eu elementum. Integer
												tellus justo, iaculis non consequat vitae, condimentum auctor metus.
												Etiam ligula erat, tempor ac lorem vitae, laoreet faucibus velit. Nulla
												porta orci purus, vitae tempor elit cursus vitae. Ut fringilla felis nec
												ante efficitur aliquam. Duis imperdiet neque quis hendrerit scelerisque.
												Etiam quis arcu ornare, vehicula quam a, cursus magna. Nullam tempus
												sapien arcu, at faucibus nulla consectetur eget. Etiam quis ante ac elit
												feugiat ultrices vel eget ligula. Vestibulum ante ipsum primis in
												faucibus orci luctus et ultrices posuere cubilia Curae; Duis egestas
												luctus velit eu vulputate. Donec finibus ultrices libero, a finibus
												libero posuere a. Suspendisse volutpat vulputate sem. Nam placerat quam
												imperdiet, sollicitudin velit in, finibus mauris. Morbi tristique
												pulvinar gravida. Proin sit amet sagittis elit. Maecenas auctor sodales
												tempus. Proin in est arcu. Vivamus libero dolor, mollis nec odio nec,
												auctor venenatis libero. Proin nisl libero, mattis eget elit eu, aliquet
												elementum ex. Aliquam tempor posuere congue. Vivamus dignissim tellus
												quam, eget euismod quam convallis et. Mauris eu ullamcorper felis. Duis
												pharetra ipsum ut nibh eleifend condimentum. Morbi ut elit sit amet
												tortor vestibulum posuere. Proin ut diam nec elit semper commodo.
												Quisque quam arcu, vehicula ac laoreet a, sodales luctus mi. Sed vitae
												pharetra ex, vel consequat turpis. Donec mattis sapien vitae erat
												eleifend tempus. Orci varius natoque penatibus et magnis dis parturient
												montes, nascetur ridiculus mus. Nam in mauris id nibh mattis fermentum.
												Quisque quis sapien nibh. Nunc vel diam ac arcu rhoncus auctor. In sit
												amet vehicula odio. Donec scelerisque mi vel finibus imperdiet.
												Suspendisse dapibus, nulla vitae tempor lacinia, felis mi venenatis
												enim, et interdum libero risus eget eros. Sed hendrerit lectus quis leo
												auctor, at auctor mauris interdum. In ac sem nec dui finibus molestie
												vel sed est. Nam in hendrerit eros. Etiam convallis est ut orci euismod
												fermentum. Cras nisl ex, accumsan at scelerisque at, scelerisque id
												sapien. Sed id condimentum magna, nec bibendum mauris. Nullam vel eros
												cursus, vulputate augue et, consequat libero. Vestibulum non suscipit
												est. Proin id tellus quis dui fermentum elementum. Donec in risus ut
												arcu rhoncus vehicula vitae a odio. Duis ultricies lacus at urna
												tincidunt ultricies nec a leo. Morbi vehicula vulputate semper. Aliquam
												id faucibus risus. In vulputate justo velit, tempus consectetur odio
												tempor et. Vestibulum auctor dui eu erat dictum consectetur. Nulla
												fermentum nunc velit, sit amet egestas justo porttitor id. Aliquam erat
												volutpat. Suspendisse at metus blandit, tempor nunc at, bibendum nisl.
												Praesent eu placerat velit. Aliquam rutrum turpis a nisl molestie
												vulputate. Vivamus viverra lacus enim, elementum mattis augue ultricies
												sed. Nunc luctus, tortor gravida egestas maximus, nisi urna varius
												tellus, non molestie purus ligula non metus. Donec consequat, lectus sed
												interdum facilisis, lorem ipsum gravida urna, ut pellentesque elit nunc
												id nulla. Curabitur nisi lacus, pretium eget pretium vel, efficitur
												elementum sapien. Aenean aliquam tempus vehicula. Fusce at bibendum
												augue. Nam suscipit libero in nibh molestie auctor. Curabitur in mauris
												sed urna facilisis mollis id et nunc. Pellentesque ac nibh at sem
												laoreet scelerisque id non augue. In consectetur quis est ac gravida.
												Donec dignissim leo eu ante volutpat, sed consequat purus porttitor.
												Aenean tempus ante sed euismod consequat. Donec semper est quam, a
												condimentum erat ornare eget. EEEEEEEEEEEEND
											</Typography>
										</Grid>
									</Scrollbar>
								</Grid>
							</Grid>
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
