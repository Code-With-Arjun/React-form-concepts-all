import * as yup from 'yup';
import "yup-phone";
let schema = yup.object().shape({
name: yup.string().min(2, 'Too Short!').max(18, 'Too Long!').required('Required'),
email:yup.string().email('Invalid email').required('Required'),
phone:yup.string().phone('IN', true, 'Phone is invalid').required("Please Enter Your Phone number"),
password:yup.string().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ).required("Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
gender:yup.string().required("Gender is Required"),
hobbies:yup.array().of(yup.string("string required")).min(2,"minimum 2 is required").required("Hobbies is Required"),
state:yup.string().required("State field is must")
});

export default schema;