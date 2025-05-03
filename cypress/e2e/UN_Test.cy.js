describe('Käyttäjätunnuksen vahvuustesti', () => {
  it('näyttää virheet heikosta käyttäjänimestä ja hyväksyy vahvan', () => {
    cy.visit('/');

    // Sähköpostin ja salasanan syöttö
    cy.get('input[placeholder="Syötä sähköposti"]').type('testi@gmail.com');
    cy.get('input[placeholder="Syötä salasana"]').type('Jonne62!');

    // Liian lyhyt käyttäjänimi
    cy.get('input[placeholder="Syötä käyttäjänimi"]').type('J1');
    cy.contains('Käyttäjänimi on liian lyhyt').should('be.visible');

    // Tyhjennetään kenttä ennen uutta syöttöä
    cy.get('input[placeholder="Syötä käyttäjänimi"]').clear();

    // Käyttäjänimi ilman isoa kirjainta
    cy.get('input[placeholder="Syötä käyttäjänimi"]').type('jonne1');
    cy.contains('käyttäjänimessä ei ole isoa kirjainta').should('be.visible');

    cy.get('input[placeholder="Syötä käyttäjänimi"]').clear();

    // Käyttäjänimi ilman numeroa tai erikoismerkkiä
    cy.get('input[placeholder="Syötä käyttäjänimi"]').type('Jonne');
    cy.contains('käyttäjänimessä täytyy olla numero tai erikoismerkki').should('be.visible');

    cy.get('input[placeholder="Syötä käyttäjänimi"]').clear();

    // Hyväksyttävä käyttäjätunnus
    cy.get('input[placeholder="Syötä käyttäjänimi"]').type('Jonne1!');

    // Varmistetaan ettei virheilmoituksia enää näy
    cy.contains('käyttäjänimi on liian lyhyt').should('not.exist');
    cy.contains('käyttäjänimessä ei ole isoa kirjainta').should('not.exist');
    cy.contains('käyttäjänimessä täytyy olla numero tai erikoismerkki').should('not.exist');

    
    cy.get('button').contains('Hyväksy').should('not.be.disabled');
  });
});
