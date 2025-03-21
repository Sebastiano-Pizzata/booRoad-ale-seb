import { Link } from 'react-router-dom'
export default function CardViaggi({ viaggio }) {

    const { id, destinazione, dataInizio, dataFine } = viaggio;



    return (
        <>
            <div className="col-4">
                <div className="card my-2">
                    <div className="card-header">
                        {destinazione}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Inizio Viaggio: {dataInizio}</li>
                        <li className="list-group-item">Fine Viaggio: {dataFine}</li>
                        <Link to={`/viaggio/${id}`} className="list-group-item">Partecipanti</Link>
                    </ul>
                </div>
            </div>
        </>
    )
}