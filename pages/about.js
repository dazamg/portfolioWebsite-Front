import { useEffect } from 'react';
import BaseLayout from "../components/layouts/BaseLayout"
import BasePage from "../components/BasePage"
import { useGetUser } from '../functions/user'
import { Row, Col } from 'reactstrap';
import { FaGithub, FaLinkedin, FaInbox } from 'react-icons/fa';
import Link from 'next/link';
import { MdEmail} from "react-icons/md";
MdEmail

const About = () => {
    // let history = useHistory()
    const { data, loading } = useGetUser();
    console.log(data)

    useEffect(() => {
      return () => {
        window.__isAboutLoaded = true
      }
    },[])

    const createFadeInClass = () => {
      if(typeof window !== 'undefined') {
        return window.__isAboutLoaded ? '' : 'fadein';
        // return 'fadein';
      }
      return 'fadein';
    }

    const loop = () => {
      
      <a href="https://github.com/dazamg" target="_" ></a>
    }

    return (
      <BaseLayout 
        user={data}
        loading={loading}
        >
            <BasePage 
              title="About me - Kishon StClair"
              className="about-page">
              <Row className="mt-5">
                <Col md="6">
                  <div className="left-side">
                    <h1 className={`title ${createFadeInClass()}`}>Hello, </h1>
                    <h4 className={`subtitle ${createFadeInClass()}`}>Welcome to my About Page</h4>
                    <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
                  </div>
                </Col>
                <Col md="6">
                  <div className={`${createFadeInClass()}`}>
                    <p>My name is Kishon St Clair and I am a Software Engineer and freelance developer. </p>
                    <p>
                    I am a boot camper who loves the outdoors and treasures family. I have experience working 
                    on a wide range of technologies and projects from, Javascript development for frontend designs 
                    for SheSailed to modern mobile and web applications in React and Python.
                    </p>
                    <p>
                    My programming approach comes from a background in sales, organizing, and design to solve problems 
                    and drive innovation. I am a quick learner with a growth mindset and a passion for design. I enjoy 
                    working collaboratively with cross-functional teams to develop innovative solutions that drive impact 
                    for customers and businesses. While I am most adept at front-end, I’m expanding my capability on the 
                    backend and can write small features.
                    </p>
          
                    <Link href="https://github.com/dazamg" >
                      <a className="icons" target="_"><FaGithub size={50}/></a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/kishon-stclair-95b5561aa/" >
                      <a className="icons-1" target="_"><FaLinkedin size={50}/></a>
                    </Link>
                    <Link href="mailto:kishon@clairvisual.com?Connecting" >
                      <a className="icons-2" target="_"><MdEmail size={50}/></a>
                    </Link>
                  </div>
                </Col>
              </Row>

            </BasePage>
        </BaseLayout>
    )
  }
  
  export default About