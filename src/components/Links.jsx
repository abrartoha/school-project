export default function Links({type,children}){
    return(
        <>  
            <div className="card border border-2 border-dark" style={{ padding: '20px'}}>
            <div className="card-body">
                {children}
                <button className="btn btn-success d-block mx-auto">{type}</button>
            </div>
            </div>
        </>
    );
}