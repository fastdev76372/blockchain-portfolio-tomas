import Link from 'next/link';
import React from 'react';
import Head from "next/head"
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillSkype } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  
  <Container>
  
    <Head>
      <link rel="shortcut icon" href="/rocket.png" />
      <title>Tomas Portfolio</title>
    </Head>
  
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <SiEthereum size="3rem" /> <span>PORTFOLIO</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>🚀Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>👨‍💻Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>📃About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/tomaswinner/">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/tomas-lewis-0777/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://web.skype.com/live:.cid.3dd99cd837420e07">
          <AiFillSkype size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
