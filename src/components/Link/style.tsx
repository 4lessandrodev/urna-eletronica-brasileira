import styled from 'styled-components';

export const Style = styled.div`
    padding: 5% 0;
    >a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 4px;
        font-weight: 200;
        font-size: 0.9rem;
        &:hover {
            color: #767676;
            transition: all 0.5s ease-in-out;
        }
    }
`;

export default Style;
