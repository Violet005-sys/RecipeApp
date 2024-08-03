import { BACKEND_URL } from "../utils/backend_services";
import Cookies from "js-cookie";

export const login = async ({ email, password }) => {
  const now = new Date();
  const threeHoursLater = new Date(now.getTime() + 3 * 60 * 60 * 1000); // 3 hours in milliseconds

  const response = await fetch(`${BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (response.ok) {
    console.log(data);
    Cookies.set("token", data.token, { expires: threeHoursLater });

    window.location.replace('/');
  } else {
    console.log(data.error);
    alert(`Please key in the right email and password`);
  }
};
