export const validateRequest = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next(); // ✅ Continue if validation passed
    } catch (error) {
      const formattedErrors = error.details.map(err => ({
        field: err.path[0],
        message: err.message
      }));
      return res.status(400).json({
        success: false,
        errors: formattedErrors
      });
    }
  };
};
