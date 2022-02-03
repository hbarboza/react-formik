import {useField} from 'formik'

const Select = ({label, className, ...props}) => {
  const[field, meta] = useField(props)
  return(
    <div className="form-control">
      <label className="form-label">{label}</label>
      <select className={className} {...field} {...props}></select>
      {meta.touched && meta.error ? <div className="form-error">{meta.error}</div> : null}
    </div>
  )
}

export default Select