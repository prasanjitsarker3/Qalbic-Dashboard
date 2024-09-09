# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# l2b2-full-stack-a5-client-side-prasanjitsarker3

Bike Management Dashboard

Introduction:
The Bike Management Dashboard is a comprehensive web application designed to efficiently manage bike inventory, track sales, and analyze sales history. It provides features such as authentication, CRUD operations, state management, real-time UI updates, and bike filtering. This document serves as a guide for setting up and using the dashboard.

Setup Instructions Server&Client
Server:
Install Node.js, Express.js, TypeScript, Dotenv, CORS, Mongoose, bcrypt, JWT, and Zod.
Ensure that you have these dependencies installed globally or within your project directory.
npm install express typescript dotenv cors mongoose bcrypt jsonwebtoken zod

Client:
Install React.js, TypeScript, Ant Design, Redux Toolkit, Tailwind CSS, react-hook-form, Sonner Toaster, redux-persist, and react-router-dom.Similarly, ensure that you have these dependencies installed either globally or within your project directory.
npm install react react-dom typescript antd @reduxjs/toolkit tailwindcss react-hook-form react-router-dom

Authentication
Users must register and log in to access the dashboard.
JWT (JSON Web Tokens) are used for secure authentication.
Currently, there is a single role, essentially a user responsible for managing the system.

Functionality:

The Bike Management functionality encompasses CRUD operations, allowing users to seamlessly add, delete, update, and view bikes within the inventory. Additionally, a robust filtering system has been implemented, enabling users to filter bikes based on various parameters such as price, release date, brand, model, type, size, and color.

In Sales Management, users can efficiently search for products to sell. Upon identifying a product, they can initiate the selling process by specifying the quantity, buyer's name, and sale date. Notably, when a product's quantity reaches zero due to sales, it is automatically removed from the inventory, ensuring accurate stock management.

Sales History:
Sales History enables users to conveniently view their sales records categorized by weekly, daily, monthly, and yearly intervals. The dashboard provides real-time UI updates for changes in product inventory and sales, ensuring users have up-to-date information at their fingertips. The application leverages RTK Query for efficient CRUD operations, facilitating seamless management of data. Redux is utilized for robust state management, while re-fetching functionality ensures data accuracy, enhancing the overall reliability of the system.

Maintenance and Servicing:
The Bike Maintenance Dashboard streamlines bike maintenance with centralized tracking. Users monitor key details like last service date and upcoming schedules, record tasks and notes, and apply personalized discounts. Its intuitive interface boosts fleet maintenance efficiency, with future plans for reminders, analytics, and service provider integration.

Invoice Download:
The Invoice Printing feature seamlessly generates and prints invoices for sales transactions, detailing bike name, quantity, price, sale date, and total amount. It streamlines the process, reduces manual effort, and ensures consistency. With automated generation and printing, users manage transactions efficiently, maintaining clear records. This enhances user experience, promotes transparency, and fosters professionalism. Overall, it facilitates smoother operations, builds trust, and enhances customer satisfaction with accurate documentation.

Course Features:
This paragraph provides a brief overview of the features included in the Bike Course Management system, focusing on course creation, user enrollment, and data retrieval functionalities. Further details regarding implementation specifics and additional features can be found in the project documentation

Conclusion
The Bike Management Dashboard offers a powerful set of tools for efficiently managing bike inventory, tracking sales, and analyzing sales history. By following the setup instructions and utilizing its features, users can streamline their bike management tasks and enhance their overall workflow.

Live Link:https://super-bombolone-1cd8cb.netlify.app

# Bike_Client
# Qalbic-Dashboard
