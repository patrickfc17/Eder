import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { Badge } from '../../../components/Bagde'
import { Header } from '../../../components/Header'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { BotaoAzul } from '../../../components/BotaoAzul'
import config from '../../../styles.config'
import { LinearGradient } from 'expo-linear-gradient'

const { dark, lighter, light } = config.colors
const locations = {
  start: 0,
  middle: 0.64,
  end: 1,
}

export default function DescricaoVaga() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <LinearGradient
          colors={[lighter, lighter, light]}
          locations={[locations.start, locations.middle, locations.end]}
          style={{ flex: 1 }}>
          <Header />
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.badgesContainer}>
              <Badge text="Remoto" />
              <Badge text="Tempo integral" />
            </View>
            <View style={styles.descricaoContainer}>
              <Text style={styles.titulo}>Sobre Nós:</Text>
              <Text style={styles.texto}>
                Somos uma empresa líder em inovação tecnológica, dedicada a
                criar soluções de software que transformam desafios complexos em
                oportunidades. Atuamos em áreas como computação em nuvem,
                inteligência artificial e IoT, valorizando um ambiente
                colaborativo, inclusivo e orientado para o crescimento contínuo.
              </Text>

              <Text style={styles.titulo}>Responsabilidades:</Text>
              <Text style={styles.texto}>
                • Desenvolver e manter sistemas escaláveis e de alta
                performance.
                {'\n'}• Colaborar com equipes multidisciplinares (Product, UX,
                QA) para definir requisitos e entregar soluções alinhadas às
                necessidades dos clientes.{'\n'}• Participar de revisões de
                código e promover boas práticas de programação.{'\n'}• Resolver
                problemas técnicos e otimizar desempenho de aplicações.{'\n'}•
                Acompanhar tendências tecnológicas e propor melhorias em
                produtos existentes.
                {'\n'}• Documentar processos e garantir clareza no ciclo de
                desenvolvimento.{'\n'}• Trabalhar em metodologias ágeis (Scrum,
                Kanban).
              </Text>

              <Text style={styles.titulo}>Requisitos Obrigatórios:</Text>
              <Text style={styles.texto}>
                • Graduação em Ciência da Computação, Engenharia de Software ou
                áreas correlatas.{'\n'}• Experiência mínima de 2 anos em
                desenvolvimento de software.{'\n'}• Domínio em linguagens como
                Java, Python, JavaScript/TypeScript e frameworks como Spring,
                React ou Node.js.{'\n'}• Conhecimento em bancos de dados
                relacionais (PostgreSQL, MySQL) e NoSQL (MongoDB, Cassandra).
                {'\n'}• Familiaridade com plataformas de nuvem (AWS, Azure,
                Google Cloud).{'\n'}• Experiência com controle de versão (Git) e
                integração contínua.{'\n'}• Habilidades analíticas para resolver
                problemas complexos.{'\n'}• Comunicação clara e capacidade de
                trabalhar em equipe.
              </Text>

              <Text style={styles.titulo}>Diferenciais:</Text>
              <Text style={styles.texto}>
                • Pós-graduação em áreas relacionadas.{'\n'}• Conhecimento em
                DevOps (Docker, Kubernetes), arquitetura de microsserviços e
                pipelines CI/CD.{'\n'}• Experiência com testes automatizados
                (JUnit, Selenium).{'\n'}• Contribuições em projetos open source
                ou portfólio público (GitHub, GitLab).{'\n'}• Certificações em
                cloud (AWS Certified, Azure Developer).
              </Text>

              <Text style={styles.titulo}>Benefícios:</Text>
              <Text style={styles.texto}>
                • Salário competitivo + bônus por desempenho.{'\n'}•
                Flexibilidade de horário e trabalho remoto/híbrido.{'\n'}• Plano
                de saúde e odontológico.{'\n'}• Acesso a cursos, conferências e
                mentoria para desenvolvimento profissional.{'\n'}• Stock options
                e programa de participação nos lucros.{'\n'}• Programas de
                bem-estar (yoga, parcerias com academias).{'\n'}• Eventos de
                integração e cultura descontraída.
              </Text>
            </View>
            <BotaoAzul texto="Candidatar-se" />
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginTop: 40,
  },
  descricaoContainer: {
    gap: 12,
  },
  titulo: {
    fontSize: 18,
    marginTop: 12,
    color: dark,
  },
  texto: {
    fontSize: 14,
    lineHeight: 20,
    color: dark,
  },
})
