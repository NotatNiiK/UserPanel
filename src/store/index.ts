import { createStore } from "vuex";
import { IUsers } from "../models/user";
import { IApiError, IErrorObject } from "../models/api.response";
import UserService from "../services/UserService";

export default createStore({
  actions: {
    async getUsers(): Promise<IUsers | IErrorObject> {
      try {
        const {
          data: { data },
        } = await UserService.getUsers();
        return data;
      } catch (e: unknown) {
        const error = e as IApiError;
        console.log(error);

        return {
          error: true,
          message: error.response?.data?.message || "Unexpected error",
        };
      }
    },
  },
});
