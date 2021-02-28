import React from 'react';
// import styles from './styles.module.scss';

interface HeaderProps {
  content: string;
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  return (
    <h1>{content}</h1>
  );
};

export default Header;