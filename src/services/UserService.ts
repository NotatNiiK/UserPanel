import axios from "axios";
import { AxiosResponse } from "axios";
import { IApiResponse } from "../models/api.response";

class UserService {
  public static async getUsers(): Promise<AxiosResponse<IApiResponse>> {
    return axios.get(import.meta.env.VITE_APP_SERVER_URL);
  }
}

export default UserService;
