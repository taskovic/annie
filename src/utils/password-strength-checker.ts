export default function passwordStrengthChecker(value: string) {
  let strength = {
    minChar: "idle",
    containNumber: "idle",
    uppercaseChar: "idle",
    specialChar: "idle",
    lowercaseChar: "idle"
  }

  if (value.length > 5) {
    strength.minChar = "success";
  } else {
    strength.minChar = "error";
  }

  if(/[A-Z]/.test(value)){ 
    strength.uppercaseChar = "success";
  } else {
    strength.uppercaseChar = "error";
  }

  if (/[a-z]/.test(value)) {
    strength.lowercaseChar = "success";
  } else {
    strength.lowercaseChar = "error";
  }

  if(/\d/.test(value)){
    strength.containNumber = "success";
  } else {
    strength.containNumber = "error";
  }

  if(/[!@#$%^&*()]/.test(value)){
    strength.specialChar = "success";
  } else {
    strength.specialChar = "error";
  }
  return strength;
}
