import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';

const Home = ({ shows }) => {

    const renderShows = () => {
        return shows.map((showItem, index) => {
            const { show } = showItem;

            return (
                <li key={index}>
                    <Thumbnail imageUrl={(show.image && show.image.medium) || undefined } caption={show.name} />
                </li>
            )
        })
    }
    return (
        <ul className="tvshows">{ renderShows() }</ul>
    )
}

Home.getInitialProps = async (context) => {
    const country = context.query.country || 'us';
    const response = await axios.get(
        `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
    );
    
    return {
        shows: response.data
    }
}
export default Home;