import Image from 'next/image'

import { Cart } from '../Cart';

import logoImg from '../../assets/logo.svg'

import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />

      <Cart />
    </HeaderContainer>
  )
}