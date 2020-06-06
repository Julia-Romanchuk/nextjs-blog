import styled from 'styled-components'

export const PostBlock = styled.div`
    font-size: 15px;
    width: 400px;
    height: 200px;
    border: 1px solid black;
    padding: 15px;
    float: left;
    border-radius: 5px;
    margin: 10px;
    &:hover {
        background: #f4f5f4; 
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
        padding: 10px
`
export const Container = styled.div`
    margin: auto;
    max-width: 840px;
`
export const Header = styled.header`
    height: 150px;
    background: #f4f5f4;
    position: relative;
    width: 100%;
    padding: 20px;
    text-align: center;
`
export const HeaderText = styled.h2`
  cursor: pointer;
`

export const NewPostBlock = styled.div`
    border-radius:5px;
    background-color:#f2f2f2;
    padding:40px;
`

export const Input = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border: none;
  border-bottom: 1px solid #ff8b3d;
  background-color:#f2f2f2;
  float: right;
  font-size: 25px
`

export const TextArea = styled.textarea`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border: none;
  border-bottom: 1px solid #ff8b3d;
  background-color:#f2f2f2;
  float: right;
  font-size: 15px;
`
export const PostTitle = styled.h2`
  text-align: center;
` 
export const PostBoby = styled.p`
  width: 80%;
  margin: auto;  
`
export const Button = styled.button`
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #ff8b3d;
`

export const CommentsList = styled.ul `
  list-style-type: none; 
`
export const CommentItem = styled.li `
  padding: 5px;
  border-left: 1px solid lightgrey;
  margin: 15px;

`

