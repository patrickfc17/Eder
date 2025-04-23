import { View } from 'react-native'
import { VagaCard } from '../components/Vagas/VagaCard'

const vagas = [
  {
    titulo: 'Analista de Sistemas PHP Pl/Sr',
    tipo: 'remota',
    empresa: 'Nubank',
    inscricoes: '25/05',
  },
  {
    titulo: 'Analista de Suporte Júnior',
    tipo: 'hibrida',
    empresa: 'Meta',
    inscricoes: '25/06',
  },
  {
    titulo: 'Cientista de Dados - Python/SQL...',
    tipo: 'presencial',
    empresa: 'Google',
    inscricoes: '15/05',
  },
]

export const Home = () => {
  return (
    <View>
      {vagas.map((vaga, index) => (
        <VagaCard key={index} vaga={vaga} tipo={vaga.tipo} />
      ))}
    </View>
  )
}
