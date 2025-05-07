import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Package {
  id: number;
  name: string;
  price: number;
  description: string;
}

function App() {
  const [packages, setPackages] = useState<Package[]>([
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
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [formData, setFormData] = useState<Partial<Package>>({});

  const itemsPerPage = 5;
  const totalPages = Math.ceil(packages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPackages = packages.slice(startIndex, endIndex);

  const handleAddPackage = () => {
    if (!formData.name || !formData.price || !formData.description) return;

    const newPackage: Package = {
      id: Math.max(0, ...packages.map((p) => p.id)) + 1,
      name: formData.name,
      price: Number(formData.price),
      description: formData.description,
    };

    setPackages([...packages, newPackage]);
    setFormData({});
  };

  const handleEditPackage = () => {
    if (
      !selectedPackage ||
      !formData.name ||
      !formData.price ||
      !formData.description
    )
      return;

    setPackages(
      packages.map((pkg) =>
        pkg.id === selectedPackage.id ? { ...pkg, ...formData } : pkg
      )
    );

    setIsEditOpen(false);
    setSelectedPackage(null);
    setFormData({});
  };

  const handleDeletePackage = () => {
    if (!selectedPackage) return;

    setPackages(packages.filter((pkg) => pkg.id !== selectedPackage.id));
    setIsDeleteOpen(false);
    setSelectedPackage(null);
  };

  const openEditModal = (pkg: Package) => {
    setSelectedPackage(pkg);
    setFormData(pkg);
    setIsEditOpen(true);
  };

  const openDeleteModal = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsDeleteOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  from-[#ead4ff] via-white to-[#c4fffc] flex justify-center items-center">
      <div className="w-11/12 max-w-[800px] mx-auto">
        <div className="flex flex-col  md:flex-row items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Package Management
            </h1>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#8200ff] hover:bg-[#9068b4] mt-5 md:mt-0">
                <Plus className="w-4 h-4 mr-2" />
                Add Package
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Package</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Package Name</Label>
                  <Input
                    id="name"
                    value={formData.name || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter package name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        price: Number(e.target.value),
                      })
                    }
                    placeholder="Enter price"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Enter package description"
                  />
                </div>
              </div>
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={handleAddPackage}
              >
                Save Package
              </Button>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-xl border border-purple-100">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Package Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="hidden md:table-cell">
                  Description
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPackages.map((pkg) => (
                <TableRow key={pkg.id}>
                  <TableCell className="font-medium">{pkg.name}</TableCell>
                  <TableCell>${pkg.price}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {pkg.description}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => openEditModal(pkg)}
                      >
                        <Pencil className="w-4 h-4 text-purple-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => openDeleteModal(pkg)}
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* Edit Modal */}
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Package</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-name">Package Name</Label>
                <Input
                  id="edit-name"
                  value={formData.name || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-price">Price</Label>
                <Input
                  id="edit-price"
                  type="number"
                  value={formData.price || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, price: Number(e.target.value) })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  value={formData.description || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditOpen(false)}>
                Cancel
              </Button>
              <Button
                className="bg-purple-600 hover:bg-purple-700"
                onClick={handleEditPackage}
              >
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Modal */}
        <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete Package</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete "{selectedPackage?.name}"? This
                action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-4">
              <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeletePackage}>
                Delete Package
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
