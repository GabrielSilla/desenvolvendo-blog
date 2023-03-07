;import "./home.css";
import { Divider, Typography, Card, CardContent, CardActionArea, CardMedia } from "@mui/material";

export default function Home() {
    const windowWidth = window.innerWidth;
    const posts = [
        {
            title: "Minimal API Tutorial com .Net 7",
            description: "Aprenda a construir do zero, uma API em .Net 7 usando conceito mínimo e aplicando conhecimentos REST",
            image: '/src/assets/posts-tests/net.png'
        },
        {
            title: "TDD na Prática",
            description: "Já usou o TDD? Não? Venha entender como ele funciona na prática, aplicando ao desenvolvimento.",
            image: '/src/assets/posts-tests/TDD.png'
        },
        {
            title: "A arte do debbuging",
            description: "Melhores práticas para encontrar os erros com mais facilidade. Chega de sofrer!",
            image: '/src/assets/posts-tests/debug.png'
        },
        {
            title: "Comunicando o Python com DB",
            description: "Aprenda e entenda como funciona o Driver do SQL dentro do Python. Bora botar a mão na massa",
            image: '/src/assets/posts-tests/sql.png'
        },
        {
            title: "Vamos aprender um café?",
            description: "Eai, bateu o sono? Vamos ensinar uma receitinha pra você continuar codando com energia de sobra!",
            image: '/src/assets/posts-tests/mocha.jpg'
        },
        {
            title: "Meu primeiro APP em React",
            description: "Vamos aprender um pouco de front-end agora. Vamos criar do zero um app usando o react",
            image: '/src/assets/posts-tests/react.png'
        },
        {
            title: "Minimal API Tutorial com .Net 7",
            description: "Aprenda a construir do zero, uma API em .Net 7 usando conceito mínimo e aplicando conhecimentos REST",
            image: '/src/assets/posts-tests/net.png'
        },
        {
            title: "TDD na Prática",
            description: "Já usou o TDD? Não? Venha entender como ele funciona na prática, aplicando ao desenvolvimento.",
            image: '/src/assets/posts-tests/TDD.png'
        },
        {
            title: "A arte do debbuging",
            description: "Melhores práticas para encontrar os erros com mais facilidade. Chega de sofrer!",
            image: '/src/assets/posts-tests/debug.png'
        }
    ];

    return (
        <div className="content">
            <div className="logo">
                <img src={"src/assets/img/logo.png"} />
            </div>
            <Divider />
            <div className="posts-box">
                <Typography style={{fontWeight: 100, marginBottom: '10px'}} variant="h5">
                    Últimas Postagens
                </Typography>
                <div className="container">
                    <div className="posts">
                        {posts.map((object, i) => 
                            <div key={i}>
                                <Card className="cards" sx={{ maxWidth: 400 }}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height="250"
                                        image={object.image}/>
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {object.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {object.description}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Divider />
            <div className="footer">
                <img src={"src/assets/img/simple-logo.png"} />
                <div className="footer-text">
                    <Typography style={{fontWeight: 700}} variant="body1" color="text.primary">
                        2023, Desenvolvido por Gabriel Silla & Karina Silla.
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Apoiando novas carreiras.
                    </Typography>
                </div>
            </div>
            <div className="footer-end">
                <div className="footer-end-y"></div>
                <div className="footer-end-o"></div>
                <div className="footer-end-r"></div>
            </div>
        </div>
    );
  }