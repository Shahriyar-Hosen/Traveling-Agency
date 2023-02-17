import { memo } from "react";

const ErrorMessage = memo(({ title, className, minH }) => {
  return (
    <div className={`${minH && "min-h-6"}`}>
      {title && <p className={`text-red-500 ${className}`}>{title}</p>}
    </div>
  );
});

export default ErrorMessage;
