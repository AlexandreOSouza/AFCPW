type Props = {
  id: string;
  name: string;
  code: string;
};

export class Country {
  private id: string;
  private name: string;
  private code: string;

  get getId(): string {
    return this.id;
  }

  get getName(): string {
    return this.name;
  }

  get getCode(): string {
    return this.code;
  }

  constructor({ id, name, code }: Props) {
    this.id = id;
    this.name = name;
    this.code = code;
  }
}
