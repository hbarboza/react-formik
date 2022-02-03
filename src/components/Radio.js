import {useField} from 'formik'

const Radio = ({label, ...props}) => {
  const[field] = useField({...props, type:'radio'})

  return(
    <div className="form-control">
      <label className="formLabel">
        <input type="radio" {...field} {...props}></input>
        {label}
      </label>
    </div>
  )

}

export default Radio