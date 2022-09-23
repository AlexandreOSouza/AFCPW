interface PlaceProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  ctaLink: string;
  rating: number;
  country: string;
}

export class Place {
  private id?: string;
  private title: string;
  private description: string;
  private image: string;
  private ctaLink: string;
  private rating: number;
  private country: string;

  set setId(id: string) {
    this.id = id;
  }
  get getId(): string | undefined {
    return this.id;
  }
  get getTitle(): string {
    return this.title;
  }

  get getDescription(): string {
    return this.description;
  }

  get getImage(): string {
    return this.image;
  }

  get getCtaLink(): string {
    return this.ctaLink;
  }

  get getRating(): number {
    return this.rating;
  }
  get getCountry(): string {
    return this.country;
  }

  get getProps(): PlaceProps {
    return {
      id: "",
      title: this.title,
      description: this.description,
      image: this.image,
      country: this.country,
      ctaLink: this.ctaLink,
      rating: this.rating,
    };
  }

  constructor(props: PlaceProps) {
    const { title, description, image, ctaLink, rating, country } = props;
    this.title = title;
    this.description = description;
    this.image = image;
    this.ctaLink = ctaLink;
    this.rating = rating;
    this.country = country;
  }
}
