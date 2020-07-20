import axios from 'axios';

const Home = ({ shows }) => {

    const renderShows = () => {
        return shows.map((showItem, index) => {
            const { show } = showItem;

            return (
                <li key={index}>{show.name}</li>
            )
        })
    }
    return (
        <ul className="tvshows">{ renderShows() }</ul>
    )
}

Home.getInitialProps = async (context) => {
    const response = await axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01');
    
    return {
        shows: response.data
    }
}
export default Home;