import { Link } from 'react-router-dom';
import { Container } from './styles';

function Home() {
    return (
        <Container>
            <h1>Home</h1>
            <Link to='/transactions/new'>New Transaction</Link>
        </Container>
    )
}

export default Home;