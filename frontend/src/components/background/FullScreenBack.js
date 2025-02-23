import styled from 'styled-components';
import Image from 'next/image';
import TitleWithBackground from '../generic/TitleWithBackground';

const FullScreenBack = ({ src, children, titleInfo = {} }) => {
  return (
    <Container>
      <Image 
        src={src}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        style={{zIndex: -1, position: 'absolute'}}
      />
      <div style={{zIndex: 10, position: 'relative'}}>
        { children }
      </div>

      { !!titleInfo.show 
        ? <TitleWithBackground titleInfo={titleInfo}/>
        : null
      }
    </Container>
  )
}

export default FullScreenBack;

const Container = styled.div`
  position: relative; 
  min-width: 100vw; 
  min-height: 90vh;
  background-color: azure; 
  overflow-x: hidden;
`