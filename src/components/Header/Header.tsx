import { NavLink, useLocation } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { useEffect } from 'react'
import logoImg from '../../assets/logo.svg'
import timerImg from '../../assets/timer.svg'
import historyImg from '../../assets/history.svg'

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
          <img src={timerImg} alt="timer" />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <img src={historyImg} alt="pomodoro history" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
