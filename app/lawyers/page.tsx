import { LawyerCard } from "@/components/lawyers/lawyer-card";
import { LawyerSearch } from "@/components/lawyers/lawyer-search";

export default function LawyersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Find a Lawyer</h1>
      <LawyerSearch />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Placeholder for lawyer list */}
      </div>
    </div>
  );
}