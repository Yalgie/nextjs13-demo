'use client';

import '../styles/globals.css'
import Link from "next/link";
import styles from './styles.module.css';

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/page2">Page 2</Link>
      </nav>

      {children}
    </section>
  );
}