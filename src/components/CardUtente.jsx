export default function CardUtente({ viaggio }) {
    const { nome, cognome } = viaggio;
    return (
        <div className="col-4 mx-auto">
            <div className="card my-2 ">
                <div className="card-body bg-secondary">
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item bg-secondary">Nome: {nome}</li>
                        <li className="list-group-item bg-secondary">Cognome: {cognome}</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}