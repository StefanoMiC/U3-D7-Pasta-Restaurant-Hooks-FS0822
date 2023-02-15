import { useState } from "react";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Container, Row, Col, Carousel, ListGroup, Badge } from "react-bootstrap";
import menu from "../data/menu.json";

// Per far rispecchiare la lista di commenti/recensioni con il piatto selezionato
// abbiamo bisogno di fare uso di una memoria interna (lo STATE) che sarà propria del componente stesso
// visibile solo all'interno di esso, NON esternamente!
const Home = () => {
  const [selectedPasta, setSelectedPasta] = useState(null);
  // l'unico modo, al momento, che possa resettare lo stato a "null" è il refresh della pagina
  // selectedPasta cambierà nel momento in cui l'utente cliccherà su una slide (vedi Carousel.Item)

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center">
          <h1>Benvenuti nel nostro Ristorante</h1>
          <p>Abbiamo primi piatti, primi piatti o primi piatti...</p>

          <Carousel>
            {menu.map(pasta => (
              <Carousel.Item
                key={pasta.id}
                onClick={e => {
                  console.log("clicked", pasta.name, e);
                  setSelectedPasta(pasta);
                }}
              >
                <img className="d-block w-100" src={pasta.image} alt={pasta.name} />
                <Carousel.Caption>
                  <h3>{pasta.name}</h3>
                  <p>{pasta.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* short circuit operator, se il valore a sinistra del && è falsy quello che c'è a destra non verrà eseguito*/}
      <Row className="justify-content-center my-5">
        <Col xs={12} md={6}>
          {/* <h4>Recensioni per {selectedPasta.name}</h4> */}
          <ListGroup>
            {/* lo short circuit farà sì che comments non venga letto prima che selectedPasta esista e sia un oggetto */}
            {selectedPasta ? (
              selectedPasta.comments.map(elem => (
                <ListGroup.Item key={`comment-${elem.id}`}>
                  <Badge bg="dark" className="me-2">
                    {elem.author}
                  </Badge>
                  {elem.comment}
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item> Nessun elemento da visualizzare, clicca su un elemento del carosello</ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
