  export function validateForm(formData: object, validationRules: object, setErrors: (errors: object) => void): boolean {
    let isValid = true;
    const newErrors: any = {};
  
    Object.keys(validationRules).forEach((fieldName) => {
      const rules = validationRules[fieldName];
  
      rules.forEach((rule) => {
        switch (rule) {
          case "required":
            if (!formData[fieldName]) {
              isValid = false;
              newErrors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
            }
            break;
          case "minLength8":
            if (formData[fieldName] && formData[fieldName].length < 8) {
              isValid = false;
              newErrors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least 8 characters`;
            }
            break;
          default:
            break;
        }
      });
    });
  
    setErrors(newErrors);
    return isValid;
  }
  