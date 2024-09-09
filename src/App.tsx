import MainLayout from "./components/Layout/MainLayout";
import ProtectedRoute from "./components/Layout/ProtectedRoute";

function App() {
  return (
    <div>
      <ProtectedRoute role={undefined}>
        <MainLayout />
      </ProtectedRoute>
    </div>
  );
}
export default App;
