import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import CustomButton from "@/components/CustomButton";
import PrisingCard from "@/components/ui/PrisingCard";
import SectionHeader from "@/lib/SectionTitle";

interface Package {
  _id: string;
  name: string;
  price: number;
  features: string[];
  duration: number;
  createdAt: string;
  updatedAt: string;
}

const Pricing = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/packages`
        );
        if (response.data.success && Array.isArray(response.data.data)) {
          setPackages(response.data.data);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err: any) {
        console.error("Error fetching packages:", err);
        const errorMessage =
          err.response?.data?.message || "Failed to load packages";
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="flex justify-center" id="pricing">
      <div className="w-full">
        <div className="w-11/12 md:max-w-[1300px] mx-auto">
          <div className="w-full">
            <SectionHeader
              title="PRICING"
              text1="Our Pricing and"
              text2="Packages"
              style1=""
              style2=""
              style3=""
              lineBreak={false}
            />
          </div>
          {loading ? (
            <div className="text-center mt-[40px]">Loading packages...</div>
          ) : error ? (
            <div className="text-center mt-[40px] text-red-500">{error}</div>
          ) : packages.length === 0 ? (
            <div className="text-center mt-[40px]">No packages available</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[40px] gap-[24px] mx-2">
              {packages.map((pkg) => (
                <PrisingCard
                  key={pkg._id}
                  name={pkg.name}
                  price={pkg.price}
                  features={pkg.features}
                  duration={pkg.duration}
                />
              ))}
            </div>
          )}
        </div>
        <div className="w-full flex justify-center mt-[24px] mx-2">
          <CustomButton onClick={"any"} buttonName="Explore More" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
