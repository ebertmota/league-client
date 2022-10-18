import React from 'react'
import { Input, RiotGamesLogo } from '@/application/components'
import { Container, LeftContent, Header, Form } from './home-styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <LeftContent>
        <Header>
          <RiotGamesLogo />
        </Header>
        <Form>
          <h2>Fazer login</h2>
          <Input label="Nome de usuário" name="username" />
          <Input label="Senha" name="password" type="password" />
        </Form>
      </LeftContent>
    </Container>
  )
}