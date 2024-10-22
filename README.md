# Pajina de login do Facebook

![page_facebook](https://github.com/user-attachments/assets/7c35029a-a8b8-401a-b5c1-eff286c09f4c)

# Essa página é uma réplica do layout de login do Facebook, construída com React e Tailwind CSS. A interface é dividida em duas seções principais: uma descrição textual à esquerda e o formulário de login à direita. A página tem um design responsivo e moderno, utilizando estilos do Tailwind para a disposição e formatação dos elementos.

# Estrutura Geral:

### Container Principal: Envolvido por uma div que utiliza classes do Tailwind para definir a largura total, altura mínima e centralização dos elementos na tela.

# Seção Esquerda Descrição do Facebook:

### Um título <h1> grande que exibe o nome "Facebook", estilizado com uma fonte grande e negrito.
### Um parágrafo <p> logo abaixo explicando o propósito do Facebook, também com um estilo bem espaçado. Seção Direita "Formulário de Login":

# Um formulário com dois campos de entrada:

### Email ou telefone: Campo para o usuário inserir seu email ou número de telefone. Senha: Campo de entrada para a senha. Um botão para entrar, estilizado com um fundo de cor primária e um efeito de transição quando o cursor passa sobre ele.

### Um link que oferece a opção de recuperar a senha "Esqueceu a senha?".

### Seção de Criação de Conta: Um botão destacado para "Criar nova conta", também com um estilo interativo.

### Criação de Página: Um link adicional na parte inferior para quem deseja criar uma página para uma celebridade, marca ou empresa.

# Características de Design:

## Tailwind CSS:
### O layout usa a flexbox para centralizar e espaçar os elementos de maneira uniforme, tanto na coluna quanto nas linhas. Estilos como text-primary, bg-primary, e hover:bg-black são usados para cores e interações visuais. Classes como ease-in-out duration-300 controlam as transições suaves ao interagir com os botões. O formulário e os botões são responsivos, ajustando-se conforme o tamanho da tela, com a propriedade w-full e classes como max-w-lg para limitar a largura máxima. Funções Interativas: Embora a página seja visualmente fiel à interface do Facebook, a funcionalidade ainda é limitada. O React está sendo usado para gerenciar o estado com o useState, mas ele ainda não é utilizado de forma significativa dentro do layout atual.

# Resumo:

### A página imita a experiência de login do Facebook com um layout bem estruturado e estilizado utilizando Tailwind CSS, ideal para ser visualizado tanto em dispositivos móveis quanto em desktops. Ela inclui opções de login, criação de nova conta e a possibilidade de criar uma página específica, mas a funcionalidade completa ainda precisaria ser implementada.
