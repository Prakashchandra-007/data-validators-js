// Non-Empty Check:
function isNotEmpty(data) {
  if (typeof data === "string") {
    // Check if the string is not empty or contains only whitespace
    return data.trim() !== "";
  } else if (
    Array.isArray(data) ||
    (typeof data === "object" && data !== null)
  ) {
    // Check if the collection is not empty
    return Object.keys(data).length !== 0;
  } else {
    // Unsupported data type
    throw new Error(
      "Unsupported data type. Please provide a string or a collection."
    );
  }
}

//length validation
// Function to validate minimum length
function minLength(data, minLength) {
  if (typeof data === "string" || Array.isArray(data)) {
    return data.length >= minLength;
  } else {
    throw new Error(
      "Unsupported data type. Please provide a string or an array."
    );
  }
}

// Function to validate maximum length
function maxLength(data, maxLength) {
  if (typeof data === "string" || Array.isArray(data)) {
    return data.length <= maxLength;
  } else {
    throw new Error(
      "Unsupported data type. Please provide a string or an array."
    );
  }
}

// Email validation
function isValidateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Numeric Validation:
function isValidNumber(input) {
  if (typeof input === "number") {
    // Check if it's a valid number
    return !isNaN(input);
  } else if (typeof input === "string") {
    // Try to parse the string as a number
    return !isNaN(parseFloat(input)) && isFinite(input);
  } else {
    // Unsupported data type
    return false;
  }
}

// Phone Number Validation:

function isValidatePhoneNumber(phoneNumber) {
  // Remove non-digit characters
  const cleanNumber = phoneNumber.replace(/\D/g, "");

  // Check if the cleaned number has at least 5 digits (a minimal assumption)
  return cleanNumber.length >= 5;
}
module.exports = {
  isNotEmpty,
  isValidNumber,
  isValidateEmail,
  maxLength,
  minLength,
  isValidatePhoneNumber,
};
