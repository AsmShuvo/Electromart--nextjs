import { httpAxios } from "@/helper/httpHelper";

export const signUp = async (user) => {
  const result = await httpAxios
    .post("/api/users", user)
    .then((res) => res.data);

  return result;
};

export const login = async (data) => {
  const result = await httpAxios
    .post("/api/login", data)
    .then((res) => res.data);

  return result;
};
