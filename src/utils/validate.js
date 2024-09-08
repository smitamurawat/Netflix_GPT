export const checkValidData = (email, password, name) => {
  if (name?.length > 0) {
    const fullname = /^[a-zA-Z]+[a-zA-Z]+$/.test(name);
    if (!fullname) return "Name is not invalid";
  }

  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const regpassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!regexEmail) return "Email id is not valid";
  if (!regpassword) return "password is not valid";

  return null;
};
