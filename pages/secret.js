import BaseLayout from "../components/layouts/BaseLayout"
import BasePage from "../components/BasePage"

import withAuth from '../hoc/withAuth';

const Secret = ({data, loading}) => {
    
    //check to see if user is in the browser  'typeof window !== 'undefined'
        return (
            <BaseLayout user={data} loading={loading}>
                <BasePage>
                    <h1>I am Secret page - Hello World</h1>
                </BasePage>
            </BaseLayout>
        )
}
  
export default withAuth(Secret)()