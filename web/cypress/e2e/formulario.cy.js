describe('template spec', ()=> {
    it('passes', ()=> {
        cy.visit('http://localhost:3000')

        cy.get('#email').type('4dt@gmail.com')
        cy.get('#password').type('4DT')

        cy.contains('button', 'Entrar').click()

        cy.contains('h4','Formulários').click()

        cy.get('#name').type('Nicoly Santos')
        cy.get('#email').type('nicoly@email.com')
        cy.get('#phone').type('11 99999-0000').should('have.value', '(11) 99999-0000')
        cy.get('#consultancyType').select('In Company')
        cy.contains('span', 'Pessoa Física').click()

        cy.contains('label', 'Pessoa Jurídica', {timeout: 10000}).find('input').should('be.not.checked')
        cy.get('#document').type('11111111111').should('have.value', '111.111.111-11')

        const redes = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]

        redes.forEach((item) => {
            cy.contains('label', item).find('input').check().should('be.checked')
        })

        cy.get('#details').type('Sou traficante do amor')

    })
})
