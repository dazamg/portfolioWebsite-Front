import moment from 'moment'


const Avatar = ({image, title, date}) => 
    <div className="media avator-box mb-2">
        <img className="mr-2" src={image} />
        <div className="media-body align-self-center">
            <h5 className="mt-0 mb-0">{title}</h5>
            <p className="mt-0 subtitle">{moment(date).format('LLL')}</p>
        </div>
    </div>

export default Avatar;
