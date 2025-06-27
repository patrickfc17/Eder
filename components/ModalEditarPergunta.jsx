import { View, Modal, Button, StyleSheet } from 'react-native'
import { Input } from './Input'
import config from '../styles.config'

const { dark, lighter } = config.colors

export const ModalEditarPergunta = ({
  visible,
  oncancel,
  onSave,
  labelEditado,
  placeholderEditado,
  setLabelEditado,
  setPlaceholderEditado,
}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Input
            label="Editar pergunta: "
            icon="question"
            placeholder="Digite a pergunta"
            value={labelEditado}
            onChangeText={setLabelEditado}
          />
          <Input
            label="Editar descrição da perguntas"
            icon="pencil"
            placeholder="Ex: Qual é sua experiencia?"
            value={placeholderEditado}
            onChangeText={setPlaceholderEditado}
          />
          <View style={styles.botoes}>
            <View style={styles.botoesContainer}>
              <Button color={dark} title="Salvar alteração" onPress={onSave} />
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
