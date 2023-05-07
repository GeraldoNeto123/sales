import { Card, Container } from './styles'
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi'
import { useTransaction } from '../../hooks/useTransaction'
import { amountInCentsToMoney, formatPrice } from '../../util/format';
import { useMemo } from 'react';

export default function Summary() {
    const { transactions } = useTransaction();

    const summary = useMemo(() => {
        return transactions.reduce((accumulator, transaction) => {
            const amount = amountInCentsToMoney(transaction.amount);

            if (transaction.type === 'COMMISSION_PAID') {
                accumulator.cashOutflow += amount;
                accumulator.total -= amount;
            } else {
                accumulator.cashIncome += amount;
                accumulator.total += amount;
            }

            return accumulator;
        }, {
            cashIncome: 0,
            cashOutflow: 0,
            total: 0
        })
    }, [transactions])


    return (
        <Container>
            <div className="summaryContent">
                <Card>
                    <header>
                        <span>Entradas</span>
                        <FiArrowDownLeft size='2rem' color='var(--green)' />
                    </header>
                    <strong>{formatPrice(summary.cashIncome)}</strong>
                </Card>

                <Card>
                    <header>
                        <span>Saídas</span>
                        <FiArrowUpRight size='2rem' color='var(--red)' />
                    </header>
                    <strong>{formatPrice(summary.cashOutflow)}</strong>
                </Card>

                <Card>
                    <header>Saldo Toal</header>
                    <strong>{formatPrice(summary.total)}</strong>
                </Card>
            </div>
        </Container>
    )
}