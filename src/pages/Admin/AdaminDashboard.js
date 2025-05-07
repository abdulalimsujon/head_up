import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Users, CreditCard, Package, Home, LogOut, Menu, } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function AdminDashboard() {
    const { pathname } = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const routes = [
        {
            label: "Users",
            icon: Users,
            href: "/dashboard/users",
            active: pathname === "/dashboard/users",
        },
        {
            label: "Payments",
            icon: CreditCard,
            href: "/dashboard/payments",
            active: pathname === "/dashboard/payments",
        },
        {
            label: "Packages",
            icon: Package,
            href: "/dashboard/packages",
            active: pathname === "/dashboard/packages",
        },
    ];
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (_jsxs("div", { className: "relative min-h-screen flex bg-gradient-to-br ", children: [_jsxs("div", { className: cn("w-72 bg-gradient-to-br from-[#8200ff] to-[#6900cc] backdrop-blur-xl border-r border-white/20 flex flex-col transition-transform duration-300", "fixed inset-y-0 left-0 z-30 md:sticky md:top-0 md:translate-x-0 h-screen", isSidebarOpen ? "translate-x-0" : "-translate-x-full"), children: [_jsx("div", { className: "p-6 border-b border-white/20", children: _jsx(Link, { to: "/", className: "flex items-center gap-3 w-fit", children: _jsx("img", { className: "object-contain", src: logo, alt: "Logo" }) }) }), _jsxs("div", { className: "flex-1 px-4 py-6 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20", children: [_jsx(Link, { to: "/", className: "block", children: _jsxs(Button, { variant: "ghost", className: "w-full justify-start gap-3 text-white/80 hover:text-white hover:bg-white/10", children: [_jsx(Home, { className: "h-5 w-5" }), "Back to Home"] }) }), _jsxs("div", { className: "space-y-1", children: [_jsx("p", { className: "text-xs uppercase text-white/60 font-semibold tracking-wider px-3 mb-2", children: "Main Menu" }), routes.map((route) => (_jsxs(Link, { to: route.href, className: cn("flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-200", "hover:bg-white/10", route.active
                                            ? "bg-white/15 text-white shadow-lg shadow-white/10"
                                            : "text-white/70 hover:text-white"), onClick: () => setIsSidebarOpen(false), children: [_jsx(route.icon, { className: cn("h-5 w-5 transition-transform", route.active && "scale-110") }), _jsx("span", { className: "font-medium", children: route.label }), route.active && (_jsx("div", { className: "ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse" }))] }, route.href)))] }), _jsxs("div", { className: "mt-auto", children: [_jsx("p", { className: "text-xs uppercase text-white/60 font-semibold tracking-wider px-3 mb-2", children: "Account" }), _jsx("div", { className: "bg-white/5 rounded-xl p-4 backdrop-blur-lg", children: _jsxs("div", { className: "flex items-center gap-3 mb-3", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-white/20 flex items-center justify-center", children: _jsx(Users, { className: "w-5 h-5 text-white" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-white", children: "Admin User" }), _jsx("p", { className: "text-xs text-white/60", children: "admin@headup.com" })] })] }) })] })] }), _jsx("div", { className: "p-4 border-t border-white/20", children: _jsxs(Button, { variant: "ghost", className: "w-full justify-start text-white/70 hover:text-red-400 hover:bg-red-400/10 gap-3", onClick: () => setIsSidebarOpen(false), children: [_jsx(LogOut, { className: "h-5 w-5" }), _jsx("span", { className: "font-medium", children: "Sign Out" })] }) })] }), isSidebarOpen && (_jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden", onClick: toggleSidebar })), _jsxs("div", { className: "flex-1 bg-gray-50", children: [_jsxs("header", { className: "md:hidden p-4 bg-gradient-to-br from-[#8200ff] to-[#6900cc] border-b border-gray-200 flex items-center justify-between sticky top-0 z-10", children: [_jsx(Link, { to: "/", className: "flex items-center gap-2", children: _jsx("img", { className: "object-contain", src: logo, alt: "Logo" }) }), _jsx(Button, { variant: "ghost", onClick: toggleSidebar, className: "hover:bg-gray-100", children: _jsx(Menu, { className: "h-6 w-6" }) })] }), _jsx("main", { className: "", children: _jsx(Outlet, {}) })] })] }));
}
