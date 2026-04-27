import Link from "next/link";
import user from '@/assets/user.png'
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <ul className="flex justify-center items-center gap-3">
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            <div className="flex justify-between items-center gap-2">
                <Image src={user} alt="user" width={20} ></Image>
                <Link href={'/signIn'}><button className="btn">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;