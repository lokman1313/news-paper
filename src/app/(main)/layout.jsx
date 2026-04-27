import BrekingNews from "@/components/shared/BrekingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({children }) => {
    return (
        <>
        <div className="container mx-auto space-y-4">

            <Header></Header>
            <BrekingNews></BrekingNews>
        <Navbar></Navbar>
        {children }
        </div>
        </>
    );
};

export default MainLayout;