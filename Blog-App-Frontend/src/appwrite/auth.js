import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";
  
export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
         .setEndpoint(config.appwriteURL)
         .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,username}){
        try {
            const userAccount = await this.account.create(ID.unique(),email, password, username);
            if(userAccount){
                // Call another method to do login.
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;