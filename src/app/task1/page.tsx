const moveZeros = (option: any[]): any[] => {
  const basedArr = option.filter((el: any) => el !== 0);
  const length = option.length - basedArr.length;
  return [...basedArr, Array(length).fill(0)];
}

export default function Page() {
  const option = [false,1, 0, 1, 2, 0, 1, 3, 'a'];
  const result = moveZeros(option);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div>
        <h1>Task1</h1>
        <div>
          <p>Array: {option.toString()}</p>
          <p>Result: {result.toString()}</p>
        </div>
      </div>
    </div>
  );
}
