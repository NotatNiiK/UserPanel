import { createStore, Commit, Dispatch } from "vuex";
import { IUsers } from "../models/user";
import { IPageParams } from "../models/api.response";
import { AxiosError } from "axios";
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
    },
  },

  actions: {
    async getUsers(
      { commit }: MyContext,
      pageParams: IPageParams
    ): Promise<void> {
      try {
        const {
          data: { data },
        } = await UserService.getUsers(pageParams);
        commit("setUsers", data);
      } catch (e: unknown) {
        const error = e as AxiosError;
        console.log(error);
      }
    },
  },
  getters: {},
});
