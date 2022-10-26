import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/NavBar.module.scss'
interface Props {
    title: string
    link: string
}

const NavBar: React.FC<Props> = (props) => {
    return (
        <nav className={styles.nav}>
            <Link href='/'>
                <h1 className={styles.nav}>Home</h1>
            </Link>
            <a href={props.link}>
                <h2>PDF Proposal {props.title} Challenge</h2>
            </a>
        </nav>
    );
};

export default NavBar;
