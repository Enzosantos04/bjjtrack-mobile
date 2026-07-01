# 🥋 BJJ Track Mobile

> **Gerencie sua academia direto do tatame.**  
> Uma plataforma mobile minimalista e eficiente desenvolvida sob medida para professores de Jiu-Jitsu e seus atletas. Reduza a burocracia administrativa e dedique mais tempo ao que realmente importa: o treino.

---

## 📖 Sobre o Projeto

O **BJJ Track Mobile** é o aplicativo móvel da plataforma BJJ Track. Ele foi concebido para resolver o gargalo de gerenciamento de alunos, frequências e graduações dentro das academias de Jiu-Jitsu (do nível iniciante ao avançado). O aplicativo consome a API REST **bjjtrack** desenvolvida com **Spring (Java)** e banco de dados relacional **PostgreSQL**. Através de uma interface responsiva, fluida e com suporte a fontes premium (como *Bebas Neue* e *Inter*), professores e alunos podem interagir e acompanhar a evolução de faixas de forma integrada ao ecossistema da equipe.

---

## ⚡ Principais Funcionalidades

- **🥋 Evolução e Visualização de Faixas**: Interface interativa com representações estilizadas das faixas de Jiu-Jitsu (Branca, Azul, Roxa, Marrom e Preta).
- **📝 Cadastro de Nova Academia**: Fluxo de onboard completo para criar o perfil administrativo de uma nova equipe com preenchimento simplificado (Nome, Slug, Responsável, E-mail e Senha).
- **⏱️ Chamada em 3 Toques (*Em Desenvolvimento*)**: Registro rápido de presença de toda a turma para evitar a interrupção do ritmo de treino.
- **📈 Histórico de Graduações (*Em Desenvolvimento*)**: Acompanhamento automatizado de graus e troca de faixas com base na frequência dos alunos.
- **🔐 Portais Independentes**: Fluxo de autenticação customizado para administradores/professores e alunos da academia.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

### Frontend & Mobile
- **[React Native](https://reactnative.dev/)** + **[Expo (v54)](https://expo.dev/)** — Framework para desenvolvimento mobile multiplataforma.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para maior segurança no código.
- **[React Navigation (v7)](https://reactnavigation.org/)** — Controle de rotas e navegação em pilha (`native-stack`).
- **[TanStack React Query (v5)](https://tanstack.com/query/latest)** — Gerenciamento assíncrono de requisições de API e cache.
- **[Axios](https://axios-http.com/)** — Cliente HTTP para comunicação com a API REST.
- **[Expo Font](https://docs.expo.dev/versions/latest/sdk/font/)** — Integração com as fontes do Google Fonts (`Inter` e `Bebas Neue`).

### Backend (API Externa Integrada)
- **[Spring Boot (Java)](https://spring.io/projects/spring-boot)** — Framework robusto para a criação da API RESTful de backend (**bjjtrack**).
- **[PostgreSQL](https://www.postgresql.org/)** — Banco de dados relacional e persistência dos dados de alunos, frequências e equipes.

---

## 📂 Estrutura de Pastas

A arquitetura do projeto está organizada dentro do diretório [src](file:///C:/Projetos/bjjtrack-mobile/src):

```bash
bjjtrack-mobile/
├── assets/             # Arquivos de mídia e imagens
├── src/                # Código-fonte principal
│   ├── components/     # Componentes visuais reutilizáveis (Input, Button, etc.)
│   ├── constants/      # Constantes de estilo (cores, faixas, etc.)
│   ├── hooks/          # Hooks customizados (Ex: useCreateAcademy para mutations)
│   ├── interface/      # Interfaces e tipos de dados do TypeScript (data models)
│   ├── navigation/     # Configurações de rotas (AppNavigator)
│   ├── screens/        # Telas da aplicação (Onboarding, Cadastro, Login)
│   ├── services/       # Integrações de serviços externos e APIs (Axios)
│   └── styles/         # Estilizações customizadas separadas por componente/tela
├── App.tsx             # Arquivo raiz do React Native
├── app.json            # Configuração do Expo
├── index.ts            # Ponto de entrada do app
└── tsconfig.json       # Configuração do TypeScript
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
1. [Node.js](https://nodejs.org/) (versão recomendada: LTS mais recente)
2. [Expo Go](https://expo.dev/go) instalado em seu dispositivo físico (iOS/Android) ou emuladores configurados.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd bjjtrack-mobile
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto ou configure as variáveis de ambiente necessárias. Por padrão, a aplicação consome a variável `EXPO_PUBLIC_API_URL` para realizar requisições no backend.
   ```env
   EXPO_PUBLIC_API_URL=seu-servidor-api:3000
   ```

4. **Inicie o servidor de desenvolvimento do Expo:**
   ```bash
   npm run start
   ```

5. **Acesse o App:**
   - Abra o aplicativo **Expo Go** no seu celular e escaneie o código QR exibido no terminal.
   - Alternativamente, pressione `a` no terminal para rodar no Emulador Android, `i` para o Simulador iOS, ou `w` para rodar na versão Web.

---

## 🎯 Próximos Passos (Roadmap)

- [ ] Integração completa da autenticação com persistência de token (JWT).
- [ ] Desenvolvimento das telas do painel administrativo do professor.
- [ ] Criação do painel do aluno para monitorar presenças e visualizar graus.
- [ ] Implementação de notificações de eventos, mensalidades e graduações.

---

## 📄 Licença

Este projeto está licenciado sob os termos da licença MIT. Veja o arquivo [LICENSE](file:///C:/Projetos/bjjtrack-mobile/LICENSE) para mais detalhes.
