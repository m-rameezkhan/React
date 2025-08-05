import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <ul className={`${styles.nav} ${styles.class2}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar