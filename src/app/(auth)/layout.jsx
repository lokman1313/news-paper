import Navbar from "@/components/shared/Navbar";

const LogInLayout = ({children }) => {
    return (
        <>
            <Navbar></Navbar>
        {children }
        </>
    );
};

export default LogInLayout;