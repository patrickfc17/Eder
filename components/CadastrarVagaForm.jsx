import { Input } from './Input'
import { Form } from './Form'
import { useState } from 'react'

const inputs = [
  {
    label: 'Titulo',
    placeholder: 'Titulo',
    autoFocus: true,
    icon: 'pencil',
  },
  {
    label: 'Descrição da vaga:',
    placeholder: 'Descreva as responsabilidades e requisitos da vaga...',
    autoFocus: true,
    multiline: true,
    icon: 'align-left',
  },
  {
    label: 'Empresa:',
    placeholder: 'Ex: Nubank, Ifood',
    autoFocus: true,
    icon: 'building',
  },
]
const areas = [
  { label: 'Selecione uma área', value: '' },
  { label: 'DevOps', value: 'DevOps' },
  { label: 'Engenharia de Software', value: 'Engenharia de Software' },
  { label: 'Energia e Tecnologia Verde', value: 'Energia e Tecnologia Verde' },
  { label: 'Desenvolvimento Web', value: 'Desenvolvimento Web' },
  { label: 'Desenvolvimento Mobile', value: 'Desenvolvimento Mobile' },
  { label: 'Robótica e Automação', value: 'Robótica e Automação' },
  { label: 'Cloud Computing', value: 'Cloud Computing' },
  {
    label: 'Segurança da Informação (Cybersecurity)',
    value: 'Segurança da Informação (Cybersecurity)',
  },
  {
    label: 'Ciência de Dados e Analytics',
    value: 'Ciência de Dados e Analytics',
  },
  { label: 'Machine Learning', value: 'Machine Learning' },
]

export const CadastrarVagaForm = () => {
  const [selectedArea, setSelectedArea] = useState('')
  return (
    <Form title="Cadastrar Vaga">
      {inputs.map((input, index) => (
        <Input key={index} {...input} />
      ))}
      <Input
        label="Área:"
        icon="sitemap"
        pickerItems={areas}
        selectedValue={selectedArea}
        onValueChange={itemValue => setSelectedArea(itemValue)}
      />
    </Form>
  )
}
