import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

function openResumeNewTab(){
  const url = 'https://1drv.ms/b/s!AgcOQjfYnNk9bxrPhPc4Fs3-GEA?e=4jLCgZ';
  window.open(url, '_blank');
}
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Tomas Lewis
        </SectionTitle>
        <SectionText>
        🎓 New Graduate Learning & Building <br /> Full Stack Decentralized Applications
        </SectionText>
        <Button onClick={openResumeNewTab}>Download Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;