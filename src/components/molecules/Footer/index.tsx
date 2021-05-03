import React from 'react';
import Title from '../../atoms/Title';
import Logo from '../../atoms/Logo';
import Icon from '../../atoms/Icon';
import { Images } from '../../../interface';
import './style.scss';

type FooterProps = {
  textFooter: string,
  iconsFooter: Images[],
  logo: string,
  copyrightFooter: string,
} 

const Footer: Function = ({ textFooter, iconsFooter, logo, copyrightFooter }: FooterProps) => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <Title title={textFooter} titleVariant="subtitle--small--black" />
        <div>
          {iconsFooter && iconsFooter.map((item, index) => (
            <a href="/" key={item.id}>
              <Icon
                iconVariant="rounded"
                src={iconsFooter && require(`../../../images/${iconsFooter[index].src}`).default}
                alt={iconsFooter && iconsFooter[index].alt}
              />
            </a>
          ))}
        </div>
      </div>
      <Logo text={logo} logoVariant="small" />
      <Title title={copyrightFooter} titleVariant="subtitle--small--black" />
    </div>
  );
}

export default Footer;
