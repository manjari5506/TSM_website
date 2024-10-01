import {
  Hero,
  Philosophy,
  Teams,
  Vision,
  JoinTeam,
} from "@/components/Leaders/index";

const LeadersPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9]   text-[#6c757d]">
      <main>
        <Hero />

        <Philosophy />

        <Teams />

        <Vision />
        <JoinTeam />
      </main>
    </div>
  );
};

export default LeadersPage;
