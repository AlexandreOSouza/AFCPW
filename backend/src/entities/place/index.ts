export interface PlaceProps {
  title: string;
  description: string;
  image: string;
  ctaLink: string;
  rating: number;
  country: string;
}

export class Place {
  private props: PlaceProps;

  get title(): string {
    return this.props.title;
  }

  get description(): string {
    return this.props.description;
  }

  get image(): string {
    return this.props.image;
  }

  get ctaLink(): string {
    return this.props.ctaLink;
  }

  get rating(): number {
    return this.props.rating;
  }
  get country(): string {
    return this.props.country;
  }

  constructor(props: PlaceProps) {
    this.props = props;
  }
}
