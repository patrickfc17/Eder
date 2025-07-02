import { useContext } from 'react'
import { Form } from './Form'
import { Input } from './Input'
import { UserContext } from '../app/login'

export const LoginForm = () => {
  const [setUser] = useContext(UserContext)

  const inputs = [
    {
      label: 'Email',
      icon: 'envelope',
      placeholder: 'johndoe@email.com',
      onChangeText: email => {
        setUser(user => ({ ...user, email }))
      },
    },
    {
      label: 'Senha',
      icon: 'key',
      placeholder: '********',
      secureTextEntry: true,
      onChangeText: password => {
        setUser(user => ({ ...user, password }))
      },
    },
  ]

  return (
    <Form title="Login">
      {inputs.map((input, index) => (
        <Input key={index} {...input} />
      ))}
    </Form>
  )
}
