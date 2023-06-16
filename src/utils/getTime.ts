const getTime = () => {
  const date: Date = new Date();
  const hr: number = date.getHours();
  const hours: string =
    hr % 12
      ? (hr % 12).toLocaleString("en-US", { minimumIntegerDigits: 2 })
      : hr === 12
      ? "12"
      : "00";
  const minutes: string = date.getMinutes().toLocaleString("en-US", { minimumIntegerDigits: 2 });
  const seconds: string = date.getSeconds().toLocaleString("en-US", { minimumIntegerDigits: 2 });
  const isPm: boolean = hr >= 12;
  return { hh: hours, mm: minutes, ss: seconds, isPm };
};

export default getTime;
