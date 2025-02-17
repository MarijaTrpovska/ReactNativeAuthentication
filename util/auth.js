import axios from "axios";

const API_KEY = "change-it-to-env-variable";

async function authenticate(mode, email, password) {
  url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export  function createUser(email, password) {
  return  authenticate("signUp", email, password); //returns token
}


export function login(email, password) {
  return authenticate("signInWithPassword", email, password); //returns token
}