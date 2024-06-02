import styled from "styled-components";
import Card from "../Card";

const HomeContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px;
`;

function Home() {
  return (
    <HomeContainer>
      <Card
        date="02 de jun, 2024"
        title="O que é uma linguagem de programação?"
        description="Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."
      />
      <Card
        date="29 de mai, 2024"
        title="GitHub agora permite fazer login sem precisar de senha"
        description="O GitHub anunciou nesta quarta-feira (29) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores."
      />
      <Card
        date="23 de mai, 2024"
        title="Por que os hiperlinks são azuis em sua maioria?"
        description="Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor."
      />

    </HomeContainer>
  );
}

export default Home;
