import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from "@/components/BasePage"
import { formatDate } from 'helpers/function';
import { useGetUser } from '@/functions/user'
import PortfolioApi from '@/serv/api/portfolios'
import { Row, Col} from 'reactstrap';

const Portfolio = ({portfolio}) => {
  const { data: dataU, loading: loadingU } = useGetUser();

  const createFadeInClass = () => {
    if(typeof window !== 'undefined') {
      return window.__isAboutLoaded ? '' : 'fadein';
      // return 'fadein';
    }
    return 'fadein';
  }
  return (
    <BaseLayout
      navClass="transparent"
      user={dataU} loading={loadingU}>
      <BasePage
        noWrapper
        className="portfolio-detail"
        title={`${portfolio.title} - Kishon St Clair`}
        metaDescription={portfolio.description}
        >
          <Row className="mt-5"> 
                 <Col md="6">
                  <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                    <main role="main" className="inner page-cover ">
                      <h1 className="cover-heading">{portfolio.title} </h1>
                      <p className="lead dates">{formatDate(portfolio.startDate)} - {formatDate(portfolio.endDate) || 'Present'}</p>
                      <p className="lead info mb-0 color">{portfolio.jobTitle} | {portfolio.company} | {portfolio.location}</p>
                      <p className="lead">{portfolio.description}</p>
                      <p className="lead">
                        <a href={portfolio.companyWebsite} target="_" className="btn btn-lg btn-secondary">Visit Company</a>
                      </p>
                      <divider/>
                      
                    </main>
                  </div>
                </Col>
                <Col >
                  <div >
                    <img className="left-side"  src={portfolio.images[0]} />  
                  </div>
                  <p className="lead-1">Tech Stack: {portfolio.techStack}</p>
                </Col>
              </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  const paths = portfolios.map(portfolio => {
    return {
      params: {id: portfolio._id}
    }
  })

  return { paths, fallback: false };
}

export async function getStaticProps({params}) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: {portfolio}};
}

export default Portfolio;