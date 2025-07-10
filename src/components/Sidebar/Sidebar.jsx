import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const LogoImage = styled.img`
    width: 50px;
`;

const MainTitle = styled.span`
    color: ${({ theme }) => theme.logoText};
`;

const ClosedMainTitle = styled.span`
    display: none;
`;

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: ${({ isOpened }) => (isOpened ? '100px' : '50px')};
    background: ${({ theme }) => theme.background};
    transition: width 0.3s ease, background 0.3s ease;
`;

const TopSection = styled.div``;

const MiddleRoutes = styled.div`
    flex-grow: 1;
`;

const BottomRoutes = styled.div`
    margin-top: auto;
`;

const OpenedSpan = styled.span`
    transition: opacity 0.3s ease, max-width 0.3s ease;
    color: ${({ theme }) => theme.text};
`;

const ClosedSpan = styled.span`
    display: none;
    transition: opacity 0.3s ease, max-width 0.3s ease;
`;

const IconContainer = styled.div`
    margin-left: ${({ isOpened }) => (isOpened ? '90px' : '40px')};
    transition: margin-left 0.3s ease;
    cursor: pointer;
`;

const ThemeButton = styled.button`
  width: 50px;
  font-size: 12px;
  cursor: pointer;
`;

const Sidebar = ({ toggleTheme }) => {
    const [isOpened, setIsOpened] = useState(false);
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
        <SidebarContainer className={containerClassnames} isOpened={isOpened}>
            <TopSection>
                <LogoImage src={logo} alt="TensorFlow logo" />
                {isOpened ? <MainTitle>TensorFlow</MainTitle> : <ClosedMainTitle />}

                <IconContainer onClick={toggleSidebar} isOpened={isOpened}>
                    <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
                </IconContainer>
            </TopSection>

            <MiddleRoutes>
                {routes.map(route => (
                    <div key={route.title} onClick={() => goToRoute(route.path)}>
                        <FontAwesomeIcon icon={route.icon} />
                        {isOpened ? (
                            <OpenedSpan>{route.title}</OpenedSpan>
                        ) : (
                            <ClosedSpan>{route.title}</ClosedSpan>
                        )}
                    </div>
                ))}
            </MiddleRoutes>

            <BottomRoutes>
                <ThemeButton onClick={toggleTheme}>Toggle Theme</ThemeButton>
                {bottomRoutes.map(route => (
                    <div key={route.title} onClick={() => goToRoute(route.path)}>
                        <FontAwesomeIcon icon={route.icon} />
                        {isOpened ? (
                            <OpenedSpan>{route.title}</OpenedSpan>
                        ) : (
                            <ClosedSpan>{route.title}</ClosedSpan>
                        )}
                    </div>
                ))}
            </BottomRoutes>
        </SidebarContainer>
    );
};

Sidebar.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
};

export default Sidebar;

