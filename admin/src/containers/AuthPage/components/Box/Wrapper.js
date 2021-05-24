import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  width: 41.6rem;
  padding: 20px 30px 25px 30px;
  border-radius: ${({ theme }) => theme.main.sizes.borderRadius};
  border-top: 2.5px solid ${({ theme }) => theme.main.colors.errera.purpleLight};
  background-color: ${({ theme }) => theme.main.colors.white};
  box-shadow: 4px 4px 4px 0 ${({ theme }) => theme.main.colors.darkGrey};
`;

export default Wrapper;
