describe('Products List view', () => {
  beforeEach(() => {
    cy.visit('/#/ProductList')
  })
  it('ProductList can be opened', () => {
    cy.contains('Regístrate o inicia sesión')
  })
  it('Search a existing product', () => {
    cy.get('input[name="searchBar"]').type('televisor')
    cy.contains('Buscar').click({force: true})
    cy.get('div[name="productsList"]').isVisible
  })
  it('Search without results', () => {
    cy.get('input[name="searchBar"]').type('Silla')
    cy.contains('Buscar').click({force: true})
    cy.get('div[name="noResults"]').isVisible()
  })
  it('Select a result', () => {
    cy.get('input[name="searchBar"]').type('televisor')
    cy.contains('Buscar').click({force: true})
    cy.contains('Ver detalle').click()
  })
  it('See product detail', () => {
    cy.get('input[name="searchBar"]').type('televisor')
    cy.contains('Buscar').click({force: true})
    cy.contains('Ver detalle').click()
    cy.get('div[name="productDetailD"]').isVisible()
  })
  it('Add to shopping cart', () => {
    cy.get('input[name="searchBar"]').type('televisor')
    cy.contains('Buscar').click({force: true})
    cy.contains('Ver detalle').click()
    cy.get('div[name="productDetailD"]').isVisible()
    cy.contains('Agregar al Carrito').click()
  })


})