import React from 'react';
import './footer.scss';

const Footer = () => {
  const fb = 'https://facebook.com/dabananda.mitra.98';

  return (
    <div className="footer text-center pb-3">
      <hr />
      <p>
        &copy;2022 -{' '}
        <a href={fb} target="_blank" rel="noreferrer">
          Dabananda Mitra
        </a>{' '}
        | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
