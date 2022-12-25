declare namespace Cypress {
  interface Chainable {
    login(id: string, name: string): void;
  }
}
