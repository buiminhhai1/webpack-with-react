import React from 'react';

interface HeaderProps {
  content: string;
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  return (
    <h1>{content}</h1>
  );
};

export default Header;