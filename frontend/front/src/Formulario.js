function Formulario(){
    return (
        <form>
            <h1>Formulário</h1>

            <input type="text" placeholder="Nome"/>
            <input type="text" placeholder="Marca"/>

            <input type="button" value="Cadastrar"/>
            <input type="button" value="Alterar"/>
            <input type="button" value="Remover"/>
            <input type="button" value="Cancelar"/>
        </form>
    )
}

export default Formulario;