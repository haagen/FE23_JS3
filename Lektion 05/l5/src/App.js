
import './App.css';
import React from "react";

/*

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

*/

// Det "manuella" sättet, utan JSX
/*
function App() {
  let attributes = {
    className: "card",
    style: {
      width: "18rem"
    }
  }
  return React.createElement(
          "div", 
          attributes,  
          React.createElement(
            "img",
            {
              src: "logo192.png",
              className: "card-img-top",
              alt: "React Logo"
            }  
          ),
          React.createElement(
            "div",
            { 
              className: "card-body"
            },
            React.createElement(
              "h5",
              {
                className: "card-title"
              },
              "Card title"
            ),
            React.createElement(
              "p",
              {
                className: "card-text"
              },
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            ),
            React.createElement(
              "a",
              {
                href: "#",
                className: "btn btn-primary"
              },
              "Go somewhere"
            )
          )
        );
}
*/

/*
  const props = {
    imgSrc: "logo192.png",
    imgAlt: "React logo",
    cardTitle: "Card title", 
    cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    linkUrl: "#",
    linkTitle: "Go somewhere"
  };
*/

/* Komponent med JSX istället */
function Knapp(props) {

  const attributes = { width: "18rem" };

  return (
    <div className="card" style={ attributes }>
      <img src={ props.imgSrc } className="card-img-top" alt={ props.imgAlt } />
      <div className="card-body">
        <h5 className="card-title">{ props.cardTitle }</h5>
        <p className="card-text">{ props.cardText }</p>
        <a href="{ props.linkUrl }" className="btn btn-primary">{ props.linkTitle }</a>
      </div>
    </div>    
  );

}

/*
  props.namn = namnet på personen
  props.age = åldern på personen
*/
function Person(props) {

  if(props.age > 45) {
    return (
      <>
        { props.namn } är { props.age }år gammal. <br/>
        <>Hen är pensionerad.</>
      </>
    );
  }

  return (
    <>
      { props.namn } är { props.age }år gammal. <br/>
      <>Hen är inte pensionerad.</>
    </>
  );





  // const ageCheck = function(age) {
  //   if(age > 45) {
  //     return <>Hen är pensionerad.</>;
  //   }
  //   return <>Hen är inte pensionerad.</>;
  // }

  // return (
  //   <>
  //     { props.namn } är { props.age }år gammal. <br/>
  //     { ageCheck(props.age) }
  //   </>
  // );


  // return (
  //   <>
  //     { props.namn } är { props.age }år gammal. <br/>
  //     {
  //       props.age > 45 ?
  //         <>Hen är pensionerad.</> :
  //         <>Hen är inte pensionerad.</>
  //     }
  //   </>
  // );


  // return (<>
  //           { props.namn } är { props.age }år gammal. <br/>
  //           { props.age > 45 && <>Hen är pensionerad.</> } 
  //           { props.age <= 45 && <>Hen är inte pensionerad.</> }
  //         </>);
}

function App() {

  return (<>
  
      <div className="container">
            <div className="row">
              <div className="col">
                <Knapp 
                  imgSrc="logo192.png" 
                  imgAlt="En text" 
                  cardTitle="React" 
                  cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit, nulla similique voluptate obcaecati cumque eum, nesciunt laboriosam et nemo laborum deserunt minus fugiat enim?" 
                  linkUrl="#" 
                  linkTitle="Tryck på mig"
                />
              </div>
              <div className="col">
                <Knapp 
                  imgSrc="logo192.png" 
                  imgAlt="En text" 
                  cardTitle="React" 
                  cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit, nulla similique voluptate obcaecati cumque eum, nesciunt laboriosam et nemo laborum deserunt minus fugiat enim?" 
                  linkUrl="#" 
                  linkTitle="Tryck på mig"
                />
              </div>
              <div className="col">        
                <Knapp 
                  imgSrc="logo192.png" 
                  imgAlt="En text" 
                  cardTitle="React" 
                  cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit, nulla similique voluptate obcaecati cumque eum, nesciunt laboriosam et nemo laborum deserunt minus fugiat enim?" 
                  linkUrl="#" 
                  linkTitle="Tryck på mig"
                />
              </div>
            </div>
          </div>

          <Person namn="Martin" age="26"></Person>

          </>
  );
}

export default App;
