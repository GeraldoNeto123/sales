import { Link } from 'react-router-dom'
import { Container } from './styles'

export default function Header() {

    return (
        <Container>
            <div className="headerContainerContent">
                <div>
                    <h1 className="logo">My sales</h1>
                </div>
                <div>
                    <Link to='/transactions/new'>
                        <button
                            type="button"
                            className="newTransactionButton"
                        >
                            NOVA TRANSAÇÃO
                        </button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}