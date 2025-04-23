import { tiposVagas } from '../../core/enums/vagas'
import config from '../../styles.config'

const { lighter } = config.colors

export const stylesVagaCard = tipo => ({
  container: {
    width: 345,
    height: 95,
    backgroundColor: lighter,
    borderBottomColor: tiposVagas[tipo],
    borderBottomWidth: 2,
    borderTopLeftRadius: 4,
    borderBottomEndRadius: 4,
    flexDirection: 'row',
  },
  content: {
    paddingVertical: 12,
    paddingLeft: 18,
    gap: 10,
  },
  semicircle: {
    width: 45,
    height: '100%',
    borderTopEndRadius: 95,
    borderBottomEndRadius: 95,
    backgroundColor: tiposVagas[tipo],
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: tiposVagas[tipo],
  },
  main: {
    flexDirection: 'row',
    width: 270,
    justifyContent: 'space-between',
  },
  informacoesGerais: {
    gap: 8,
  },
  button: {
    width: 64,
    height: 16,
    backgroundColor: tiposVagas[tipo],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  verMais: {
    fontSize: 10,
    color: lighter,
  },
})
