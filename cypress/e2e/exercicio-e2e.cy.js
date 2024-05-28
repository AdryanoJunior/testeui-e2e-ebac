/// <reference types="cypress" />
const login = require('../fixtures/perfil.json')
import produtosPage from '../support/page_objects/produtos.page';
import { faker } from '@faker-js/faker';

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
 

    beforeEach(() => {
        produtosPage.visitarUrl()
     });
 
     afterEach(() => {
       cy.screenshot()
     });
 
   it('Deve fazer login com sucesso - Usando Fixture', () => {
       cy.loginFixture()
       cy.get('.woocommerce-form > .button').click()
       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
       
   });
 
     });
 
   it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
   produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
   cy.addProdutoCarrinho()
   cy.get('.woocommerce-message').should('contain', '2 × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
   cy.get('.woocommerce-message').should('contain', '2 × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
 
   cy.verCarrinho()
 
   cy.dadosPessoais(faker.person.firstName(),faker.person.lastName(),faker.location.streetAddress(),faker.location.city(),'01521-020',faker.phone.imei(),faker.internet.email() )
   cy.get('.woocommerce-form-coupon-toggle > .woocommerce-info').should('contain','Você tem um cupom de desconto? Clique aqui e informe o código do seu cupom de desconto')
   
   cy.finalizarCompra()
   cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
 
 });
 
 
 
 
 
 
 
 
 