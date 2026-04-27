import { FaGithub, FaGoogle } from "react-icons/fa";


const LogoWith = () => {
    return (
        <div className="space-y-2"> 
        <div className="flex flex-col gap-2">
            <button className=" btn border-blue-500 text-blue-500"><FaGoogle /> Login With Google</button>
            <button className="btn"><FaGithub /> Login With Github</button>
        </div>
        </div>
    );
};

export default LogoWith;