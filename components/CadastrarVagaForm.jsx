import { Input } from './Input'
import { Form } from './Form'
import { useState } from 'react'
import { SelectBox } from './SelectBox'
import { BotaoMaisPergunta } from './BotaoMaisPergunta'
import { View, Alert, Button, Text, StyleSheet } from 'react-native'
import config from '../styles.config'
import { ModalMaisPergunta } from './ModalMoreQuestion'
import { ModalEditarPergunta } from './ModalEditarPergunta'

const { dark, lighter, light, darker } = config.colors
const { darkBox } = config.shadows

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
  const [selectedArea, setSelectedArea] = useState([])
  //crud
  //criar
  const [modalVisible, setModalVisible] = useState(false)
  const [novaPergunta, setNovaPergunta] = useState('')
  const [novoPlaceholder, setNovoPlaceholder] = useState('')

  //editar
  const [modalEditarVisible, setModalEditarVisible] = useState(false)
  const [indiceEditado, setIndiceEditado] = useState(null)
  const [labelEditado, setlabelEditado] = useState('')
  const [placeholderEditado, setPlaceholderEditado] = useState('')

  //deletar
  const deletarPergunta = indice => {
    Alert.alert(
      'Confirmar exclusão',
      'Tem certeza que deseja remover esta pergunta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            const novas = [...perguntas]
            novas.splice(indice, 1)
            setPerguntas(novas)
          },
        },
      ],
    )
  }

  const [perguntas, setPerguntas] = useState([])

  return (
    <Form title="Cadastrar Vaga">
      {inputs.map((input, index) => (
        <Input key={index} {...input} />
      ))}
      <SelectBox
        label="Área de Atuação"
        icon="briefcase"
        placeholder="Selecione área de atuação"
        value={selectedArea}
        onChange={setSelectedArea}
        items={areas}
      />
      {perguntas.map((pergunta, indice) => (
        <View key={indice}>
          <View style={style.container}>
            <Input
              label={pergunta.label}
              icon="question"
              placeholder={pergunta.placeholder}
              value={pergunta.resposta}
              onChangeText={texto => {
                const novas = [...perguntas]
                novas[indice] = {
                  ...novas[indice],
                  resposta: texto,
                }
                setPerguntas(novas)
              }}
            />
          </View>
          <View style={style.botoesContainer}>
            <View style={style.botoes}>
              <Button
                color={dark}
                title="EDITAR"
                onPress={() => {
                  setIndiceEditado(indice)
                  setlabelEditado(pergunta.label)
                  setNovoPlaceholder(pergunta.placeholder)
                  setModalEditarVisible(true)
                }}
              />
            </View>
            <View style={style.botoes}>
              <Button
                title="DELETAR"
                color="red"
                onPress={() => deletarPergunta(indice)}
              />
            </View>
          </View>
        </View>
      ))}
      <BotaoMaisPergunta onPress={() => setModalVisible(true)} />

      <ModalMaisPergunta
        visible={modalVisible}
        oncancel={() => setModalVisible(false)}
        novaPergunta={novaPergunta}
        setNovaPergunta={setNovaPergunta}
        novoPlaceholder={novoPlaceholder}
        setNovoPlaceholder={setNovoPlaceholder}
        onSave={() => {
          if (novaPergunta?.trim()) {
            setPerguntas([
              ...perguntas,
              {
                label: novaPergunta.trim(),
                placeholder: novoPlaceholder.trim(),
                resposta: '',
              },
            ])
            setNovaPergunta('')
            setNovoPlaceholder('')
            setModalVisible(false)
          }
        }}
      />
      <ModalEditarPergunta
        visible={modalEditarVisible}
        oncancel={() => setModalEditarVisible(false)}
        labelEditado={labelEditado}
        setLabelEditado={setlabelEditado}
        placeholderEditado={placeholderEditado}
        setPlaceholderEditado={setPlaceholderEditado}
        onSave={() => {
          if (indiceEditado !== null) {
            const novas = [...perguntas]
            novas[indiceEditado] = {
              ...novas[indiceEditado],
              label: labelEditado.trim(),
              placeholder: placeholderEditado.trim(),
            }
            setPerguntas(novas)
            setModalEditarVisible(false)
          }
        }}
      />
    </Form>
  )
}

const style = StyleSheet.create({
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  botoes: {
    borderRadius: 6,
    width: 85,
    height: 35,
    overflow: 'hidden',
  },
  container: {
    paddingBottom: 8,
  },
})
