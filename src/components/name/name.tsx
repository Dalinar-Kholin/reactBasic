interface IName {
  name: string;
}

export default function Name({ name }: IName) {
  return <h1>{name}</h1>;
}
