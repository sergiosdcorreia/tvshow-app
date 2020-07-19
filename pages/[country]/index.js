import axios from 'axios';

const Home = (props) => {

    return (
        <h1>This is a country Test</h1>
    )
}

Home.getInitialProps = async () => {
    const response = await axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01');
    
    return {
        shows: response.data
    }
}
export default Home;