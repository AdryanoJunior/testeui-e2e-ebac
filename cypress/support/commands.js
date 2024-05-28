Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('addProdutoCarrinho', () =>{
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Yellow').click()
    cy.get('.plus').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Brown').click()
    cy.get('.single_add_to_cart_button').click()   
})

Cypress.Commands.add('verCarrinho', () => {
    cy.get('.woocommerce-message > .button').click()
    cy.get('h2').should('contain', 'Total no carrinho')
    cy.get('.checkout-button').click()   
})

Cypress.Commands.add('dadosPessoais', (nome, sobrenome, endereço, cidade, CEP, telefone, email) => {
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#billing_address_1').type(endereço)
    cy.get('#billing_city').type(cidade)
    cy.get('#billing_postcode').type(CEP)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)
})

Cypress.Commands.add('finalizarCompra', () => {
    cy.get('#payment_method_bacs').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()  
})

Cypress.Commands.add('loginFixture', () =>{
    cy.fixture('perfil').then( dados =>{
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha)
        cy.get('.woocommerce-form > .button').click()
})
})

