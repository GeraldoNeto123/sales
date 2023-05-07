import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

interface TransactionProviderProps {
  children: ReactNode;
}

interface Transaction {
  id: string;
  amount: string;
  date: Date;
  type: "PRODUCER_SALE" | "AFFILIATE_SALE" | "COMMISSION_PAID" | "COMMISSION_RECEIVED";
  seller_id: string;
  seller_name: string;
  product_id: string;
  product_name: string;
}

interface TransactionContextData {
  transactions: Transaction[];
  addTransactions: (transactions: Transaction[]) => void;
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionProvider({ children }: TransactionProviderProps): JSX.Element {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransactions = useCallback((transactions: Transaction[]) => {
    setTransactions(transactions);
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTransaction(): TransactionContextData {
  const context = useContext(TransactionContext);

  return context;
}
