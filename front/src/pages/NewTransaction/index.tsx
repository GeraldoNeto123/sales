import { FormEvent, useId, useRef } from "react";
import { Container } from "./styles";

function NewTransaction() {
    const inputId = useId();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const file = (inputRef.current?.files as FileList)[0];

        const formData = new FormData();
        formData.append('sales', file);

        try {
            const response = await fetch('http://localhost:4000/transactions', {
                method: 'POST',
                body: formData
            })

            const json = await response.json();
            console.log(json)
        } catch (error) {
            console.error(error)
        }

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