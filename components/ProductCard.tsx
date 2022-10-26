import { Card, Text } from '@geist-ui/core';
import Image from 'next/image';
const Ranking = '★★★★☆☆☆☆☆☆☆'
const getRanking = (ranking: number) => '★'.repeat(ranking).padEnd(5, '☆');

interface ProductsProps {
    name: string
    price: number
    rating: number
    image: string
}
const ProductCard: React.FC<ProductsProps> = ({name,price,rating,image}) => {
    return (
        <Card width="250px" hoverable >
            <p>{name}</p>
            <Image
                width={250}
                height={100}
                objectFit="cover"
                src={image}
                alt="image"
            />
            <Card.Footer>
                <Text h5>$ {price}</Text>
                {getRanking(rating)}
            </Card.Footer>
        </Card>
    );
};

export default ProductCard;
