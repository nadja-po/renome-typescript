import React from 'react';
import Title from '../../atoms/Title';
import Logo from '../../atoms/Logo';
import Icon from '../../atoms/Icon';
import './style.scss';

function Footer({
  textFooter, iconsFooter, logo, copyrightFooter,
}) {
  return (
    <div className="footer">
      <Title title={textFooter} titleVariant="subtitle-small-black" />
      <div className="">
        {iconsFooter && iconsFooter.map((item, index) => (
          <a href="#" key={item.id}>
            <Icon
              iconVariant="rounded"
              src={iconsFooter && require(`../../../images/${iconsFooter[index].src}`).default}
              alt={iconsFooter && iconsFooter[index].alt}
            />
          </a>
        ))}
      </div>
      <Logo text={logo} logoVariant="small" />
      <Title title={copyrightFooter} titleVariant="subtitle-small-black" />
    </div>
  );
}

export default Footer;
