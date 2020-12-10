import React from 'react'
import Link from 'next/link'
import styles from './Nav.module.scss';
import { Icon } from '../Icon';

import { signIn, signOut, useSession } from 'next-auth/client';

export type NavProps = {}

export function Nav({ }: NavProps) {
    const [session, loading] = useSession();
    return (
        <div className={styles.nav}>

            <div>
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

            <div>
                {!session && <>
                    Not signed in <br />
                    <a href={`/api/auth/signin`} onClick={(e) => { e.preventDefault(); signIn(); }}>Sign in</a>
                </>}
                {session && <>
                    Signed in as {session.user.email} <br />
                    <a href={`/api/auth/signout`} onClick={(e) => { e.preventDefault(); signOut(); }}>Sign out</a>
                </>}
            </div>


        </div>
    );
}