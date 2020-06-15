//Generates doctor name based on doctor code
const generateDoctor = (doctor) => {
  switch (doctor) {
    case "1":
      return "Dr. Joe Exotic";
    case "2":
      return "Dr. Baskins";
    default:
  }
};

//Generates doctor name based on doctor code
const generateType = (type) => {
  switch (type) {
    case "1":
      return "Check up";
    case "2":
      return "Walk In";
    case "3":
      return "Emergency";
    default:
  }
};

const generateStatus = (status) => {
  switch(status) {
    case "1":
      return "Pending";
    case "2":
      return "Canceled";
    default:
  }
} 

export {generateDoctor, generateType, generateStatus};