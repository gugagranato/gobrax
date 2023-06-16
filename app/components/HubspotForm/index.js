'use client'
import axios from 'axios';

const HubSpotForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://api.hsforms.com/submissions/v3/integration/submit/19655000/c6e932d7-a2e0-4ce7-971d-174937d2b92a',
        {
          fields: [
            {
              "objectTypeId": "0-1",
              "name": "firstname",
              "value": "Guga"
            },
            {
              "objectTypeId": "0-1",
              "name": "company",
              "value": "Gobrax"
            },
            {
              "objectTypeId": "0-1",
              "name": "jobtitle",
              "value": "Developer"
            },
            {
              "objectTypeId": "0-1",
              "name": "email",
              "value": "example@example.com"
            },
            {
              "objectTypeId": "0-1",
              "name": "phone",
              "value": "example@example.com"
            },
            {
              "objectTypeId": "0-1",
              "name": "frota_total",
              "value": "400"
            },
            {
              "objectTypeId": "0-1",
              "name": "descreve_o_principal_objetivo_da_sua_frota_empresa",
              "value": "Descrição do principal obj. da minha frota_empresa"
            },
          ],
          "context": {
            "hutk": ":hutk",
            "pageUri": "https://calculadora.gobrax.com.br",
            "pageName": "Página de calculadora"
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Página de Contato</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default HubSpotForm;