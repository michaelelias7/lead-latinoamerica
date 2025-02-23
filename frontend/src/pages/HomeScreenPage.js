import styled from 'styled-components';
import NavBar from '@/components/nav/NavBar';
import FullScreenBack from '@/components/background/FullScreenBack';
import CenterFlexContainer from '@/components/generic/CenterFlexContainer';
import TitleWithBackground from '@/components/generic/TitleWithBackground';
import FlexContentBox from '@/components/content/FlexContentBox';
import Footer from '@/components/footer/Footer';


const HomeScreenPage = () => {

  const opportunityInfo = [
    { 
      title: 'Scholarships', 
      text:'Find scholarships to help fund your educational journey.', 
      footer: 'See our Scholarship Opportunities'
    }, 
    {
      title: 'Summer', 
      text:'Find a summer opportunity that allows you to connect with peers while building on your educational and professional experience.', 
      footer: 'See our Summer Opportunities'
    }, 
    {
      title: 'Internships',
      text:'Browse through internship opportunities that will allow you to build on your professional experience.', 
      footer: 'See our Internship Opportunities'
    }, 
    {
      title: 'Programs',
      text:'Select from a broad range of programs in your community that will help you thrive.', 
      footer: 'See our Program Opportunities'
    }, 
  ]

  const recentlyPosted = [
    { 
      title: 'Opportunity 1 ', 
      text:'Check out this opportunity ', 
      footer: 'See our Scholarship Opportunities'
    }, 
    {
      title: 'Opportunity 2', 
      text:'This is another one. This information is not necessary right now.', 
      footer: 'See our Summer Opportunities'
    }, 
    {
      title: 'Opportunity 3 ',
      text:'This is the last one, ', 
      footer: 'See our Internship Opportunities'
    },  
  ]

  return (
    <>
      <NavBar />
      <FullScreenBack src='/images/javier-trueba-iQPr1XkF5F0-unsplash.jpg'>
        <PortalTitleContainer>
          <PortalTitle>Web Portal</PortalTitle>
          <PortalSubTitle>Powered by LEAD.Latinoamérica</PortalSubTitle>
        </PortalTitleContainer>

        <MainTitleContainer>
          <MainTitleFirstLine>Connecting students to</MainTitleFirstLine>
          <MainTitleSecondLine>opportunities in the community</MainTitleSecondLine>
        </MainTitleContainer>
      </FullScreenBack>

      <CenterFlexContainer backgroundColor={'#0077B6'}>
      <TitleWithBackground text={'Opportunities'} topOffset={-70}/>
        {
          opportunityInfo.map(info => <FlexContentBox 
            key={info.title} 
            size={'halves'} 
            content={info} 
            color={'white'}
            backgroundColor={"#0077B6"}
          />)
        }
      </CenterFlexContainer>

      <FullScreenBack src={'/images/hari-nandakumar-fbJr86YN574-unsplash.jpg'}>
        <TitleWithBackground text={'Recently Posted'} topOffset={100} marginBottom={true}/>
        <CenterFlexContainer padding={100} backgroundColor={'rgba(0, 0, 0, 0)'}>
          {
            recentlyPosted.map(info => <FlexContentBox 
              key={info.title} 
              size={'thirds'} 
              content={info} 
              minHeight={400}
            />)
          }
        </CenterFlexContainer>
      </FullScreenBack>
      <Footer />
    </>
  )
}

export default HomeScreenPage;

const PortalTitleContainer = styled.div`
  position: relative; 
  left: 20px; 
  top: 20px;
  max-width: 90vw;
`

const PortalTitle = styled.h2`
  font-size: 68px;
  
  @media screen and (max-width: 768px) {
    font-size: 34px;
  }
`

const PortalSubTitle = styled.h3`
  font-size: 26px; 
  position: relative; 
  top: -15px;
  left: 30px;

  @media screen and (max-width: 768px) {
    font-size: 22px; 
    top: 0px;
    left: 0;
    line-height: 20px; 
  }
`

const MainTitleContainer = styled.div`
  position: relative; 
  top: 100px;
  left: 20px;
  max-width: 90vw;
`

const MainTitle = styled.h1`
  color: white; 
  font-size: 68px;
  position: relative; 

  @media screen and (max-width: 768px) {
    font-size: 34px; 
  }
`

const MainTitleFirstLine = styled(MainTitle)`
  left: 0; 
`

const MainTitleSecondLine = styled(MainTitle)`
  top: -20px;

  @media screen and (max-width: 768px) {
    top: 0;
  }
`
