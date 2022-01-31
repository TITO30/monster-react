import './App.css';
import { CardList } from './components/card-list/card-list.jsx'
import { Component } from 'react';
import {SearchBox} from './components/search-box/search-box.jsx';


class App extends Component{
  constructor(){
    super();

    this.state= {
      luchadores:[],
      searchField: ''
      
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(users => this.setState({luchadores:users.results}));
  }

    handleChange = (e)=>{
      this.setState({searchField: e.target.value})
    }

  render(){
    let morty="Rick"
    const Prueba = 'bb'
    const{ luchadores,searchField} = this.state;

    const filteredLuchadores = luchadores.filter(luchadores => 
      luchadores.name.toLowerCase().includes(searchField.toLowerCase()))
      console.log(luchadores)

    return(
      <div className="App">
      <h1>Luchadores Rolodex</h1>
      <SearchBox 
      placeholder='search luchadores'
      handleChange={this.handleChange }/>
      <CardList luchadores={filteredLuchadores}></CardList>;
      </div>
    );
  }
}


export default App;
