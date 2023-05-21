import { useTransaction } from '../../hooks/useTransaction';
import { amountInCentsToMoney, formatDate, formatPrice } from '../../util/format';
import { Container } from './styles'

export default function TableTransactions() {
    const { transactions } = useTransaction();

    const transactionTypes = {
        "PRODUCER_SALE": "Venda produtor",
        "AFFILIATE_SALE": "Venda afiliado",
        "COMMISSION_PAID": "Comissão paga",
        "COMMISSION_RECEIVED": "Comissão recebida",
    };

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Vendedor</th>
                        <th>Produto</th>
                        <th>Tipo</th>
                        <th>Data</th>
                        <th>Valor</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.length ? transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td data-label="Vendedor">{transaction.seller_name}</td>
                            <td data-label="Produto">{transaction.product_name}</td>
                            <td data-label="Tipo">{transactionTypes[transaction.type]}</td>
                            <td data-label="Data">
                                <span>{formatDate(new Date(transaction.date))} </span>
                                às
                                <span> {new Date(transaction.date).toLocaleTimeString()}</span>
                            </td>
                            <td
                                data-label="Valor"
                                className={transaction.type === 'COMMISSION_PAID' ? "cashOutflow" : "cashIncome"}
                            >
                                {formatPrice(amountInCentsToMoney(transaction.amount))}
                            </td>
                        </tr>
                    ))
                        :
                        <tr>
                            <td colSpan={5}>
                                <p style={{ textAlign: 'center' }}>
                                    Você ainda não possui registros!
                                </p>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </Container>
    )
}