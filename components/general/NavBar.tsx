import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/NavBar.module.scss'
import { Button } from '@geist-ui/core';
interface Props {
    title: string
    link: string
}

const NavBar: React.FC<Props> = (props) => {
    return (
        <nav className={styles.nav}>
            <Link href='/'>
            <Button>Go Back</Button>
            </Link>
            <a href={props.link}>
                <h2>PDF Proposal {props.title} Challenge</h2>
            </a>
        </nav>
    );
};

export default NavBar;
