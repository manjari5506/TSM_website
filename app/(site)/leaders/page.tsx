import { Hero, Philosophy, Teams, JoinTeam } from "@/components/Leaders/index";

const LeadersPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9]   text-[#6c757d]">
      <main>
        <Hero />

        <Philosophy />

        <Teams />

        <JoinTeam />
      </main>
    </div>
  );
};

export default LeadersPage;
