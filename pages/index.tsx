import type { NextPage } from 'next'

function Botao(props){
  return <a href='#'>{props.titulo}</a>;
}

const Home: NextPage = () => {
  return (
    <div>
      HomePage <br />
      <Botao titulo='Click' /> <br />
      <Botao titulo='Entrar' />
      <Botao titulo='Ver mais' />
    </div>
  )
}

export default Home
