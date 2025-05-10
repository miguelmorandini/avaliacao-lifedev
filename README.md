# 📚 Avaliação DW3 - MiniDevBlog React + Firebase + Deploy (por Miguel Morandini)

## 🏛️ Atividade
Este projeto se trata da entrega da Avaliação 1 de Desenvolviemto Web III. O **LifeDev** é um blog para o compartilhamento de experiências, através de posts, de programadores.
Desenvolvido utilizando **React**, **Firebase Authentication** e **Deploy Automatizado**, tomando como base:

> 🔗 [Repositório Inicial (Incompleto) - avalicao-lifedev](https://github.com/victoricoma/avaliacao-lifedev.git)

Inspirando-se na estrutura de:

> 🔗 [Exemplo Estruturado - dw3_react_minidevblog](https://github.com/victoricoma/dw3_react_minidevblog)

---
Reultado final:

> 🔗 [Repostório de Entrega](https://github.com/miguelmorandini/avaliacao-lifedev)

> 🔗 [LifeDev por Miguel Morandini](https://avaliacaodw3-2d34e.web.app)

## 🛠️ Tarefas Concluídas

### 1. Preparação do Ambiente

- **Fork** do repositório de avaliação.
- Criação da **branch**:  
  `avaliacaodw-miguelmorandini`

---

### 2. Construção de Rotas Principais

Implementação das seguintes **rotas** usando `react-router-dom`:

| Rota | Função | Proteção |
|:-----|:-------|:---------|
| `/login` | Página de login | Acesso público |
| `/dashboard` | Listagem de posts | Acesso protegido (usuário logado) |
| `/post/:id` | Visualização individual de post | Acesso protegido |
| `/post/new` | Criação de novo post | Acesso protegido |

---

### 3. Construção da Dashboard

![image](https://github.com/user-attachments/assets/50946f3a-fca8-499b-aac7-70df1f19db77)

---

### 4. Construção da Página de Criação de Postagem

![image](https://github.com/user-attachments/assets/186382cb-9f15-455c-b333-9a08257ba248)

---

### 5. Sistema de Login (Firebase OAuth)

![image](https://github.com/user-attachments/assets/79dedba3-3051-4c21-8a96-ee1c5487fab3)

---

### 6. Controle de Acesso (Proteção de Rotas)

- Utilizando o `PrivateRoute` para proteger as páginas:
  - `/dashboard`
  - `/post/:id`
  - `/post/new`

- Ou seja, usuários **não logados** são redirecionados diretamente para a tela de **Login**.

---

### 7. Menu de Navegação Condicional

- Quando o usuário **não estiver logado** são exibidas, no menu, apenas as telas de **Entrar** e **Cadastrar**:
- 
  ![image](https://github.com/user-attachments/assets/46e54762-ecf8-41f1-b9be-aac61676218b)

- Já se o usuário estiver **logado corretamente**, são exibidas as telas de **Dashboard**, **Novo Post**, **Logout**:
- 
  ![image](https://github.com/user-attachments/assets/a992b46c-9427-4304-ad57-b21cf1f55697)

---

### 8. Configuração de Pipeline e Deploy

![image](https://github.com/user-attachments/assets/0a906ab2-12ce-4ad9-b19a-99185ae63554)

---

## 📌 Entrega

1. 🔗 [Link da Branch de Entrega - miguelmorandini](https://github.com/miguelmorandini/avaliacao-lifedev/tree/avaliacaodw-miguelmorandini)

2. 🔗 [Link do Deploy Funcionando - **LifeDev**](https://github.com/miguelmorandini/avaliacao-lifedev/tree/avaliacaodw-miguelmorandini)

3. **Pipeline CodeQL** rodando no GitHub Actions
   🔗 [Pipeline **CodeQL**](https://github.com/miguelmorandini/avaliacao-lifedev/actions/runs/14941358286)
  ![image](https://github.com/user-attachments/assets/e68af44d-5346-4601-a34e-8c9c1485e216)

---
