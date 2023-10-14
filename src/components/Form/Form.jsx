import TextField from "../TextField/TextField";

const Form = () => {
    return (
        <>
            <section className="form">
                <form>
                    <h2>Preencha os dados para criar o card do Pokémon</h2>
                    <TextField
                        textLabel="Nome"
                        textPlaceholder="Digite o seu nome"
                    />

                    <TextField
                        textLabel="Cargo"
                        textPlaceholder="Digite o seu cargo"
                    />
                </form>
            </section>
        </>
    );
}

export default Form;