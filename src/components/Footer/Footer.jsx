import { Container } from 'components/styled/Container';
import { Logo } from 'components/Logo/Logo';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer--wrapper">
          <Logo />
        </div>
      </Container>
    </footer>
  );
};
