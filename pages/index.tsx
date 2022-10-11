import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'


const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "https://avatars.githubusercontent.com/u/34383554?v=4",
      descricao: "Descrição do professor 1",
      valor_hora: 100
    },
    {
      id: 2,
      nome: "Professor 2",
      foto: "https://avatars.githubusercontent.com/u/34383554?v=4",
      descricao: "Descrição do professor 2",
      valor_hora: 90
    },
    {
      id: 3,
      nome: "Professor 3",
      foto: "https://avatars.githubusercontent.com/u/34383554?v=4",
      descricao: "Descrição do professor 3",
      valor_hora: 110
    },
    {
      id: 4,
      nome: "Professor 4",
      foto: "https://avatars.githubusercontent.com/u/34383554?v=4",
      descricao: "Descrição do professor 4",
      valor_hora: 80
    }
  ]
  
  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={professores}></Lista>
    </Box>
  )
}

export default Home
