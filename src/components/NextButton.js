import { useNavigate } from "react-router-dom"

export default function NextButton({to, action} ) {
    const navigate = useNavigate();
    
    const handleNext = (e) => {
        e.preventDefault();
        navigate(to, { replace: true });
    }
    return (
        <button className="next-btn" onClick={handleNext}>
            {action}
        </button>
    )
}