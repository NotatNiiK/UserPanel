import { createStore } from "vuex";
import { IUsers } from "../models/user";
import { IPageParams, IApiError } from "../models/api.response";
import UserService from "../services/UserService";

interface State {
  users: IUsers;
}

export default createStore<State>({
  actions: {
    async getUsers(): Promise<IUsers | { error: boolean; message: string }> {
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
  getters: {},
});
