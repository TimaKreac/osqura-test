import { IUser } from './../models/IUser';
import axios, { AxiosResponse } from 'axios';

export default class UserService {
  static async checkEmail(
    email: string
  ): Promise<AxiosResponse<{ exists: 0 | 1 }>> {
    return axios.post(
      '/auth/check-email',
      { email },
      {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      }
    );
  }

  static async loginUser(user: IUser): Promise<AxiosResponse> {
    return axios.post('/auth/login', user, {
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    });
  }

  static async registerUser(user: IUser): Promise<AxiosResponse> {
    return axios.post('/auth/register', user, {
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    });
  }
}
