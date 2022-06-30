import BackButton from "../components/BackButton";
export default function VenuesMenu() {
    
    const handleFilter = (event) => {
        event.preventDefault();
        const filter = event.target.value;
        console.log(filter);
    }

    return (
        <div className="menu-venue mt-4 ml-4">
            <header className="mb-4">
                <BackButton />
                <h1 className="inline-block ml-1">Select your venue</h1>
            </header>
            <div className="menu-venue-container" >
                <button className="menu-venue-item block mb-2" value='SJ' onClick={handleFilter}>
                    San Jose, CA.
                </button>
                <button className="menu-venue-item block mb-2" value='SF' onClick={handleFilter}>
                    San Francisco, CA.
                </button>
                <button className="menu-venue-item block mb-2" value='LA' onClick={handleFilter}>
                    Los Angeles, CA.
                </button>
                <button className="menu-venue-item block mb-2" value='NY' onClick={handleFilter}>
                    New York, NY.
                </button>
            </div>
        </div>
        )
}