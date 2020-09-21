import styled from 'styled-components'

export const Wrapper = styled.div`
    padding:5px 0;
    position: relative;
    left: 50%;
    transform: translateX(-225px);
    border: 1px solid #ccc;
    width: 450px;
    background-color: #f6f6f6;
    text-align: center;
`
export const ListWrapper = styled.div`
    margin-top: 10px;
    width: 367px;
    background-color: #f2f2f2;
    border: 1px dashed #ccc;
    position: relative;
    left: 50%;
    transform: translateX(calc(-367px / 2));
    box-sizing: border-box;
    .list-item {
        text-align: left;
        border-bottom: 1px solid #ccc;
        position:relative;
    }
    .del-btn {
        position: absolute;
        right:0;
        bottom:7px;
    }
    
`