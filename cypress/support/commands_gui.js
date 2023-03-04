Cypress.Commands.add('login' , (email,password
  ) => {
    const login = () => {
      cy.visit('/')
      
      cy.get("button[class='Button Button__primary cookie-notice__agree-button_lAIob']").click()
      cy.get("label[class='nav__toggle-label_xBFXP']").click()
      cy.get("span[class='nav__menu-header__right_2iOaU']").click()
      cy.get("#signin-email").type(email)
      cy.get("#signin-password").type(password)
      cy.get("button[class='Button Button__primary authentication-form__submit_3ZhF8']").click()

    }
  
    login()
  })