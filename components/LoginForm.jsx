import { Form } from './Form'
import { Input } from './Input'

const inputs = [
  {
    label: 'Email',
    icon: 'envelope',
    placeholder: 'johndoe@email.com',
  },
  {
    label: 'Senha',
    icon: 'key',
    placeholder: '********',
    secureTextEntry: true,
  },
]

export const LoginForm = () => {
  return (
    <Form title="Login">
      {inputs.map((input, index) => (
        <Input key={index} {...input} />
      ))}
    </Form>
  )
}
