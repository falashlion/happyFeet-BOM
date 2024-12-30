import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser,
    ShowGuesser,
    CustomRoutes
  } from "react-admin";
  import { Layout } from "./Layout";
  import { dataProvider } from "./dataProvider";
  import { authProvider } from "./authProvider";
  import { Route } from "react-router-dom";
  
  // Custom components for additional routes
  const HomePage = () => <h1>Welcome to the Home Page</h1>;
  const AboutPage = () => <h1>About Us</h1>;
  const ContactPage = () => <h1>Contact Us</h1>;
   const AppAdmin = () => (
    <Admin
      layout={Layout}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="posts"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="comments"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="users"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="photos"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
     <CustomRoutes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </CustomRoutes>
    </Admin>
    
  );
  
  export default AppAdmin;