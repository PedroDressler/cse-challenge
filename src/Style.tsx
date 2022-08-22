import styled from "styled-components";

export const SlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a{
    font-weight:bold;
    font-style: italic;
    color: #1cb358;
  }
`

export const BtnContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: left;
`

export const Container = styled.div`
  padding: 30px;
  border-radius: 30px;
  background-color: #c5ffdc;
  min-height: 150px;
  font-family: sans-serif;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const DocsLink = styled.a`
  font-family: sans-serif;
  font-weight:bold;
  color: black;
  font-style: italic;
`