import { useFormik } from "formik";

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

  return errors;
};

function App() {
  const formik = useFormik({
    initialValues: {
      //nombre de los campos con sus llaves
      name: "",
      lastname: "",
      email: ""
    },
    //Propiedad para validar el form
    validate,
    //Function con los valores del formulario
    onSubmit: values => console.log(values)
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        {/* propiedad para mostrar los errores */}
      </div>

      <div>
        <label>Apellido:</label>
        <input type="text" {...formik.getFieldProps("lastname")} />
        {formik.touched.lastname && formik.errors.lastname ? (
          <div>{formik.errors.lastname}</div>
        ) : null}
      </div>

      <div>
        <label>Email:</label>
        <input type="email" {...formik.getFieldProps("email")} />
      </div>
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
