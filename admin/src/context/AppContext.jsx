import { createContext } from "react";

export const AppContext = createContext();
const AppContextProvider = (props) => {
  const calculateAge = (dob) => {
    const todayDate = new Date();
    const birthDate = new Date(dob);
    let age = todayDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = todayDate.getMonth() - birthDate.getMonth();
    const dayDifference = todayDate.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }
    return age;
  };

  const months = ["",
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    );
  };

  const currency = '$';

  const value = {
    calculateAge,
    slotDateFormat,
    currency
  };
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;