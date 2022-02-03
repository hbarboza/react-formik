import {useField} from 'formik'

const Select = ({label, ...props}) => {
  const[field, meta] = useField()
  return(
    <div className="form-control">
      <label className="form-label">{label}</label>
      <select {...field} {...props}></select>
      {meta.touched && meta.error ? <div className="form-error">{meta.error}</div> : null}
    </div>
  )
}

export default Select