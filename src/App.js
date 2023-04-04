import { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const handleAlturaChange = (event) => {
    setAltura(event.target.value);
  };

  const handlePesoChange = (event) => {
    setPeso(event.target.value);
  };

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    setImc(imc.toFixed(2));
    if (imc < 18.5) {
      setClassificacao('Magreza');
    } else if (imc >= 18.5 && imc < 25) {
      setClassificacao('Normal');
    } else if (imc >= 25 && imc < 30) {
      setClassificacao('Sobrepeso');
    } else if (imc >= 30 && imc < 40) {
      setClassificacao('Obesidade');
    } else {
      setClassificacao('Obesidade Grave');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Calculadora de IMC</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Altura (cm)</Form.Label>
          <Form.Control type="number" value={altura} onChange={handleAlturaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Peso (kg)</Form.Label>
          <Form.Control type="number" value={peso} onChange={handlePesoChange} />
        </Form.Group>
        <Button variant="primary" onClick={calcularIMC}>
          Calcular
        </Button>
      </Form>
      {imc && (
        <Table className="mt-4">
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{imc}</td>
              <td>{classificacao}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default App;
