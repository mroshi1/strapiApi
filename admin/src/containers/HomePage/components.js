/* eslint-disable */
import styled, { css } from 'styled-components';

const Block = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 34px;
  background: #ffffff;
  padding: 30px 30px 30px 30px;
  box-shadow: 4px 4px 4px 0 #e3e9f3;
  border-radius: 3px;
  line-height: 18px;

  a {
    position: relative;
    text-decoration: none;

    &:hover::after {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 0.3rem;
      content: '';
      opacity: 0.1;
      background: #ffffff;
    }
  }
  h2,
  p {
    line-height: 18px;
  }
  h2 {
    display: inline-block;
  }
  #mainHeader {
    &:after {
      content: '';
      width: 100%;
      height: 3px;
      margin-top: 4px;
      margin-bottom: 16px;
      display: block;
      background: #f0b41e;
    }
  }
`;

const Container = styled.div`
  padding: 47px 13px 0 13px;
  > div {
    margin: 0;
  }
`;

const P = styled.p`
  max-width: 1000px;
  padding-top: 10px;
  padding-right: 30px;
  color: #292B2C;
  font-size: 16px;
  b {
    font-weight: 600;
  }
`;

const ALink = styled.a`
  display: inline-block;
  position: relative;
  height: 34px;
  padding-right: 20px;
  border-radius: 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 34px;
  font-size: 13px;

  &:before {
    content: '\f105';

    font-weight: 600;
    margin-right: 10px;
    font-family: 'FontAwesome';
  }

  &:hover,
  :focus,
  :active {
    text-decoration: none;
    outline: 0;
  }

  &:hover::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 0.3rem;
    content: '';
    opacity: 0.1;
    background: #ffffff;
  }

  ${({ type }) =>
    type === 'blog'
      ? css`
          padding-left: 20px;
          margin-top: 19px;
          color: #ffffff;
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 500;
          &:before {
            font-size: 16px;
          }
          &:hover {
            color: #ffffff;
          }
        `
      : css`
          margin-top: 9px;
          font-size: 14px;
          color: #005fea;
          &:before {
            font-size: 12px;
          }
          &:hover {
            color: #005fea;
          }
        `}

  ${({ type }) =>
    type === 'blog' &&
    css`
      background-color: #6A1269;
    `}
`;

export { ALink, Block, Container, P };
