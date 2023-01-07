import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src="" alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          {/* Por Padrão o Nav Link já adiciona uma classe "active" nas ancoras */}
          <Timer size={34} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          {/* Por Padrão o Nav Link já adiciona uma classe "active" nas ancoras */}
          <Scroll size={34} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
