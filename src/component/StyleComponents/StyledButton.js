import styled from 'styled-components'

export const BaseButton = styled.button`

    border: none; 
    width: 300px ;
    height: 40px;
    border-radius: 10rem;
    box-sizing: border-box;
    margin-top: 20px;
    cursor: pointer;

    @media(max-width: 768px) {
        width: 100px;
        background: mediumseagreen;
        color: papayawhip;
      }
`;

const PrimaryButton = styled(BaseButton)`
    background-color: ${props => props.theme.buttonPrimaryColor};
    color: ${props=> props.theme.buttonPrimaryTextColor};

    :hover{
        background-color: coral; 
        color: black
    }
`;

const SecondaryButton = styled(BaseButton)`

`;

export function Button (props){
    const {children, type='secondary', onClick={}} = props;
    if (type === 'primary')
        return <PrimaryButton onClick={onClick} >{children}</PrimaryButton>
    if (type === 'secondary')
    return <SecondaryButton onClick={onClick}>{children}</SecondaryButton>
}