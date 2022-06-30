export default function BackButton({sticky}) {
    const handleBack = () => {
        window.history.back();
    }
    let positionIn = sticky ? 'absolute mt-4 ml-4' : 'inline-block';

    return (
        <div className={`back-btn ${positionIn} mr-2 pt-1`}>
        <button onClick={handleBack}>
            <img src="../assets/return-movie.png" alt="back" />
        </button>
        </div>
    );
}