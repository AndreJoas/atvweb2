import './index.css';

// componente do header

function Cabeca() {
    return (
        <div className='divimagem' style={{ display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: "center", maxWidth: "100%" }}>
            <p style={{ color: "#fff", marginTop: "-1rem", textAlign: "center" }}>Você sabe qual combustivel compensa mais abastecer seu carro?</p>
            <p style={{ color: "#fff" }}>Utilize a calculadora abaixo:</p>
        </div>

    )
}

export default Cabeca;
