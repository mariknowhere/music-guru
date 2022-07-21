import React, { FC } from 'react';
import {IHeaderProps} from "./HeaderTypes";
import styles from './Header.module.scss';

const Header: FC<IHeaderProps> = ({ gender, age, socials }) => {

  return (
    <div className={styles['header']}>
      <div className={styles['header-gender']}>
        {`Hello ${gender}`}
      </div>
      <div>
        {age}
      </div>
      <ul className={styles['header-socials']}>
        {socials?.map(social => (
            <li className={styles['header-social']}>
              {social}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Header;
