import React from "react";  

class Headlines extends React.Component {

  makeApiCall = () => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse)
          this.setState({
            isLoaded: true,
            headlines: jsonifiedResponse
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded:true,
            error
          });    
  });
}

  componentDidMount() {
    this.makeApiCall()
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      headlines: []
    };
  }

  render() {
    const { error, isLoaded, headlines } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>
    } else {
      return (
        (<React.Fragment>
          <h1>Headlines</h1>
          <ul>
            {headlines.results.map((headline, index) =>
            <li key={index}>
              <h3>{headline.title}</h3>
              <p>{headline.abstract}</p>
            </li>)}
          </ul>
        </React.Fragment>)
      );
    }
  }
}

export default Headlines;