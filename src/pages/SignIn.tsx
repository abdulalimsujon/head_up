// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Link } from "react-router-dom";
// import { ArrowLeft, } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// import { useState } from "react";
// import { useAuth } from "@/providers/AuthProvider";

// const formSchema = z.object({
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   password: z.string().min(6, {
//     message: "Password must be at least 6 characters long.",
//   }),
// // });

// export default function SignIn() {
//   const { login } = useAuth();
//   const [error, setError] = useState<string | null>(null);
//   const [validationErrors, setValidationErrors] = useState<any[]>([]);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     setError(null);
//     setValidationErrors([]);
//     setSuccess(null);
//     setIsLoading(true);
  
//     try {
//       await login(values);
//       setSuccess("Logged in successfully!");
//     } catch (err: any) {
//       setError(err.message || "Failed to sign in");
//       if (err.response?.data?.errorSources) {
//         setValidationErrors(err.response.data.errorSources);
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <main className="min-h-screen w-full p-4 flex justify-center items-center">
//       <div className="max-w-md mx-auto w-full px-4 py-8">
//         <Link
//           to="/"
//           className="inline-flex items-center text-sm text-muted-foreground hover:text-[#8200ff] transition-colors mb-8"
//         >
//           <ArrowLeft className="mr-2 h-4 w-4" />
//           Back to home
//         </Link>

//         <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
//           <div className="mb-8 text-center">
//             <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8200ff] to-[#6900cc] mb-2">
//               Welcome Back
//             </h1>
//             <p className="text-muted-foreground">
//               Sign in to continue your podcast journey
//             </p>
//           </div>

//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-sm font-medium">Email</FormLabel>
//                     <FormControl>
//                       <Input
//                         type="email"
//                         placeholder="Enter your email"
//                         className="bg-white/50 border-muted/30 focus:border-[#8200ff] h-12 text-base"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage className="text-red-500" />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="password"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-sm font-medium">
//                       Password
//                     </FormLabel>
//                     <FormControl>
//                       <Input
//                         type="password"
//                         placeholder="Enter your password"
//                         className="bg-white/50 border-muted/30 focus:border-[#8200ff] h-12 text-base"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage className="text-red-500" />
//                   </FormItem>
//                 )}
//               />
//               <Button
//                 type="submit"
//                 className="w-full h-12 text-base font-medium bg-[#8200ff] hover:bg-[#6900cc] transition-colors"
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Signing In..." : "Sign In"}
//               </Button>
//             </form>
//           </Form>

//           {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
//           {error && (
//             <div className="text-red-500 mt-4 text-center">
//               <p>{error}</p>
//               {validationErrors.length > 0 && (
//                 <ul className="list-disc pl-5 mt-2 text-left">
//                   {validationErrors.map((source) => (
//                     <li key={source.path}>{`${source.path}: ${source.message}`}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           )}

//           <div className="mt-8 text-center space-y-4">
//             <Link
//               to="/forgot-password"
//               className="text-sm text-muted-foreground hover:text-[#8200ff] transition-colors"
//             >
//               Forgot your password?
//             </Link>
//             <div className="text-sm">
//               <span className="text-muted-foreground">
//                 Don't have an account?{" "}
//               </span>
//               <Link
//                 to="/signup"
//                 className="text-[#8200ff] hover:text-[#6900cc] font-medium transition-colors"
//               >
//                 Create an account
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }