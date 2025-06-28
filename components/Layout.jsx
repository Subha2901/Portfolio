import Titlebar from '../components/Titlebar'
import Sidebar from '../components/Sidebar'
import Explorer from '../components/Explorer'
import Bottombar from '../components/Bottombar'
import Tabsbar from './Tabsbar'
import styles from '../styles/Layout.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ToggleExplorer from './ToggleExplorer'

const Layout = ({ children }) => {
  // set scroll to top of main content on url pathname change
  const router = useRouter()
  useEffect(() => {
    const main = document.getElementById('main-editor')
    main.scrollTop = 0
  }, [router.pathname])
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar setVisible={setVisible} visible={visible}/>
        {visible && <ToggleExplorer setVisible={setVisible}/>}
        <Explorer/>
        <div style={{ overflowX: 'scroll', width: '100%', scrollbarWidth: 'none' }}>
          <Tabsbar />
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  )
}

export default Layout
