import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './CardGenerator.css';

import 'aos/dist/aos.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 1000,
    },
    media: {
      height: 150,
    },
    content: {
        height: 250
    }
  });
  
  
const CardGenerator = ({src,title,header,desc}) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardActionArea>
            <div data-aos="fade-down" data-aos-easing="linear" className="mb_30">
                <CardMedia
                    className={classes.media}
                    image={src}
                    title={title}
                />
            </div>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h4" component="h2">
                        {header}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" component="p">
                        {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>    
    )
}

export default CardGenerator;