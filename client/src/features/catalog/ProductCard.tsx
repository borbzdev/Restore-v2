import Card from "@mui/material/Card";
import type  { Product }  from "../../app/models/product";
import { Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
    product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card elevation={3} sx={{ width: 200, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <CardMedia 
            sx={{ height: 240, backgroundSize: 'cover' }}
            image={product.pictureUrl}
            title={product.name}
        />
        <CardContent>
            <Typography gutterBottom 
                        variant="subtitle2"
                        sx={{textTransform: 'uppercase'}}
                >
                {product.name}
            </Typography>
            <Typography variant="h6" 
                sx={{color:'primary.main'}}
            >
                ${ (product.price / 100).toFixed(2) }
            </Typography>
        </CardContent>
        <CardActions
            sx={{justifyContent: 'space-between'}}
        >
            <Button size="small" color="primary">Add to cart</Button>
            <Button size="small" color="primary">View</Button>
        </CardActions>
    </Card>
  )
}