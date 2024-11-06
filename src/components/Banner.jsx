import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='relative'>
            <div className="bg-violateBanner min-h-[500px] flex justify-center pt-2 ">
                <div className=" text-center">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <Link to="/dashboard" className="btn rounded-full text-violateBanner font-bold">Shop Now</Link>
                    </div>
                </div>
                <div className="absolute -bottom-60  border-2 border-white p-2 backdrop-blur-xl bg-white/30 rounded-2xl">
                    <img className='rounded-2xl lg:w-[700px] h-[350px]' src={bannerImg} alt="" />
                    <p className='mt-14 text-center font-bold text-3xl'>Explore Cutting-Edge Gadgets</p>
                </div>
            </div>

        </div>
    );
};

export default Banner;