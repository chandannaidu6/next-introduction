"use server"
import client from '@/db'

export async function signin(email:string,password:string){

    try{
        await client.user.create({
            data:{
                email:email,
                password:password
            }
        })
        return "Signup"
    }
    catch(e){
        return "Error"
    }

}