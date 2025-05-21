import "./Home.css";
export function Home() {
  return (
    <>
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-5">
            <h1>ELIANIS QUINTANA LOPEZ</h1>
            <img
              src="../../../../src/assets/img/foto.jpeg"
              alt=""
              className="img-fluid rounded shadow foto"
            />
            <hr />
            <p>
              Soy una persona creativa, apasionada por la programación y la
              música. Disfruto aprender constantemente y explorar nuevas formas
              de combinar la tecnología con el arte. La programación me permite
              resolver problemas, construir soluciones útiles y expresar mi
              pensamiento lógico, mientras que la música me inspira y me conecta
              con mis emociones. Creo que ambas pasiones se complementan,
              impulsando mi capacidad para crear, innovar y trabajar con
              dedicación en todo lo que hago.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
