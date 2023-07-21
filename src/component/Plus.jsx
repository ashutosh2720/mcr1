import { useNavigate } from "react-router-dom";


const Plus = () => {
    const navigate = useNavigate()

    return (
        <div className={'bg-orange-600 fixed bottom-8 right-8 p-4 rounded-full cursor-pointer text-white border-2 border-white/30'}
            onClick={() => navigate('/search')}>
            add books
        </div>
    );
};

export default Plus;