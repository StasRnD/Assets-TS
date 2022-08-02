import React from 'react';

export const MenuFooter = () => {
  const importTokenClick = (evt: React.MouseEvent<HTMLElement>) =>
    evt.preventDefault();

  return (
    <section className='coins__token'>
      <p className='coins__token-text'>Don't see your token?</p>
      <a href='#' className='coins__token-import' onClick={importTokenClick}>
        Import Tokens
      </a>
    </section>
  );
};
