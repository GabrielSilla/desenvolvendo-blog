;import "./home.css";
import { Divider, Typography, Card, CardContent, CardActionArea, CardMedia, Button, SwipeableDrawer, Chip } from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import { useState, Fragment } from "react";
import React from "react";
import { chipTypes } from "../../models/chip-type";


export default function Home() {
    const [viewDrawer, setViewDrawer] = useState(false);

    const windowWidth = window.innerWidth;
    const posts = [
        {
            title: "Minimal API Tutorial com .Net 7",
            description: "Aprenda a construir do zero, uma API em .Net 7 usando conceito mínimo e aplicando conhecimentos REST",
            image: '/src/assets/posts-tests/net.png',
            type: chipTypes.back
        },
        {
            title: "TDD na Prática",
            description: "Já usou o TDD? Não? Venha entender como ele funciona na prática, aplicando ao desenvolvimento.",
            image: '/src/assets/posts-tests/TDD.png',
            type: chipTypes.back
        },
        {
            title: "A arte do debbuging",
            description: "Melhores práticas para encontrar os erros com mais facilidade. Chega de sofrer!",
            image: '/src/assets/posts-tests/debug.png',
            type: chipTypes.others
        },
        {
            title: "Comunicando o Python com DB",
            description: "Aprenda e entenda como funciona o Driver do SQL dentro do Python. Bora botar a mão na massa",
            image: '/src/assets/posts-tests/sql.png',
            type: chipTypes.back
        },
        {
            title: "Vamos aprender um café?",
            description: "Eai, bateu o sono? Vamos ensinar uma receitinha pra você continuar codando com energia de sobra!",
            image: '/src/assets/posts-tests/mocha.jpg',
            type: chipTypes.others
        },
        {
            title: "Meu primeiro APP em React",
            description: "Vamos aprender um pouco de front-end agora. Vamos criar do zero um app usando o react",
            image: '/src/assets/posts-tests/react.png',
            type: chipTypes.front
        }
    ];

    return (
        <div className="content">
            <div className="logo">
                <img src={"src/assets/img/logo.png"} />
            </div>
            <Divider />
            <div className="posts-box">
                <div className="posts-header">
                    <Typography style={{fontWeight: 100, marginBottom: '10px'}} variant="h5">
                        Postagens Recentes
                    </Typography>
                    <Button variant="outlined" endIcon={<FilterAlt />} onClick={() => {setViewDrawer(true)}}>
                        Filtrar
                    </Button>
                </div>
                <div className="container">
                    <div className="posts">
                        {posts.map((object, i) => 
                            <div key={i}>
                                <Card className="cards" sx={{ maxWidth: 400 }}>
                                    <CardActionArea>
                                        <Chip className={`custom-chip ${object.type.type}`} label={object.type.label} color="primary" variant="outlined" />
                                        <CardMedia
                                        component="img"
                                        height="250"
                                        image={object.image}/>
                                        <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
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
            <div>
                <SwipeableDrawer
                    anchor="right"
                    open={viewDrawer}
                    onClose={() => {setViewDrawer(false)}}
                    onOpen={() => {setViewDrawer(true)}}
                >
                </SwipeableDrawer>
            </div>
        </div>
    );
  }