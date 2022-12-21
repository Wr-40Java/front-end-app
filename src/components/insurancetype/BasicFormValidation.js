import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const BasicFormValidation = yup.object().shape({
    description: yup.string('Please type in letters').required('Field is required'),
    costsPerYear: yup.number('Please type in numbers').positive('Type in number > 0').required('Field is required'),
    coveredCompensation: yup.number('Please type in numbers').positive('Type in number > 0').required('Field is required')
})