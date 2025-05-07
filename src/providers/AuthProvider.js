// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";
// import { useNavigate } from "react-router-dom";
// // import useAxiosSecure from "@/hooks/useAxiosSecure";
// import { toast } from "sonner";
// import axios from "axios";
export {};
// // Define the shape of the user object based on backend response
// interface User {
//   email: string;
//   role: "admin" | "user";
// }
// // Define the shape of the auth context
// interface AuthContextType {
//   user: User | null;
//   token: string | null;
//   isAuthenticated: boolean;
//   login: (credentials: { email: string; password: string }) => Promise<void>;
//   logout: () => void;
//   register: (userData: {
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
//   }) => Promise<void>;
//   loading: boolean;
// }
// // Create the Auth Context with default values
// const AuthContext = createContext<AuthContextType | undefined>(undefined);
// // Auth Provider Props
// interface AuthProviderProps {
//   children: ReactNode;
// }
// // Auth Provider Component
// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState<User | null>(null);
//   const [token, setToken] = useState<string | null>(
//     localStorage.getItem("authToken")
//   );
//   const [loading, setLoading] = useState(true);
//   // Define logout before using it in useAxiosSecure
//   const logout = () => {
//     localStorage.removeItem("authToken");
//     setToken(null);
//     setUser(null);
//     navigate("/signin", { replace: true });
//     toast.info("Logged out successfully");
//   };
//   // Create secure Axios instance with token and logout
//   const axiosSecure = useAxiosSecure(token, logout);
//   // Check for existing token on mount
//   useEffect(() => {
//     const initializeAuth = async () => {
//       if (!token) {
//         setLoading(false);
//         return;
//       }
//       try {
//         // Fetch user data using the token
//         const response = await axiosSecure.get(`/auth/me/${token}`);
//         const { email, role } = response.data.data;
//         setUser({ email, role });
//       } catch (error: any) {
//         console.error("Error fetching user from /me:", error);
//         if (error.response?.status === 401) {
//           localStorage.removeItem("authToken");
//           setToken(null);
//           setUser(null);
//           toast.error("Session expired. Please sign in again.");
//         } else {
//           toast.error("Failed to verify session. Please try again later.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
//     initializeAuth();
//   }, [token, axiosSecure]);
//   // Login function
//   const login = async (credentials: { email: string; password: string }) => {
//     try {
//       setLoading(true);
//       const response = await axios.post(
//         "https://headup-server.vercel.app/api/v1/auth/login",
//         credentials
//       );
//       const { accessToken, data } = response.data.data;
//       localStorage.setItem("authToken", accessToken);
//       setToken(accessToken);
//       setUser({ email: data.email, role: data.role });
//       toast.success("Logged in successfully!");
//       navigate("/dashboard", { replace: true });
//     } catch (error: any) {
//       console.error("Login error:", error);
//       const message =
//         error.response?.status === 401
//           ? "Invalid email or password"
//           : error.response?.data?.message || "Login failed";
//       toast.error(message);
//       throw new Error(message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   // Register function
//   const register = async (userData: {
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
//   }) => {
//     try {
//       setLoading(true);
//       const response = await axios.post(
//         "https://headup-server.vercel.app/api/v1/users/create-user",
//         userData
//       );
//       if (response.data.success) {
//         toast.success("Account created successfully!");
//         navigate("/signin", { replace: true }); // Changed to dashboard for better UX
//       }
//     } catch (error: any) {
//       console.error("Registration error:", error);
//       const message = error.response?.data?.message || "Registration failed";
//       toast.error(message);
//       throw new Error(message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   // Context value
//   const value: AuthContextType = {
//     user,
//     token,
//     isAuthenticated: !!token && !!user,
//     login,
//     logout,
//     register,
//     loading,
//   };
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
// // Custom hook to use the Auth Context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
