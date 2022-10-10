import type { NextPage } from 'next'

function Botao(){
  return <a href='#'>Clique aqui</a>;
}

const Home: NextPage = () => {
  return (
    <div>
      HomePage
      <Botao />
    </div>
  )
}

export default Home
