const nameVal = document.getElementById("name-val");
const idVal = document.getElementById("id-val");
const emailVal = document.getElementById("email-val");
const bdVal = document.getElementById("bd-val");
const cvVal = document.getElementById("cv-val");
const deptVal = document.getElementById("dept-val");
const skillsVal = document.getElementById("skills-val");
const editButtons = {
  "name-edit": 0,
  "id-edit": 0,
  "email-edit": 0,
  "bd-edit": 0,
  "cv-edit": 1,
  "dept-edit": 1,
  "skills-edit": 2,
};

const stepInfo = document.getElementById("stepInfo");
const navLeft = document.getElementById("navLeft");
const navRight = document.getElementById("navRight");
const form = document.getElementById("myForm");
const submit = document.getElementById("submit");

const formSteps = ["one", "two", "three", "four"];

let currentStep = 0;

function updateStepVisibility() {
  formSteps.forEach((step) => {
    document.getElementById(step).style.display = "none";
  });

  document.getElementById(formSteps[currentStep]).style.display = "block";
  stepInfo.textContent = `Step ${currentStep + 1} of ${formSteps.length}`;

  if (currentStep === 3) {
    updateSummaryValues();
  }

  navLeft.style.display = currentStep === 0 ? "none" : "block";
  navRight.style.display = currentStep === formSteps.length - 1 ? "none" : "block";

  const currentStepElement = document.getElementById(formSteps[currentStep]);
  const firstInput = currentStepElement.querySelector("input, select, textarea");

  if (firstInput) {
    firstInput.focus();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  navLeft.style.display = "none";
  updateStepVisibility();
  navRight.addEventListener("click", () => {
    if (currentStep < formSteps.length - 1 && validateStep(currentStep)) {
      currentStep++;
      updateStepVisibility();
    }
  });

  navLeft.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateStepVisibility();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateStep(2)) {
      alert("Form submitted successfully!");
      form.reset();
      currentFormStep = 0;
      updateStepVisibility();
    }
  });

  Object.keys(editButtons).forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", (e) => {
      currentStep = editButtons[buttonId];
      updateStepVisibility();
    });
  });
});

// 表单验证部分
const nameInput = document.getElementById("name");
const idNumInput = document.getElementById("idNum");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const documentInput = document.getElementById("document");
const departmentInput = document.getElementById("department");
const termsCheckbox = document.getElementById("terms");
const skillsInput = document.getElementById("skills");

// function showError(input, message) {
//   const formControl = input.parentElement;
//   const errorSpan = formControl.querySelector(".error-message");
//   input.classList.add("error");
//   errorSpan.textContent = message;
// }

// function clearError(input) {
//   const formControl = input.parentElement;
//   const errorSpan = formControl.querySelector(".error-message");
//   input.classList.remove("error");
//   errorSpan.textContent = "";
// }

function showError(input, message) {
  const formControl = input.parentElement;
  const errorSpan = formControl.querySelector(".error-message");
  input.classList.add("error");
  input.setAttribute("aria-invalid", "true");
  input.setAttribute("aria-describedby", errorSpan.id);
  errorSpan.textContent = message;
}

function clearError(input) {
  const formControl = input.parentElement;
  const errorSpan = formControl.querySelector(".error-message");
  input.classList.remove("error");
  input.removeAttribute("aria-invalid");
  input.removeAttribute("aria-describedby");
  errorSpan.textContent = "";
}

function validateStep(step) {
  let isValid = true;

  if (step === 0) {
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Name is required");
      isValid = false;
    }

    if (idNumInput.value.trim() === "") {
      showError(idNumInput, "ID number is required");
      isValid = false;
    }

    if (emailInput.value.trim() === "" || !emailInput.validity.valid) {
      showError(emailInput, "A valid email is required");
      isValid = false;
    }

    if (birthdateInput.value === "") {
      showError(birthdateInput, "Date of birth is required");
      isValid = false;
    }
  } else if (step === 1) {
    if (!documentInput.files[0]) {
      showError(documentInput, "CV is required");
      isValid = false;
    }

    if (departmentInput.value === "") {
      showError(departmentInput, "Department selection is required");
      isValid = false;
    }
  } else if (step === 2) {
    if (!termsCheckbox.checked) {
      showError(termsCheckbox, "You must accept the terms and conditions");
      isValid = false;
    }
  }

  return isValid;
}

function setupRealtimeValidation() {
  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() !== "") clearError(nameInput);
  });

  idNumInput.addEventListener("input", () => {
    if (idNumInput.value.trim() !== "") clearError(idNumInput);
  });

  emailInput.addEventListener("input", () => {
    if (emailInput.validity.valid) clearError(emailInput);
  });

  birthdateInput.addEventListener("change", () => {
    if (birthdateInput.value !== "") clearError(birthdateInput);
  });

  documentInput.addEventListener("change", () => {
    if (documentInput.files[0]) clearError(documentInput);
  });

  departmentInput.addEventListener("change", () => {
    if (departmentInput.value !== "") clearError(departmentInput);
  });

  termsCheckbox.addEventListener("change", () => {
    if (termsCheckbox.checked) clearError(termsCheckbox);
  });
}
setupRealtimeValidation();

function updateSummaryValues() {
  nameVal.textContent = nameInput.value;
  idVal.textContent = idNumInput.value;
  emailVal.textContent = emailInput.value;
  bdVal.textContent = birthdateInput.value;

  const fileName = documentInput.files[0]?.name;
  if (fileName) {
    const extension = fileName.split(".").pop();
    const baseName = fileName.split(".")[0];
    const truncatedName = baseName.length > 10 ? baseName.substring(0, 10) + "..." : baseName;
    cvVal.textContent = `${truncatedName}.${extension}`;
  } else {
    cvVal.textContent = "No file selected";
  }

  deptVal.textContent = departmentInput.value;
  skillsVal.textContent = skillsInput.value || "No skills submitted";
}
