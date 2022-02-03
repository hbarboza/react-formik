import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "./components/TextInput";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import Select from "./components/Select";

const validate = values => {
  //recibe una funcion con los valores del form como parámetro
  const errors = {};

  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre debe ser mayor a 5 caracteres";
  }

  if (!values.lastname) {
    errors.lastname = "Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "El apellido debe ser mayor a 5 caracteres";
  }

  if (!values.radio) {
    errors.radio = "Requerido"
  }

  if (!values.color) {
    errors.color = "Selecciona un color"
  }

  if (!values.accept) {
    errors.accept = "Debes aceptar los términos y condiciones"
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
      <Form>
        <TextInput label="Nombre" name="name" />
        <TextInput label="Apellido" name="lastname" />
        <TextInput label="Email" name="email" />
        <Checkbox name="accept">Aceptar los términos y condiciones</Checkbox>
        <Select label="Color favorito" name="color">
          <option value="">Selecciona el color</option>
          <option value="rojo">Rojo</option>
          <option value="azul">Azul</option>
          <option value="blanco">Blanco</option>
        </Select>
        <div className="form-control">
          <label className="form-label">Estado Civil</label>
          <Radio name="radio" value="casado" label="Casado" />
          <Radio name="radio" value="soltero" label="Soltero" />
          <Radio name="radio" value="divorciado" label="Divorciado" />
          <ErrorMessage name="radio" />
        </div>

        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
