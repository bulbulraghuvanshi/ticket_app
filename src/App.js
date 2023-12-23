import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import SharedLayout from "./Pages/Internal/SharedLayout";
import Home from "./Pages/Internal/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgetPassword from "./Pages/ForgetPassword";
import Error from "./Pages/Error";
import MyTicket from "./Pages/Internal/MyTicket";
import NewTicket from "./Pages/Internal/NewTicket";
import Setting from "./Pages/Internal/Setting";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoutes>
							<SharedLayout />
						</ProtectedRoutes>
					}>
					<Route index element={<Home />} />
					<Route path="/my-tickets" element={<MyTicket />} />
					<Route path="/new-tickets" element={<NewTicket />} />
					<Route path="/performance" element={<NewTicket />} />
					<Route path="/database" element={<NewTicket />} />
					<Route path="/settings" element={<Setting />} />
					<Route path="/ticket-approval" element={<NewTicket />} />
					<Route path="/user-logs" element={<NewTicket />} />
				</Route>
				<Route path="/login" element={<Login />} />

				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/forgoten-password" element={<ForgetPassword />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
