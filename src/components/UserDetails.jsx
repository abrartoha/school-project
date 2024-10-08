export default function UserDetails(){
    return(
        <>
            <h3 className="h3 text-center mb-3" style={{marginTop: '50px'}}>User details</h3>
            <div className="card w-75 mx-auto p-3 border border-2 border-primary">
                <img src="./images/avatar.jpg" className="card-img-top border border-2 " alt="..." style={{display:'block', maxHeight: '20vh', maxWidth:'20%'}}/>
                <div className="card-body">
                    <h5 className="card-text h5">Abrar Hossain Chy Toha</h5>
                    <p>ID: 103506608
                        <br />
                        Teacher
                        <br />
                        Mail: abrartoha6@gmail.com
                        <br />
                        +61472533475
                        <br />
                        Address: 39 Lonsdale Street, Melbourne, Victoria, 3000.
                    </p>
                </div>
            </div>
        </>
    );
}