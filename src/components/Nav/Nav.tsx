import React from 'react'
import Link from 'next/link'
import styles from './Nav.module.scss';
import { Icon } from '../Icon';

export type NavProps = {}

export function Nav({ }: NavProps) {
    return (
        <div className={styles.nav}>

            <Link href="/">
                <a>
                    <Icon iconName="App" size={40} />
                </a>
            </Link>

            <Link href="/">
                <a>
                    Home
                </a>
            </Link>

            <Link href="/about">
                <a>
                    About
                </a>
            </Link>

        </div>
    );
}