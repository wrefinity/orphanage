export const handleInput = (e, setHook) => {
    const { name, value } = e.target;
    setHook((prev) => ({
       ...prev, [name]: value
    }))
 }
 


 
 export const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

 
    if (!values.password) {
       errors.password = "password required";
    } else if (values.password.length < 6) {
       errors.password = "password length must exceed 6 character";
    }

 
    if (values.hasOwnProperty('image') && !values.image) {
       errors.image = "image required";
    }
 
    if (!values.email) {
       errors.email = "email required";
    } else if (!regex.test(values.email)) {
       errors.email = "invalid email address";
    }
 
    return errors
 }
 
 
 export const validateEmpty = (values) => {
    const errors= {};
    for(let x of values){
       if(x === ""){
          errors.all='all fields required';
          break;
       } 
    }
    return errors
 
 }
