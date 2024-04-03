import tags from './tags.json'
import styled from "styled-components";

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    max-width: fit-content;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const ContainerTag = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
`


const Tags = () =>{
    return (<ContainerTag>
        <TagTitulo>Busque por tags:</TagTitulo>
        {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
    </ContainerTag>)
}

export default Tags;