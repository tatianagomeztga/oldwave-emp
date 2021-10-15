describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Homepage can be opened', () => {
    cy.contains('Regístrate o inicia sesión')
  })
  it('Input writing', () =>  {
    cy.get('input[name="searchBar"]').type('iphone')
  })
  it('Search button', () =>  {
    cy.get('input[name="searchBar"]').type('iphone')
    cy.contains('Buscar').click({force: true})
  })
  it('Search button with an empty input', () =>  {
    cy.contains('Buscar').click({force: true})
  })
  it('Search button and no found results', () =>  {
    cy.get('input[name="searchBar"]').type('cacerola')
    cy.contains('Buscar').click({force: true})
  })
  it('Button categories', () => {
    cy.contains('Todas las categorías')
    cy.get('#dialog').isNotVisible()
  })
  it('All catgories dialog is visible', () => {
    cy.contains('Todas las categorías').click()
    cy.get('#allCategories').contains("CATEGORIAS SUGERIDAS").isVisible()
  })
})