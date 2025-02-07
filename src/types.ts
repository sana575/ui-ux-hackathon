export interface IProduct {
      _id: string;
      title: string;
      description: string;
      imageUrl: string;
      price: number;
      discountPercentage ?: number;
      tags: string[];
      isNew?: boolean;
    }