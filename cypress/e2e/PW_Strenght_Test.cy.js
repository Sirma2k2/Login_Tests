describe('Salasana vahvuus Testi', () => {
  it('displays an error for a weak password', () => {

    cy.visit('/');

    //  Sähköpostin ja käyttäjätunnuksen syöttö
    cy.get('input[placeholder="Syötä käyttäjänimi"]').type('Testikäyttäjä1')
    cy.get('input[placeholder="Syötä sähköposti"]').type('testi@gmail.com')

    //Ei hyväksytyn salasanan syöttö
    cy.get('input[placeholder="Syötä salasana"]').type('jonne')

    //Virheilmoitus siitä
    cy.contains('Salasana ei tarpeeksi vahva!').should('be.visible');

    //Hyväksytyny salasanan syöttö
    cy.get('input[placeholder="Syötä salasana"]').clear().type('Jonne62!')

    //Hyväksytyny salansanan ilmoitus
    cy.contains('Vahva salasana!').should('be.visible')

    
    cy.get('button').contains('Hyväksy').should('not.be.disabled')

  });
});