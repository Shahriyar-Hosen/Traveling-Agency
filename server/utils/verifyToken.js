import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  // First, validate the token
  verifyToken(req, res, (err) => {
    if (err) {
      return next(err); // Token validation error, proceed with error handling
    }

    // Token is valid, now check if the user is authorized
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next(); // User is authorized, proceed to the next middleware
    } else {
      return next(createError(403, "You are not authorized!")); // User is not authorized
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  // Call verifyToken with the correct number of arguments
  verifyToken(req, res, (err) => {
    if (err) {
      return next(err); // If token verification fails, pass the error to the next middleware
    }

    // If token is valid, check if the user is an admin
    if (req.user.isAdmin) {
      next(); // If admin, proceed to the next middleware
    } else {
      return next(createError(403, "You are not authorized!")); // If not an admin, return an error
    }
  });
};

