import { StyledGlobal } from "./Styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./Routes";
import { AuthProvider } from "./Contexts/AuthContext";
import { AdminProvider } from "./Contexts/AdminContext";
import { UserProvider } from "./Contexts/UserContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AdminProvider>
          <UserProvider>
            <StyledGlobal />
            <RoutesMain />
            <ToastContainer
              position="bottom-right"
              autoClose={500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </UserProvider>
        </AdminProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
