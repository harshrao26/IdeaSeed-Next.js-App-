import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
const Navbar = async () => {
  const session = await auth();
  return (
    <div className="px-5 py-3 fixed top-0 w-full bg-white shadow-sm font-work-sans ">
      <nav className="flex justify-between  items-center text-black">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={60} height={30} />
        </Link>
        <div className="flex gap-4">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span className="border-2 text-sm px-2 py-2 border-black rounded-md">
                  Create
                </span>
              </Link>

              <Link href={`/user`}>
                <span className="border-2 text-sm px-2 py-2 border-black rounded-md">
                  Hello! {session.user.name} 👋
                </span>
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Sign Out</button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login with GitHub</button>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
