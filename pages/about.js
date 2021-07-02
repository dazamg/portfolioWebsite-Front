import { useEffect } from 'react';
import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from "@/components/BasePage"
import { useGetUser } from '@/functions/user'
import { Row, Col } from 'reactstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

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
                    <p>My name is Kishon St. Clair and I am an software engineer and freelance developer. </p>
                    <p>
                      I am a bootcamper who loves the outdoors and treasure family. I have
                      experience working on a wide range of technologies and projects from Javascript development for frontend designs for SheSailed to
                      modern mobile and web applications in React and Python.
                    </p>
                    <p>
                      Detail-oriented developer who over-delivers on organizational goals. 
                      My approach blends a background in sales, organizing and design to solve problems 
                      and drive innovation. I am a quick learner with an eye for detail and a passion for design. 
                      I am thrilled to work collaboratively to develop innovative solutions and best practices for all stakeholders involved. 
                      While I am most excited about using my front end skills, I do have the back end skills to dive deep into the code
                    </p>
          
                    <Link href="https://github.com/dazamg" >
                      <a className="icons" target="_"><FaGithub size={50}/></a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/kishon-stclair-95b5561aa/" >
                      <a className="icons-1" target="_"><FaLinkedin size={50}/></a>
                    </Link>
                  </div>
                </Col>
              </Row>

            </BasePage>
        </BaseLayout>
    )
  }
  
  export default About