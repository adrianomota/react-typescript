import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
   display: flex;

    ul {
      list-style: none;

    }

    li {
      font-size: 30px;
      color: #222;
      cursor: pointer;

       transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#ccc')};
        }
    }
`;
