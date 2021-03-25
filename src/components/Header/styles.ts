import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

/* Esse content é uma div criada dentro do header, pois ela terá uma variação de tamanho conforme a tela, diferente do header que sempre atinge a largura máxima*/
export const Content = styled.div `
    max-width: 1120px;
    margin: 0 auto;
    
    /* esse padding de 1rem vai manter uma borda lateral, mesmo quando a tela estiver menor */ 
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`;