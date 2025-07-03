import { Form } from './Form'
import { Input } from './Input'
import { UploadFile } from './UploadFile'
import { fetchCandidatura } from '../src/services/candidaturaService'
import { useState, forwardRef, useImperativeHandle } from 'react'
import { Alert } from 'react-native'
import { supabase } from '../src/lib/supabase'

const inputs = [
  {
    label: 'Email:',
    icon: 'envelope',
    placeholder: 'johndoe@email.com',
    name: 'email',
  },
  {
    label: 'Telefone:',
    icon: 'phone',
    placeholder: '(XX) X XXXXXXXX',
    name: 'telefone',
  },
  {
    label: 'Pretensão  Salarial:',
    icon: 'money',
    placeholder: 'R$',
    name: 'pretensaoSalarial',
  },
]

export const CandidaturaForm = ({ vagaId, userId }, ref) => {
  const [formData, setFormData] = useState({
    email: '',
    telefone: '',
    pretensaoSalarial: '',
  })

  const [curriculo, setCurriculo] = useState(null)

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  useImperativeHandle(ref, () => ({
    submit: async () => {
      if (!curriculo) {
        Alert.alert('Erro', 'Adicione o documento em PDF')

        return
      }
      try {
        const extCurriculo = curriculo.name.split('.').pop()
        const path = `curriculos/${Date.now()}-${curriculo.name}`

        const { error: uploadError } = await supabase.storage
          .from('curriculos')
          .upload(path, curriculo)

        if (uploadError) {
          throw uploadError
        }

        const curriculoUrl = urlData?.publicUrl

        const { error: insertError } = await supabase
          .from('candidaturas')
          .insert({
            vagaId: vagaId,
            userId: userId,
            pretensaoSalarial: formData.pretensaoSalarial,
            curriculo: curriculoUrl,
          })

        if (insertError) throw insertError

        Alert.alert('Tudo certo!', 'Candidatura enviada com sucesso')
      } catch (error) {
        console.error(error)
        Alert.alert('Erro', 'Não foi possivel enviar seu curriculo')
      }
    },
  }))
  return (
    <Form title="Candidatura Simplificada">
      {inputs.map((input, index) => (
        <Input
          key={index}
          label={input.label}
          icon={input.icon}
          placeholder={input.placeholder}
          value={formData[input.name]}
          onChangeText={text => handleInputChange(input.name, text)}
        />
      ))}
      <UploadFile
        label="Currículo"
        icon="upload"
        placeholder="Adicione seu currículo em PDF"
        onFileSelect={setCurriculo}
        acceptedTypes={['application/pdf']}
      />
    </Form>
  )
}
