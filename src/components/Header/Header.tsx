import { NavLink, useLocation } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { useEffect } from 'react'
import logoImg from '../../assets/logo.svg'
import { Queue, Timer } from 'phosphor-react'

export function Header() {
  const { pathname } = useLocation()

  useEffect(() => {
    console.log('pathname', pathname)
  }, [pathname])

  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} weight="bold" />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Queue size={24} weight="bold" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
