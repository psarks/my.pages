import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Shared look taken from the Bucketlist page: dark cards, pill badges, eyebrow labels.
export const Eyebrow = styled.p`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #c9d1ff;
  margin-bottom: 14px;
`;

export const Pill = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 11px;
  border-radius: 999px;
  color: ${({ tone }) => (tone === 'done' ? '#0f2a1d' : tone === 'wip' ? '#2a1f05' : '#c9d1ff')};
  background: ${({ tone }) =>
    tone === 'done' ? '#4ade80' : tone === 'wip' ? '#fbbf24' : 'rgba(75, 89, 247, 0.18)'};
`;

const buttonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 26px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
  &:hover {
    transform: translateY(-2px);
  }
  &:focus-visible {
    outline: 3px solid #c9d1ff;
    outline-offset: 3px;
  }
`;

export const PrimaryLink = styled(Link)`
  ${buttonStyles}
  color: #fff;
  background: #4b59f7;
  border: 1px solid #4b59f7;
  &:hover {
    background: #0467fb;
    border-color: #0467fb;
  }
`;

export const GhostLink = styled(Link)`
  ${buttonStyles}
  color: #c9d1ff;
  background: transparent;
  border: 1px solid #2c3554;
  &:hover {
    border-color: #4b59f7;
    color: #fff;
  }
`;
