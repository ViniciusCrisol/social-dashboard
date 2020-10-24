import React from 'react';

import { useTheme } from '../../../hooks/useTheme';
import { Container, Switch, Content } from './styles';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Content>
        <div>
          <h1>Social Media Dashboard</h1>
          <strong>Total Followers: 23.004</strong>
        </div>

        <div className="switch-container">
          <span>{theme} mode</span>
          <Switch htmlFor="theme-switch" onClick={toggleTheme}>
            <input type="checkbox" readOnly checked={theme === 'light'} />
            <span className="slider" />
          </Switch>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
