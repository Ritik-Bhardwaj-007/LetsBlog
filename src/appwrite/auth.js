import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService{
    client= new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account= new Account(this.client);
    }
    async createAccount({email,password,name}){
        try {
           const userAccount=await this.account.create(ID.unique(),email,password,name);
           if(userAccount){
            return this.login({email, password}); 
           }
           else{
            return userAccount;
           }
        } catch (e) {
            throw e;
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            return error;
        }
    }
    async getCurrentUser(){
        try {
            const data= await this.account.get();
            console.log(data);
            return data;
            
        } catch (error) {
            console.log("Appwrite service:: getCurrentUser:: error",error);
            // return null;
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error);
        }
    }
}
const authService= new AuthService();

export default authService