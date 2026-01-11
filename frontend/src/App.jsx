import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import OwnerDashboard from "./pages/OwnerDashboard";
import CustomerDashboard from './pages/CustomerDashboard';
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<OwnerDashboard />} />
         <Route path="menu" element={<CustomerDashboard />} />
         <Route path="kitchen" element={<Dashboard />} />
         <Route path="orders" element={<CustomerDashboard />} />
       </Route>
     </Routes>

    </BrowserRouter>
  );
}






// function App() {
//   return (
//     <Layout>
//       <OwnerDashboard />
//     </Layout>
//   );
// }














// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import OwnerDashboard from "./pages/OwnerDashboard";
// import CustomerDashboard from "./pages/CustomerDashboard";
// import KitchenDashboard from "./pages/KitchenDashboard";
// import { useState } from "react";
// import "./styles/global.css";

// function App() {
//   const [role, setRole] = useState("owner");
//   return (
//     <>
//       <Header role={role} setRole={setRole} />

//       <div style={{ padding: "20px" }}>
//         {role === "owner" && <OwnerDashboard />}
//         {role === "customer" && <CustomerDashboard />}
//         {role === "kitchen" && <KitchenDashboard />}
//       </div>    </>
//   );
// }

// export default App;
