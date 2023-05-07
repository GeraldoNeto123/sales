import { FormEvent, useId, useRef } from "react";
import { Container } from "./styles";
import { postTransactions } from "../../services/transactions";

function NewTransaction() {
    const inputId = useId();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const file = (inputRef.current?.files as FileList)[0];

        postTransactions(file);
    }

    return (
        <Container>
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
                <button type="submit">Enviar arquivo</button>
            </form>
        </Container>
    )
}

export default NewTransaction;