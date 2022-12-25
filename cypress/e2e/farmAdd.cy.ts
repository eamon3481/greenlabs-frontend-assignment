import { CROP, FARM, ID, NAME } from "cypress/support/commands";

describe("농장 추가 페이지에서, 농장명과 작물명을 입력하면 추가할 수 있다.", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("input[name='name']").type(NAME);
    cy.get("input[name='id']").type(ID);
    cy.get("button[type='submit']").click();
    cy.get("button[name='plus']").click();
    cy.intercept("POST", "/api/addfarm").as("addFarm");
  });

  it("/home 에서 + 버튼을 누르면 /farm_add 로 이동한다.", () => {
    cy.url().should("include", "/farm_add");
  });
  it("농장명과 작물명을 입력할 input 이 존재한다.", () => {
    cy.get('input[name="name"]').should("exist");
    cy.get('input[name="crop"]').should("exist");
  });
  it("농장명과 작물명을 입력한 뒤 저장할 저장버튼이 존재한다.", () => {
    cy.get("button").contains("저장").should("exist");
  });
  it("농장명과 작물명을 입력한 뒤 저장버튼을 click 하면 post 요청을 보낸다.", () => {
    cy.get('input[name="name"]').type(FARM);
    cy.get('input[name="crop"]').type(CROP);
    cy.get("button").contains("저장").click();

    cy.wait("@addFarm");
  });
  it("요청 보낸 결과값을 모달로 띄워준다.", () => {
    cy.get('input[name="name"]').type(FARM);
    cy.get('input[name="crop"]').type(CROP);
    cy.get("button").contains("저장").click();
    cy.contains(FARM).should("exist");
    cy.contains(CROP).should("exist");
  });

  it("전달하는 값이 없을 경우 진행이 불가능하다는 모달을 출력해 주세요", () => {
    cy.get("button").contains("저장").click();
    cy.contains("농장명과 작물명을 입력해주세요").should("exist");
  });
});

export {};
