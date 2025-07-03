import { useContext, useState } from 'react'
import { UserContext } from '../app/login'
import { Form } from './Form'
import { Input } from './Input'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { DateInput } from './DateInput'

export const CadastreSeForm = () => {
  const [user, setUser] = useContext(UserContext)
  const [showPicker, setShowPicker] = useState(false)

  const inputs = [
    {
      label: 'Nome',
      icon: 'user',
      placeholder: 'John Doe',
      autoFocus: true,
      onChangeText: nome => {
        setUser(user => ({ ...user, nome }))
      },
    },
    {
      label: 'Email',
      icon: 'envelope',
      placeholder: 'johndoe@email.com',
      onChangeText: email => {
        setUser(user => ({ ...user, email }))
      },
    },
    {
      label: 'Data de Nascimento',
      icon: 'calendar',
      placeholder: '00/00/0000',
      textContentType: 'birthdate',
      isDate: true,
      showPicker,
      value: user.data_nascimento,
      onDateChange: ({ type }, date) => {
        if (type === 'set') {
          setUser(user => ({
            ...user,
            data_nascimento: date,
          }))
        }

        setShowPicker(!showPicker)
      },
      onPress: () => {
        setShowPicker(!showPicker)
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
    <Form title="Cadastre-se">
      {inputs.map((input, index) => (
        <>
          {!!input.isDate ? (
            <DateInput key={index} {...input} />
          ) : (
            <Input key={index} {...input} />
          )}
        </>
      ))}
    </Form>
  )
}
