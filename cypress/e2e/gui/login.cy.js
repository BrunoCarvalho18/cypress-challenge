describe('Login Test Suite', () => {
  let mass_data;

  //Use the cy.fixture() method to pull data from fixture file
  beforeEach(function () {
    cy.fixture('mass_data').then((data)=> {
      mass_data = data;
    })
  });

  it('login should be accessed sucessfully', () => {
      cy.login(mass_data.email,mass_data.user_password)
      cy.wait(10000)
      cy.get("span[class='header__link_NElNw account__icon_2qLVr header__link--name_21Pi_']").contains('hoi!')
  });

  it('login should not be accessed sucessfully, because password have a wrong format', () => {
      cy.login(mass_data.email,mass_data.user_password_wrong)
      cy.wait(500)
      cy.get("p[class='MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled']").contains('Je wachtwoord moet tussen 5 en 20 tekens lang zijn')
   });

   it('login should not be accessed sucessfully, because email have a wrong format', () => {
    cy.login(mass_data.email_wrong,mass_data.user_password)
    cy.wait(500)
    cy.get("p[class='MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled']").contains('Sorry, dit is geen geldig e-mailadres')
 });
})