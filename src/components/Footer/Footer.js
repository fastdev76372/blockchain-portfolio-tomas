import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillSkype } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>📞 Call</LinkTitle>
          <LinkItem href="tel:+17273779840">+1 727 377 9840</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>📧 Email</LinkTitle>
          <LinkItem href="mailto:tomascool0777@gmail.com">
            tomascool0777@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>💡Innovating one project at a time🔮</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/tomaswinner/">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="https://www.linkedin.com/in/shiva-shanmuganathan/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/shanshiva1">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons> */}
           <SocialIcons href="live:.cid.3dd99cd837420e07">
            <AiFillSkype size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
