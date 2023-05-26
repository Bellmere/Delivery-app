import { useState, useEffect, useRef } from 'react';
import { Container } from 'components/styled/Container';
import { Navigation } from '../Navigation/Navigation';
import { Logo } from 'components/Logo/Logo';

import { ReactComponent as MobileMenuIcon } from '../../../icons/mobile-menu.svg';
import { ReactComponent as MobileMenuIconCross } from '../../../icons/mobile-menu-cross.svg';

import './AppBar.css';

export const AppBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (showMobileMenu && mobileMenuRef.current) {
      const mobileMenuHeight = mobileMenuRef.current.scrollHeight;
      mobileMenuRef.current.style.height = `${mobileMenuHeight}px`;
    } else if (mobileMenuRef.current) {
      mobileMenuRef.current.style.height = '0';
    }
  }, [showMobileMenu]);

  function handleToggleMobileMenu() {
    setIsAnimating(true);
    setTimeout(() => {
      setShowMobileMenu(!showMobileMenu);
      setIsAnimating(false);
    }, 300);
  }

  return (
    <header className="header">
      <Container>
        <div className="nav--wrapper">
          <Logo />
          <div className="navigation">
            <Navigation />
          </div>
          <div className="mobile__menu--wrapper">
            <button
              className={`mobile__menu__btn ${
                isAnimating ? 'is-animating' : ''
              }`}
              onClick={handleToggleMobileMenu}
            >
              {showMobileMenu ? (
                <MobileMenuIconCross className="mobile__menu__icon" />
              ) : (
                <MobileMenuIcon className="mobile__menu__icon" />
              )}
            </button>
          </div>
        </div>
      </Container>
      {showMobileMenu && (
        <div className="mobile__menu" ref={mobileMenuRef}>
          <Container>
            <div className="mobile__menu--wrap">
              <Navigation />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};
