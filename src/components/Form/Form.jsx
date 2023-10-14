import DropdownList from "../DropdownList/DropdownList";
import TextField from "../TextField/TextField";

const classification = [
    'Common',
    'Uncommon',
    'Rare',
    'Mythical',
    'Legendary',
    'Ultra Beast',
    'Fossil',
];

const Form = () => {
    return (
        <>
            <section className="form">
                <form>
                    <h2>Informe os dados para catalogar o Pokémon</h2>
                    <TextField
                        textLabel="Nome"
                        textPlaceholder="Digite o nome do Pokémon"
                    />

                    <TextField
                        textLabel="Tipo"
                        textPlaceholder="Digite o tipo do Pokémon (ex: Grama, Fogo, etc)"
                    />
                    <TextField
                        textLabel="Imagem"
                        textPlaceholder="Digite o endereço (url) da imagem"
                    />
                    <DropdownList textLabel="Classificação" items={classification} />
                </form>
            </section>
        </>
    );
}

export default Form;