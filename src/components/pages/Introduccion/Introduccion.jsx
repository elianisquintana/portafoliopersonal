import './Introduccion.css'
export function Introduccion(){
    return(
        <>

            <section className="container">

                <div className="row">

                    <div className="col-12 col-md-7">
                        <img src="../../../../src/assets/img/foto1.png" alt="" className="img-fluid rounded"/>
                    </div>

                    <div className="col-12 col-md-5">
                        <h1 className="display-1">Elianis Quintana Lopez &copy;</h1>
                        <p>I am a Software Development student based in Medellín with a strong foundation in programming logic and modern development practices. My training has equipped me with hands-on experience in designing relational databases using SQL, as well as developing user interfaces with HTML, CSS, and JavaScript. I have also worked with React for building dynamic front-end applications. Additionally, I am familiar with agile methodologies, enabling me to collaborate effectively in team environments and deliver iterative solutions efficiently. I am passionate about learning and continuously improving my skills to contribute to innovative software projects.</p>
                            

                        <div className="row">
                            <div className="col-4">
                                <div className="card shadow w-100">
                                    <img src="../../../../src/assets/img/html-5.png" alt="" className="img-fluid" />
                                </div>    
                            </div> 
                            <div className="col-4">
                                <div className="card shadow w-100">
                                    <img src="../../../../src/assets/img/css-3.png" alt="" className="img-fluid" />
                                </div>    
                            </div> 
                            <div className="col-4">
                                <div className="card shadow w-100">
                                    <img src="../../../../src/assets/img/python.png" alt="" className="img-fluid" />
                                </div>    
                            </div>    
                        </div>

                        <div className="row mt-4">
                            <div className="col-4">
                                <div className="card shadow w-100">
                                    <img src="../../../../src/assets/img/js.png" alt="" className="img-fluid" />
                                </div>    
                            </div> 
                            <div className="col-4">
                                <div className="card shadow w-100">
                                    <img src="../../../../src/assets/img/java.png" alt="" className="img-fluid" />
                                </div>    
                            </div> 
                            <div className="col-4">
                                <div className="card shadow w-100">
                                    <img src="../../../../src/assets/img/science.png" alt="" className="img-fluid" />
                                </div>    
                            </div>    
                        </div>

                        


                    </div>

                </div>

            </section>

        </>
    )
}