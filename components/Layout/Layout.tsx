import Navbar from '@components/Navbar/Navbar'
import classes from './layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <footer className={classes.footer}>&reg;ZerpaCode</footer>
    </div>
  )
}

export default Layout
