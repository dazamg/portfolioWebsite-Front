import { useState } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/functions/user';
import { useDeletePortfolio } from '@/functions/portfolios';
import PortfolioApi from '@/serv/api/portfolios';
import { Row, Col, Button} from 'reactstrap';
import PortfolioCard from '@/components/PortfolioCard'
import { useRouter} from 'next/router';
import { isAuthorized } from '@/utils/auth0'

const Portfolios = ({portfolios: initialPortfolio}) => {
  const router = useRouter();
  const [deletePortfolio, {data, error}] = useDeletePortfolio();
  const { data: dataU, loading: loadingU } = useGetUser();
  const [ portfolios, setPortfolios] = useState(initialPortfolio);

  const _deletePortfolio = async(e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm('Are you sure you want to delete this portfolio?')
    if(isConfirm) {
      await deletePortfolio(portfolioId)    
      setPortfolios(portfolios.filter(p => p._id !== portfolioId));
    }
  }

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage
        title="Portfolios list - Kishon StClair"
        header="Portfolios"
        className="portfolio-page">
        <Row>
          { portfolios.map(portfolio =>
            <Col
              key={portfolio._id}
              onClick={() => {
                router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)
              }}
              md="4">
              <PortfolioCard
                portfolio={portfolio}>
                { dataU && isAuthorized(dataU, 'admin') &&
                  <>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`)
                      }}
                      className="mr-2"
                      color="warning">Edit</Button>
                    <Button 
                      onClick={(e) =>_deletePortfolio(e, portfolio._id)}
                      color="danger">Delete</Button>
                  </>
                }
              </PortfolioCard>
            </Col>
            )
          }
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  return {
    props: { portfolios },
    revalidate: 1
  }
}

export default Portfolios;