interface Transaction {
  id: string;
  amount: string;
  date: Date;
  type:
    | "PRODUCER_SALE"
    | "AFFILIATE_SALE"
    | "COMMISSION_PAID"
    | "COMMISSION_RECEIVED";
  seller_id: string;
  seller_name: string;
  product_id: string;
  product_name: string;
}

const BASE_URL_API = "http://localhost:4000";

export async function getTransactions(): Promise<Transaction[]> {
  try {
    const res = await fetch(`${BASE_URL_API}/transactions`);

    const data: Transaction[] = await res.json();

    return data;
  } catch (error) {
    throw new Error("Erro ao obter transações");
  }
}

export async function postTransactions(file: File): Promise<void> {
  try {
    const formData = new FormData();
    formData.append("sales", file);
    
    const response = await fetch(`${BASE_URL_API}/transactions`, {
      method: "POST",
      body: formData,
    });

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
}
