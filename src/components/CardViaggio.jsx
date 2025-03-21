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
                        <li className="list-group-item "><Link to={`/viaggio/${id}`} >Partecipanti</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}