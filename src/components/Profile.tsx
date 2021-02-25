import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://instagram.fppy7-1.fna.fbcdn.net/v/t51.2885-19/s320x320/83237489_722060998323494_2667473199633006592_n.jpg?_nc_ht=instagram.fppy7-1.fna.fbcdn.net&_nc_ohc=gcGCUz5ESp8AX9MB-Af&tp=1&oh=a10e1b0c16e698ddffcf420f894e547d&oe=605EFB57" alt="Lucas Godoi"/>
            <div>
                <strong>Lucas Godoi</strong>
                <p>  
                <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}