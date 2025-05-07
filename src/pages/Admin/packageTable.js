import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter, } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination";
function App() {
    const [packages, setPackages] = useState([
        {
            id: 1,
            name: "Basic Podcast Setup",
            price: 99,
            description: "Essential equipment for beginners",
        },
        {
            id: 2,
            name: "Professional Studio",
            price: 299,
            description: "Complete studio setup with premium gear",
        },
        {
            id: 3,
            name: "Enterprise Package",
            price: 599,
            description: "Multi-room recording facility setup",
        },
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [formData, setFormData] = useState({});
    const itemsPerPage = 5;
    const totalPages = Math.ceil(packages.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPackages = packages.slice(startIndex, endIndex);
    const handleAddPackage = () => {
        if (!formData.name || !formData.price || !formData.description)
            return;
        const newPackage = {
            id: Math.max(0, ...packages.map((p) => p.id)) + 1,
            name: formData.name,
            price: Number(formData.price),
            description: formData.description,
        };
        setPackages([...packages, newPackage]);
        setFormData({});
    };
    const handleEditPackage = () => {
        if (!selectedPackage ||
            !formData.name ||
            !formData.price ||
            !formData.description)
            return;
        setPackages(packages.map((pkg) => pkg.id === selectedPackage.id ? { ...pkg, ...formData } : pkg));
        setIsEditOpen(false);
        setSelectedPackage(null);
        setFormData({});
    };
    const handleDeletePackage = () => {
        if (!selectedPackage)
            return;
        setPackages(packages.filter((pkg) => pkg.id !== selectedPackage.id));
        setIsDeleteOpen(false);
        setSelectedPackage(null);
    };
    const openEditModal = (pkg) => {
        setSelectedPackage(pkg);
        setFormData(pkg);
        setIsEditOpen(true);
    };
    const openDeleteModal = (pkg) => {
        setSelectedPackage(pkg);
        setIsDeleteOpen(true);
    };
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br  from-[#ead4ff] via-white to-[#c4fffc] flex justify-center items-center", children: _jsxs("div", { className: "w-11/12 max-w-[800px] mx-auto", children: [_jsxs("div", { className: "flex flex-col  md:flex-row items-center justify-between mb-8", children: [_jsx("div", { className: "flex items-center gap-3", children: _jsx("h1", { className: "text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text", children: "Package Management" }) }), _jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsxs(Button, { className: "bg-[#8200ff] hover:bg-[#9068b4] mt-5 md:mt-0", children: [_jsx(Plus, { className: "w-4 h-4 mr-2" }), "Add Package"] }) }), _jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [_jsx(DialogHeader, { children: _jsx(DialogTitle, { children: "Add New Package" }) }), _jsxs("div", { className: "grid gap-4 py-4", children: [_jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "name", children: "Package Name" }), _jsx(Input, { id: "name", value: formData.name || "", onChange: (e) => setFormData({ ...formData, name: e.target.value }), placeholder: "Enter package name" })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "price", children: "Price" }), _jsx(Input, { id: "price", type: "number", value: formData.price || "", onChange: (e) => setFormData({
                                                                ...formData,
                                                                price: Number(e.target.value),
                                                            }), placeholder: "Enter price" })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "description", children: "Description" }), _jsx(Textarea, { id: "description", value: formData.description || "", onChange: (e) => setFormData({ ...formData, description: e.target.value }), placeholder: "Enter package description" })] })] }), _jsx(Button, { className: "w-full bg-purple-600 hover:bg-purple-700", onClick: handleAddPackage, children: "Save Package" })] })] })] }), _jsx("div", { className: "bg-white/50 backdrop-blur-sm rounded-lg shadow-xl border border-purple-100", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Package Name" }), _jsx(TableHead, { children: "Price" }), _jsx(TableHead, { className: "hidden md:table-cell", children: "Description" }), _jsx(TableHead, { className: "text-right", children: "Actions" })] }) }), _jsx(TableBody, { children: currentPackages.map((pkg) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: pkg.name }), _jsxs(TableCell, { children: ["$", pkg.price] }), _jsx(TableCell, { className: "hidden md:table-cell", children: pkg.description }), _jsx(TableCell, { className: "text-right", children: _jsxs("div", { className: "flex justify-end gap-2", children: [_jsx(Button, { variant: "outline", size: "icon", onClick: () => openEditModal(pkg), children: _jsx(Pencil, { className: "w-4 h-4 text-purple-600" }) }), _jsx(Button, { variant: "outline", size: "icon", onClick: () => openDeleteModal(pkg), children: _jsx(Trash2, { className: "w-4 h-4 text-red-600" }) })] }) })] }, pkg.id))) })] }) }), _jsx("div", { className: "mt-4 flex justify-center", children: _jsx(Pagination, { children: _jsxs(PaginationContent, { children: [_jsx(PaginationItem, { children: _jsx(PaginationPrevious, { onClick: () => setCurrentPage((p) => Math.max(1, p - 1)), className: currentPage === 1 ? "pointer-events-none opacity-50" : "" }) }), Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (_jsx(PaginationItem, { children: _jsx(PaginationLink, { onClick: () => setCurrentPage(page), isActive: currentPage === page, children: page }) }, page))), _jsx(PaginationItem, { children: _jsx(PaginationNext, { onClick: () => setCurrentPage((p) => Math.min(totalPages, p + 1)), className: currentPage === totalPages
                                            ? "pointer-events-none opacity-50"
                                            : "" }) })] }) }) }), _jsx(Dialog, { open: isEditOpen, onOpenChange: setIsEditOpen, children: _jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [_jsx(DialogHeader, { children: _jsx(DialogTitle, { children: "Edit Package" }) }), _jsxs("div", { className: "grid gap-4 py-4", children: [_jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "edit-name", children: "Package Name" }), _jsx(Input, { id: "edit-name", value: formData.name || "", onChange: (e) => setFormData({ ...formData, name: e.target.value }) })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "edit-price", children: "Price" }), _jsx(Input, { id: "edit-price", type: "number", value: formData.price || "", onChange: (e) => setFormData({ ...formData, price: Number(e.target.value) }) })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "edit-description", children: "Description" }), _jsx(Textarea, { id: "edit-description", value: formData.description || "", onChange: (e) => setFormData({ ...formData, description: e.target.value }) })] })] }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", onClick: () => setIsEditOpen(false), children: "Cancel" }), _jsx(Button, { className: "bg-purple-600 hover:bg-purple-700", onClick: handleEditPackage, children: "Save Changes" })] })] }) }), _jsx(Dialog, { open: isDeleteOpen, onOpenChange: setIsDeleteOpen, children: _jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Delete Package" }), _jsxs(DialogDescription, { children: ["Are you sure you want to delete \"", selectedPackage?.name, "\"? This action cannot be undone."] })] }), _jsxs(DialogFooter, { className: "mt-4", children: [_jsx(Button, { variant: "outline", onClick: () => setIsDeleteOpen(false), children: "Cancel" }), _jsx(Button, { variant: "destructive", onClick: handleDeletePackage, children: "Delete Package" })] })] }) })] }) }));
}
export default App;
