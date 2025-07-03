import { Form } from './Form'
import { Input } from './Input'
import { UploadFile } from './UploadFile'

const inputs = [
  {
    label: 'Email:',
    icon: 'envelope',
    placeholder: 'johndoe@email.com',
  },
  {
    label: 'Telefone:',
    icon: 'phone',
    placeholder: '(XX) X XXXXXXXX',
  },
  {
    label: 'Pretensão  Salarial:',
    icon: 'money',
    placeholder: 'R$',
  },
  {
    label: 'Possui experiência com Angular?',
    icon: '',
    placeholder: 'Escreva aqui',
  },
]

export const CandidaturaForm = () => {
  return (
    <Form title="Candidatura Simplificada">
      {inputs.map((input, index) => (
        <Input key={index} {...input} />
      ))}
      <UploadFile
        label="Currículo"
        icon="upload"
        placeholder="Adicione seu currículo em PDF"
      />
    </Form>
  )
}
