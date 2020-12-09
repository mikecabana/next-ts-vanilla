import React from 'react'
import styles from './Banner.module.scss';

export type BannerProps = {
    message?: string;
}

export function Banner({ message }: BannerProps) {
    return (
        <div className={styles.banner}>

            <p>{message}</p>

        </div>
    );
}