import logo from '@/assets/logo.png'
import { format } from 'date-fns';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='pt-10 text-center space-y-3'>
            <Image src={logo} alt='logo' width={400} height={150} className='mx-auto'></Image>
            <h2 className='font-semibold text-lg text-gray-600'>Journalism Without Fear or Favour</h2>
            <p>{format(new Date(), "EEEE , MMM dd YYY")}</p>
        </div>
    );
};

export default Header;