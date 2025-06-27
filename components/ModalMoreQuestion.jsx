import { View, Modal, Button, StyleSheet } from 'react-native'
import { Input } from './Input'
import config from '../styles.config'

const { dark, lighter } = config.colors

export const ModalMaisPergunta = ({
  visible,
  oncancel,
  novaPergunta,
  setNovaPergunta,
  onSave,
  novoPlaceholder,
  setNovoPlaceholder,
}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Input
            label="Nova Pergunta: "
            icon="question"
            placeholder="Digite a pergunta"
            value={novaPergunta}
            onChangeText={setNovaPergunta}
          />
          <Input
            label="Descrição da perguntas"
            icon="pencil"
            placeholder="Ex: Qual é sua experiencia?"
            value={novoPlaceholder}
            onChangeText={setNovoPlaceholder}
          />
          <View style={styles.botoes}>
            <View style={styles.botoesContainer}>
              <Button color={dark} title="Adicionar" onPress={onSave} />
            </View>
            <View style={styles.botoes}>
              <Button title="Cancelar" onPress={oncancel} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: lighter,
    borderRadius: 10,
    alignItems: 'stretch',
    padding: 20,
    gap: 16,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  botoesContainer: {
    flex: 1,
  },
})
