export default function ClockNumbers() {
  // const number = [];
  // for (let i = 1; i <= 12; i++) {
  //   number.push(i);
  // }
  const number: Array<number> = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <>
      {number.map(el => (
        <label
          key={el}
          className="absolute text-center"
          style={{
            transform: `rotate(calc(${el}*30deg))`,
            inset: "12px"
          }}
        >
          <span
            className="inline-block text-xl"
            style={{ transform: `rotate(calc(${el}*-30deg))` }}
          >
            {el}
          </span>
        </label>
      ))}
    </>
  );
}
