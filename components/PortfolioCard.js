import {Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

const PortfolioCard = ({portfolio, children}) => 
    <Card className="portfolio-card">
        <CardHeader className="portfolio-card-header">{portfolio.company} </CardHeader>
        <CardBody>
            <p className="portfolio-card-city">{portfolio.location} </p>
            <CardTitle className="portfolio-card-title">{portfolio.jobTitle}</CardTitle>
            <CardText className="portfolio-card-text">{portfolio.description.split('\n')[0]}</CardText>
            { children}
        </CardBody>
    </Card>

export default PortfolioCard