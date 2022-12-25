import { ID, NAME } from "cypress/support/commands";

describe("이름과 아이디를 입력하여 로그인 할 수 있습니다.", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("이름과 아이디를 입력할 수 있는 input이 존재합니다.", () => {
    cy.get("input[name='name']").should("exist");
    cy.get("input[name='id']").should("exist");
  });

  it("로그인 상태를 submit 할 수 있는로그인 버튼이 존재합니다.", () => {
    cy.get("button[type='submit']").contains("로그인").should("exist");
  });

  it("아이디와 이름을 입력한 후, 로그인 버튼을 누르면, /home 라우터로 이동합니다.", () => {
    cy.get("input[name='name']").type(NAME);
    cy.get("input[name='id']").type(ID);
    cy.get("button[type='submit']").click();
    cy.location("pathname").should("eq", "/home");
  });
  it(`아이디와 이름을 입력하지 않고 로그인 버튼을 누르면 ""로그인 실패" 모달이 뜬다.`, () => {
    cy.get("button[type='submit']").click();
    cy.contains("로그인 실패").should("exist");
  });
  it("로그인한 상태에서는 /home 에서 이름과 아이디를 보여줍니다.", () => {
    cy.get("input[name='name']").type(NAME);
    cy.get("input[name='id']").type(ID);
    cy.get("button[type='submit']").click();
    cy.contains(NAME).should("exist");
    cy.contains(ID).should("exist");
  });
});

export {};
