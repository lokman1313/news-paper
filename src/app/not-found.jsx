import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col gap-8 justify-center items-center h-dvh">
            <h1 className="text-4xl font-bold text-red-400">This page Is not Avelable</h1>
            <Link href={'/'}><button className="btn btn-primary">Back To Home</button></Link>
        </div>
    );
};

export default NotFound;