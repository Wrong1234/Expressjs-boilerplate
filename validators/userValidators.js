import Joi from 'joi';

// 🧠 User Registration Validation Schema
const registerValidation = Joi.object({
  username: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 3 characters long',
      'string.max': 'Name cannot exceed 50 characters'
    }),

  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Enter a valid email address'
    }),

  password: Joi.string()
    .min(6)
    .max(32)
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9@#%$!]+$'))
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 6 characters long',
      'string.pattern.base': 'Password can contain letters, numbers, and symbols (@, #, %, $, !)'
    }),

  confirmPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Passwords do not match',
      'any.required': 'Confirm password is required'
    }),
});

const loginValidation = Joi.object({
   email: Joi.string()
    .email()
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Enter a valid email address'
    }),

  password: Joi.string()
    .min(6)
    .max(32)
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9@#%$!]+$'))
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 6 characters long',
      'string.pattern.base': 'Password can contain letters, numbers, and symbols (@, #, %, $, !)'
    }),

})

// export default{ registerValidation, loginValidation };

export { registerValidation, loginValidation };
