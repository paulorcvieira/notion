import { PencilLine } from 'styles/icons'

import { Avatar } from '../Avatar'

import { Container, Cover, Footer, Profile } from './styles'

export function Sidebar() {
  return (
    <Container>
      <Cover src="https://source.unsplash.com/collection/2001768/300x200?q=50" />

      <Profile>
        <Avatar src="https://github.com/paulorcvieira.png" hasBorder />

        <strong>Paulo Vieira</strong>
        <span>Software Engineer</span>
      </Profile>

      <Footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </Footer>
    </Container>
  )
}
