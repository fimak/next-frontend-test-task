import Dropdown from '@/components/Dropdown';

export default function Page() {
  const options = ['ACCOUNTS', 'WALLET', 'BONUSES', 'BETS', 'HISTORY'];

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-[#1E1E1E]">
      <div>
        <h1 className="text-cyan-50">Task2</h1>
        <div>
          <Dropdown options={options} width={240} />
        </div>
      </div>
    </div>
  );
}
