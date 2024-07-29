import 'next-auth'

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      token: string;
      account_id: number;
      user_id:number;
    }
  }
}