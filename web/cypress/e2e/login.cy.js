describe('template spec', () => {
  it('Logar com Sucesso', () => {
    // cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')
    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('4DT')

    cy.contains('button', 'Entrar').click()

    cy.wait(3000)
  })

it('Campos em branco', () => {
    // cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.contains('button', 'Entrar').click()

    cy.contains('Ei, não esqueça de digitar seu email!')

    cy.contains('Você precisa de uma senha para entrar! 🔒')

    cy.wait(3000)
})

it('Senha incorreta', () => {
    // cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')
    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('123')

    cy.contains('button', 'Entrar').click()

    cy.contains('Acesso negado! Tente novamente.')

    cy.wait(3000)
  })
  it('Email incorreta', () => {
    // cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')
    cy.get('#email').type('4dt@gmail.co')
    cy.get('#password').type('4DT')

    cy.contains('button', 'Entrar').click()

    cy.contains('Acesso negado! Tente novamente.')

    cy.wait(3000)
  })
})

