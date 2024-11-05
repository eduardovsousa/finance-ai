import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/login')
  }

  return (
    <div className="flex items-center justify-center h-full">
      <UserButton showName />
    </div>
  );
}
