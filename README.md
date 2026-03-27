📘 Aula de Testes Automatizados
🧑‍💻 Sobre a aula

Nesta aula, aprendemos a instalar a ferramenta de testes e utilizar alguns comandos básicos para testar uma tela de login.

⚙️ Comandos usados

visit → acessar a página

get → selecionar elementos

contains → verificar textos na tela

wait → aguardar um tempo

🧪 Testes realizados

❌ Email incorreto

❌ Senha incorreta

⚠️ Campos em branco

✅ Login com sucesso

📌 Exemplo
cy.visit('/login')

cy.get('#email').type('teste@email.com')
cy.get('#senha').type('123456')

cy.get('button').click()

cy.contains('Login realizado com sucesso')
✅ Conclusão

Aprendemos o básico de testes automatizados e como validar diferentes cenários de login.
