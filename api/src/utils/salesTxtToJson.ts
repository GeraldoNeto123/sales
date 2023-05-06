import fs from "fs";

interface transaction {
  type: number;
  date: string;
  product: string;
  amount: string;
  seller: string;
}

export default function salesTxtToJson(filePath: string): transaction[] {
  const fields = [
    { name: "type", start: 1, end: 1 },
    { name: "date", start: 2, end: 26 },
    { name: "product", start: 27, end: 56 },
    { name: "amount", start: 57, end: 66 },
    { name: "seller", start: 67, end: 86 },
  ];

  function readFile() {
    return fs.readFileSync(filePath, "utf-8");
  }

  const content = readFile();

  const lines = content.split("\n");

  const registers = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const register = {};
    if (line) {
      for (let field of fields) {
        const { name, start, end } = field;
        const value = line.substring(start - 1, end).trim();
        register[name] = value;
      }

      registers.push(register);
    }
  }

  const json = JSON.stringify(registers);

  return JSON.parse(json);
}
