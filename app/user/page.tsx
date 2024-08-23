import { PrismaClient } from "@prisma/client";

const client = new PrismaClient

async function getUserDetails() {
    const user = await client.user.findFirst();
    return{
        email:user?.email,
        name:"chandan"
    } 
}


export default async function Home() {
  const userData = await getUserDetails();
  if(!userData){
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
  );
}
