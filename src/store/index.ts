import { createStore, Commit, Dispatch } from "vuex";
import { IUsers } from "../models/user";
import { IPageParams, IApiError } from "../models/api.response";
import UserService from "../services/UserService";

interface State {
  users: IUsers;
}

interface MyContext {
  commit: Commit;
  dispatch: Dispatch;
}

export default createStore<State>({
  state: {
    users: [],
  },

  mutations: {
    setUsers(state: State, newUsers: IUsers) {
      state.users = newUsers;
      console.log(state.users);
    },
  },

  actions: {
    async getUsers(
      { commit }: MyContext,
      pageParams: IPageParams
    ): Promise<void | { error: boolean; message: string }> {
      try {
        const {
          data: { data },
        } = await UserService.getUsers(pageParams);

        commit("setUsers", data);
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
