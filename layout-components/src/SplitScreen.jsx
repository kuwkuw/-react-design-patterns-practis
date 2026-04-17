import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`

const Pane = styled.div`
    flex: ${props => props.weigth};
`


export const SplitScreen = ({ leftWeigth = 1, rightWeigth = 1, children }) => {
    const [left, right] = children
    return (
    <Container>
        <Pane weigth = {leftWeigth}>
            {left}
        </Pane>
        <Pane weigth = {rightWeigth} >
            {right}
        </Pane>
    </Container>
    )
};