import {
  ID,
  NAME,
  ACTIVE_COLOR,
  INACTIVE_COLOR,
} from "cypress/support/commands";
import { farms } from "./mockData";

describe("/home 에 접속하면 /api/farm 을 호출한 뒤에, FarmList 를 보여줍니다.", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(ID, NAME);
    cy.intercept("GET", "/api/farm", { farms }).as("getFarmList");
  });

  it("/api/farm 을 호출합니다.", () => {
    cy.wait("@getFarmList");
  });

  it("내려온 데이터에 따라서 FarmList 를 보여줍니다.", () => {
    cy.wait("@getFarmList");
    farms.forEach((farm) => {
      cy.contains(farm.name).should("exist");
    });
  });

  it("houseList 가 있다면 houseList 를 보여줍니다. 가동중이면 초록색 중지 중이면 빨간색으로 보여줍니다.", () => {
    cy.wait("@getFarmList");
    farms.forEach((farm) => {
      if (!farm.houses) {
        return;
      }
      cy.contains(farm.name)
        .parents("li")
        .within(() => {
          farm.houses.forEach((house) => {
            cy.contains(house.name).should("exist");
            if (house.active) {
              cy.contains(house.name).should(
                "have.css",
                "backgroundColor",
                ACTIVE_COLOR
              );
            } else {
              cy.contains(house.name).should(
                "have.css",
                "backgroundColor",
                INACTIVE_COLOR
              );
            }
          });
        });
    });
  });

  it(" 월별 생산량의 총 합을 연간 생산량으로 보여줍니다.", () => {
    cy.wait("@getFarmList");
    farms.forEach((farm) => {
      const total = farm.annualProduction.reduce(
        (acc, cur) => acc + cur.Production,
        0
      );

      cy.contains(farm.name)
        .parents("li")
        .within(() => {
          cy.contains(total).should("exist");
        });
    });
  });

  it("하우스를 클릭하면 중지 중인 하우스가 가동중으로 바뀌거나 가동중인 하우스가 중지됩니다.", () => {
    cy.wait("@getFarmList");
    farms.forEach((farm) => {
      if (!farm.houses) {
        return;
      }
      cy.contains(farm.name)
        .parents("li")
        .within(() => {
          farm.houses.forEach((house) => {
            if (house.active) {
              cy.contains(house.name)
                .click()
                .should("have.css", "backgroundColor", INACTIVE_COLOR)
                .contains("중지");
            } else {
              cy.contains(house.name).click();

              cy.contains(house.name)
                .should("have.css", "backgroundColor", ACTIVE_COLOR)
                .contains("가동중");
            }
          });
        });
    });
  });
});

export {};
