"use strict";

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
  console.log(data);
  ApiConnector.login(data, (response) => {
    console.log(response);
    if (response.success) {
      location.reload();
    } else {
      userForm.setLoginErrorMessage(response.data);
    }
  });
};

userForm.registerFormCallback = (data) => {
  console.log(data);
  ApiConnector.register(data, (response) => {
    console.log(response);
    if (response.success) {
      location.reload();
    } else {
      userForm.setLoginErrorMessage(response.data);
    }
  });
};
