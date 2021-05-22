import styled, { css } from 'styled-components';

import Logo from '../../../assets/images/logo-lado-branco.png';

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.main.colors.errera.purple};
    height: ${theme.main.sizes.leftMenu.height};

    .projectName {
      display: block;
      width: 100%;
      height: ${props => props.theme.main.sizes.leftMenu.height};

      background-image: url(${Logo});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 13.5rem;
    }
  `}
`;

export default Wrapper;
