"use client"
import Link from "next/link";
import user from '@/assets/user.png'
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/app/lib/auth-client";
import { redirect } from "next/navigation";

const Navbar = () => {
    const { data: session,isPending } = authClient.useSession()
    const userData = session?.user;
    console.log(userData)
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <ul className="flex justify-center items-center gap-3">
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            { isPending ? <h2>Loding.....</h2> : userData ?  (<div className="flex justify-between items-center gap-2">
                <p>Hello {userData?.name}</p>
                <Image src={user} alt="user" width={20} ></Image>
                <button className="btn" onClick={ async ()=> await authClient.signOut() }>Logout</button>
            </div>)
            : 
            <Link href={'/signIn'} ><button className="btn">Login</button></Link>
            }
        </div>
    );
};

export default Navbar;