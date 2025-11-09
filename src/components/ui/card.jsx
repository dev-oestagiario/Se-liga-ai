import React from "react";

export const Card = ({ className = "", center = false, children, ...props }) => {
  return (
    <div
      className={`rounded-xl bg-card text-card-foreground shadow-[0_0_0_1px_rgba(214,32,91,0.2),0_4px_20px_-4px_hsl(193,82%,31%/0.1)] hover:shadow-[0_0_0_1px_rgba(214,32,91,0.3),0_8px_30px_-6px_hsl(193,82%,31%/0.15)] transition-all duration-300 ${center ? "flex flex-col items-center justify-center text-center" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className = "", center = false, children, ...props }) => {
  return (
    <div
      className={`flex flex-col space-y-2 p-6 ${center ? "items-center text-center" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ className = "", children, ...props }) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight text-foreground ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ className = "", children, ...props }) => {
  return (
    <p className={`text-sm text-muted-foreground ${className}`} {...props}>
      {children}
    </p>
  );
};

export const CardContent = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`p-6 flex flex-col gap-3 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};




export const CardFooter = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`flex items-center justify-end p-6 pt-0 border-t border-border/20 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
