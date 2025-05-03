describe('Sähköpostin vahvuustesti', () => {
  it('näyttää virheet ei hyväksytystä sähköpostista ja hyväksyy vahvan', () => {
    cy.visit('/');

    // Käyttäjätunnuksen ja salasanan syöttö
    cy.get('input[placeholder="Syötä käyttäjänimi"]').type('Kkonaukko666')
    cy.get('input[placeholder="Syötä salasana"]').type('J1234iiv!');

    // Syötetään muutama virheellinen sähköposti (Loppuosa ei kelpaa, pitää olla esim .com, .fi yms)
    cy.get('input[placeholder="Syötä sähköposti"]').type('ukkolainen@fdfd');
    cy.contains('sähköposti ei kelpaa!').should('be.visible');

    // Tyhjennetään kenttä ennen uutta syöttöä
    cy.get('input[placeholder="Syötä sähköposti"]').clear();

    // @-merkki puuttuu
    cy.get('input[placeholder="Syötä sähköposti"]').type('ukkolainen.gmail.com');
    cy.contains('sähköposti ei kelpaa!').should('be.visible');

    // Tyhjennetään kenttä ennen uutta syöttöä
    cy.get('input[placeholder="Syötä sähköposti"]').clear();

    // Hyväksyttävä sähköposti
    cy.get('input[placeholder="Syötä sähköposti"]').type('ukkolainen@gmail.com');

    // Varmistetaan ettei virheilmoituksia enää näy
    cy.contains('sähköposti ei kelpaa!').should('not.exist');
    
    cy.get('button').contains('Hyväksy').should('not.be.disabled');
  });
});
