export interface CardItem {
  title: string;
  href: string;
  subtitle?: string;
  imgSrc?: string;
}

export interface ParkData {
  parkId: string;
  name: string;
  hikes?: CardItem[];
  viewpoints?: CardItem[];
  lodging?: CardItem[];
  activities?: CardItem[];
  updatedAt?: Date;
}
