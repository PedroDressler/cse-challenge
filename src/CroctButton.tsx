import { FC , useCallback } from 'react'
import {useCroct} from '@croct/plug-react'
import styled from 'styled-components'

interface ButtonProps{
  children: string;
  persona: string | null;
}

const Btn = styled.button`
  border: 3px solid #4DD684;
  background-color: #4DD684;
  color: white;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 15px;
  margin-right: 10px;

  &:hover{
    cursor: pointer;
    opacity: 0.7;
  }

  &, &:active{
    opacity: 1;
  }
`;

export const CroctButton:FC<ButtonProps> = ({children, persona}) => {

  const croct = useCroct();
  const setPersona = useCallback(() =>
    croct.user.edit()
      .set('custom.persona', persona)
      .save()
      .then(console.log),
    [croct],
  )


  return <>
    <Btn onClick={setPersona}>{children}</Btn>
  </>
}

