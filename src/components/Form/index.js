import './Form.css'
import TextField from "../TextField";
import Index from "../Select/Select";

const Form = () => {
    const teamList = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
    ];

    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <Index items={teamList} />
            </form>
        </section>
    )
}

export default Form