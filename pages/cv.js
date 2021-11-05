import BaseLayout from "../components/layouts/BaseLayout"
import BasePage from "../components/BasePage"
import { useGetUser } from '../functions/user'
import { Row, Col} from 'reactstrap'

const Cv = () => {
    const { data, loading } = useGetUser();

    return (
      <BaseLayout 
        user={data}
        loading={loading}
        className="cover">
            <BasePage title="CV - Kishon StClair">
                <Row>
                  <Col md={{size: 10, offset: 2}}>
                    <iframe style={{width: '100%', height: '800px'}} src="/SoftwareEngineer2.docx1.pdf"/>
                  </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
  }
  
  export default Cv