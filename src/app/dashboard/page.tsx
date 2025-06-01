import { DonationTable } from "./_components/donates";
import { Stats } from "./_components/analytics";



export default async function Dashboard() {

  return (
    <div className="p-4">
      <section className="flex items-center justify-between mb-4">
        <div className="w-full flex items-center gap-2 justify-between">
          <h1 className="text-2xl font-semibold">Minha conta</h1>
        </div>
      </section>

      <Stats />


      <h2 className="text-2xl font-semibold mb-2">Últimas doações</h2>
      <DonationTable />
    </div>
  );
}