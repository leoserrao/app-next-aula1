import { Button } from "@mui/material";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style";

const Lista = () => {
    return (
        <ListaStyled>
            <ItemLista>
                <Foto src="https://avatars.githubusercontent.com/u/34383554?v=4"></Foto>
                <Informacoes>
                    <Nome>Léo Serrão</Nome>
                    <Valor>R$ 50,00 por hora</Valor>
                    <Descricao>Aulas particulares de programação</Descricao>
                    <Button sx={{width: '70%'}}>Marcar Aula com Léo</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://avatars.githubusercontent.com/u/34383554?v=4"></Foto>
                <Informacoes>
                    <Nome>Léo Barbosa</Nome>
                    <Valor>R$ 40,00 por hora</Valor>
                    <Descricao>Aulas particulares de design</Descricao>
                    <Button sx={{width: '70%'}}>Marcar Aula com Léo</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://avatars.githubusercontent.com/u/34383554?v=4"></Foto>
                <Informacoes>
                    <Nome>Léo Serrão</Nome>
                    <Valor>R$ 50,00 por hora</Valor>
                    <Descricao>Aulas particulares de programação</Descricao>
                    <Button sx={{width: '70%'}}>Marcar Aula com Léo</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://avatars.githubusercontent.com/u/34383554?v=4"></Foto>
                <Informacoes>
                    <Nome>Léo Barbosa</Nome>
                    <Valor>R$ 40,00 por hora</Valor>
                    <Descricao>Aulas particulares de design</Descricao>
                    <Button sx={{width: '70%'}}>Marcar Aula com Léo</Button>
                </Informacoes>
            </ItemLista>
        </ListaStyled>
    )
}

export default Lista;