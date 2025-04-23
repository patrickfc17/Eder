import { Form } from './Form'
import { Input } from './Input'

const inputs = [
  {
    label: 'Nome',
    icon: 'user',
    placeholder: 'John Doe',
    autoFocus: true,
  },
  {
    label: 'Email',
    icon: 'envelope',
    placeholder: 'johndoe@email.com',
  },
  {
    label: 'Data de Nascimento',
    icon: 'calendar',
    placeholder: '00/00/0000',
    textContentType: 'birthdate',
  },
  {
    label: 'Senha',
    icon: 'key',
    placeholder: '********',
    secureTextEntry: true,
  },
  {
    label: 'Confirmar Senha',
    icon: 'lock',
    placeholder: '********',
    secureTextEntry: true,
  },
]

export const CadastreSeForm = () => {
  return (
    <Form title="Cadastre-se">
      {inputs.map((input, index) => (
        <Input key={index} {...input} />
      ))}
    </Form>
  )
}
