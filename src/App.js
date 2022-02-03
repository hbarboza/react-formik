import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "./components/TextInput";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import Select from "./components/Select";
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;

  form {
    width: 400px;
  }

  .form-control {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
  }

  .form-input,
  .form-select {
    border: #ccc solid 1px;
    padding: 10px 15px;
    border-radius: 5px;
  }

  input[type="email"] {
    border: green solid 1px;
  }

  .form-label {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .form-error {
    color: red;
    font-size: 14px;
    padding: 5px;
    margin-top: 3px;
    border-bottom: red dotted 1px;
  }
`;

const Button = styled.button`
  background-color: ${props => (props.primary ? "red" : "green")};
  color: ${props => (props.primary ? "white" : "white")};
  padding: 10px 15px;
  border: green solid 1px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const BlockButton = styled(Button)`
  font-size: 18px;
  width: 100%;

  &:hover {
    background-color: red;
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
    border: red solid 1px;
  }

  &.secondary{
    border: gray solid 1px;
    color: gray;
    background-color: white;
    margin-top: 5px;
  }
`;

//Pasar estilos a un componente ya creado
const SelectStyledField = styled(Select)`  
  border: orange solid 1px;
  padding: 10px 15px;
  border-radius: 5px;
`;

const validate = values => {
  //recibe una funcion con los valores del form como parámetro
  const errors = {};

  if (!values.name) {
    errors.name = "El Nombre es requerido";
  } else if (values.name.length < 5) {
    errors.name = "El Nombre debe ser mayor a 5 caracteres";
  }

  if (!values.lastname) {
    errors.lastname = "El Apellido es requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "El Apellido debe ser mayor a 5 caracteres";
  }

  if (!values.email) {
    errors.email = "El Email es requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Ingresa una dirección de email válida";
  }

  if (!values.radio) {
    errors.radio = "Define tu estado civil";
  }

  if (!values.color) {
    errors.color = "Selecciona un color";
  }

  if (!values.accept) {
    errors.accept = "Debes aceptar los términos y condiciones";
  }

  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        color: "",
        accept: "",
        radio: ""
      }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Wrapper>
        <Form>
          <TextInput label="Nombre" name="name" />
          <TextInput label="Apellido" name="lastname" />
          <TextInput label="Email" name="email" type="email" />

          <SelectStyledField label="Color favorito" name="color">
            <option value="">Selecciona el color</option>
            <option value="rojo">Rojo</option>
            <option value="azul">Azul</option>
            <option value="blanco">Blanco</option>
          </SelectStyledField>

          <div className="form-control">
            <label className="form-label">Estado Civil</label>
            <Radio name="radio" value="casado" label="Casado" />
            <Radio name="radio" value="soltero" label="Soltero" />
            <Radio name="radio" value="divorciado" label="Divorciado" />
            <div className="form-error">
              <ErrorMessage name="radio" />
            </div>
          </div>
          <Checkbox name="accept">Aceptar los términos y condiciones</Checkbox>
          {/* <Button>Enviar </Button>
          <Button primary>Enviar </Button> */}
          {/* <BlockButton as="a" href="#">Esto es un anchor que hereda propiedades del botón</BlockButton> */}
          <BlockButton>Enviar</BlockButton>
          <BlockButton className="secondary" type="reset">Limpiar</BlockButton>
        </Form>
      </Wrapper>
    </Formik>
  );
}

export default App;
