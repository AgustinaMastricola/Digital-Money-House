import 'next-auth'

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      token: string;
      expires: string
    },
    userData:{
      account_id: number;
      user_id:number;
    }
  }
}