import { Link as RouterLink, useLocation } from 'react-router-dom'

export default function Link({ children, to, className = '', ...props }) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <RouterLink
      className={`${className} ${isActive ? 'text-white' : 'text-gray-400'}`}
      to={to}
      style={{
        ...props.style,
      }}
      {...props}
    >
      {children}
    </RouterLink>
  )
}
