
const db = [
    {
        dex: 1,
        name: 'Bulbasaur',
        hp: 45
    },
    {
        dex:4,
        name: 'Charmander',
        hp: 39
    },
    {
        dex: 25,
        name: 'Pikachu',
        hp: 35
    }
];


const Pokemon = function(props) {
    return (
        <li>
            <div>
                <strong>{props.name}</strong><br />
                HP: { props.hp }
            </div>
        </li>
    );
} 


export default function Pokemons(props) {

    const renderPokemons = () => {
        const arryOfPokemons = [];
        for(let i=0; i<db.length; i++){
            if(db[i].hp > 35){
                arryOfPokemons.push(
                    <Pokemon name={ db[i].name } hp={ db[i].hp } key={ db[i].dex }/>
                );
            }
        }
        return arryOfPokemons;
    }

    const renderPokemons2 = () => {

        return db
                .filter((e) => {
                   return e.hp > 35;
                })
                .map((e) => { 
            return <Pokemon name={e.name} hp={e.hp} key={ e.dex } />
         });

    }    

    // return (
    //     <div className="pokemons">
    //         <h2>Mina Pokemons</h2>
    //         <ul>
    //             { renderPokemons2() }
    //         </ul>
    //     </div>
    // );

    return (
        <div className="pokemons">
            <h2>Mina Pokemons</h2>
            <ul>
                {  db.map(e => <Pokemon name={e.name} hp={e.hp} key={ e.dex } />)  }
            </ul>
        </div>
    );

}
