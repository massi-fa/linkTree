import React from "react";
import styled from "styled-components/macro";

import spotify from "../res/spotify5.svg";
import youtube from "../res/youtube.svg";
import instagram from "../res/instagram.svg";
import sfondo from "../res/sfondo.jpg";

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	background: url(${(props)=>props.imgUrl});
	background-repeat: no-repeat;
	background-size: cover;  
`
const Button1 = styled.a`
	outline: none;
  border: 0;
	margin: auto auto 25px auto;
	background-color: transparent;
`;
const Button2 = styled.a`
  outline: none;
  border: 0;
	margin: 25px auto 25px auto;
	background-color: transparent;
`;
const Button3 = styled.a`
  outline: none;
  border: 0;
	margin: 25px auto auto auto;
	background-color: transparent;
`;
const Img = styled.img`
	height: 20vh;
	filter: drop-shadow(0 0 0.75rem #aabc);
	&:hover{
		transform: scale(1.5);
	};
`;

const H1 = styled.h1`
	color: white;
  font-size: 25px;
  margin: 0px 10px 5px auto;
	font-family: 'Sriracha', cursive;
`;

const Home = () => (
	<Container imgUrl={sfondo}>
		<Button1 href='https://www.youtube.com/channel/UC2XNU54hQLacLN89_z2xkeA'>
			<Img src={youtube} alt="Error"/>	
		</Button1>
		<Button2 href='https://open.spotify.com/artist/4jpSaw00mW1r415vcQUDNQ?si=LZT9dc_cRcaGwYu5hFHF5Q'>
			<Img src={spotify} alt="Error"/>	
		</Button2>
		<Button3 href='https://www.instagram.com/rickypino/'>
			<Img src={instagram} alt="Error"/>
		</Button3>
		<H1>Ricky Pino</H1>
	</Container>
);

export default Home;
