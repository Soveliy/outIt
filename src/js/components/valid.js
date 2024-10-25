import { validateForms } from "../functions/validate-forms.js";

const rules1 = [
  {
    ruleSelector: ".input-email",
    rules: [
      {
        rule: "minLength",
        value: 5,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Текст ошибки",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Текст ошибки",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Текст ошибки",
      },
    ],
  },
  {
    ruleSelector: ".input-name",
    tel: false,
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Текст ошибки",
      },
    ],
  },
  {
    ruleSelector: ".input-password",
    tel: false,
    rules: [
      {
        rule: "minLength",
        value: 5,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Текст ошибки",
      },
    ],
  },
  {
    ruleSelector: ".input-password-again",
    tel: false,
    rules: [
      {
        rule: "minLength",
        value: 5,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Текст ошибки",
      },
    ],
  },
];
const rules2 = [
  {
    ruleSelector: ".input-email",
    rules: [
      {
        rule: "minLength",
        value: 5,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Текст ошибки",
      },
    ],
  },
  {
    ruleSelector: ".input-password",
    tel: false,
    rules: [
      {
        rule: "minLength",
        value: 5,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Текст ошибки",
      },
    ],
  },
];
const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

validateForms(".register-form", rules1, afterForm);
validateForms(".login-form", rules2, afterForm);
