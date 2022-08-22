import {ReactElement, Suspense} from 'react';
import {Personalization, Slot} from '@croct/plug-react';
import {CroctButton} from './CroctButton';
import {SlotContainer, Container, BtnContainer, DocsLink} from './Style'

type HomeBanner = {
  title: string,
  subtitle: string,
  cta: {
      label: string,
      link: string,
  },
};

function App(): ReactElement  {
  return (
    <Container>
      <Suspense fallback="✨ Personalizing...">
      <Personalization expression="user's persona">
      {(hasPersona: boolean) => hasPersona
      ? <Slot id="home-banner">
          {({title, subtitle, cta}: HomeBanner) => (
            <SlotContainer>
              <strong>{title}</strong>
              <p>{subtitle}</p>
              <a href={cta.link}>{cta.label}</a>
            </SlotContainer>
          )}
        </Slot>
      : <DocsLink href="/">View Docs</DocsLink>
      }
      </Personalization>
      </Suspense>

      <h4>✨ Set your custom persona:</h4>
      <BtnContainer>
        <CroctButton persona="developer">Developer</CroctButton>
        <CroctButton persona="marketer">Marketer</CroctButton>
        <CroctButton persona="growth-hacker">Growth Hacker</CroctButton>
        <CroctButton persona={null}>None</CroctButton>
      </BtnContainer>
    </Container>
  )
}

export default App
