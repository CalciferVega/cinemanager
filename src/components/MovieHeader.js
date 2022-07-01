
export default function MovieHeader({movieName, date, hour}) {
    return (
        <div className="tickets-body-header">
            <h2 className="mb-2">{movieName}</h2>
            <span className="mt-2 block">{date} | {hour}</span>
          </div>
    )
}