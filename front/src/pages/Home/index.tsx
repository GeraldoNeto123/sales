import { Container } from './styles';
import { useTransaction } from '../../hooks/useTransaction';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import TableTransactions from '../../components/TableTransactions';
import { useEffect } from 'react';
import { getTransactions } from '../../services/transactions';

function Home() {
    const { addTransactions } = useTransaction();

    useEffect(() => {
        (async function get() {
            const transactions = await getTransactions();
            addTransactions(transactions)
        }
        )()
    }, [addTransactions])

    return (
        <>
            <Header />
            <Container className='container'>
                <Summary />
                <TableTransactions />
            </Container>
        </>
    )
}

export default Home;