import type { NextPage } from 'next'
import Cabecalho from '../src/components/Cabecalho/Cabecalho';
import { Header } from 'next/dist/lib/load-custom-routes';

const Home: NextPage = () => {
  return (
    <Cabecalho></Cabecalho>
  )
}

export default Home
