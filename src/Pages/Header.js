import React from 'react'
import styles from "./styles.module.css";
function Header() {
  return (

<nav className={styles.nav}>
<ul>
<li><a href=''>home</a></li>
<li><a href=''>about</a></li>
<li><a href=''>service</a></li>
<li><a href=''>help me</a></li>
</ul>
</nav>

  )
}

export default Header