import { FormEvent, useId, useRef } from "react";
import { Container } from "./styles";
import { postTransactions } from "../../services/transactions";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

function NewTransaction() {
    const navigate = useNavigate();
    const inputId = useId();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const file = (inputRef.current?.files as FileList)[0];

        await postTransactions(file);

        return navigate('/');
    }

    return (
        <>
            <Header />
            <Container className='container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor={inputId}>Arquivo</label>
                        <input
                            id={inputId}
                            type="file"
                            accept=".txt"
                            name="sales"
                            ref={inputRef}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit">Enviar arquivo</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default NewTransaction;