import React, { Component } from "react";
import NewsItem from "./Newsitem";
import { Button, ButtonGroup, Spinner } from "@chakra-ui/react";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static defaultTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews(pageNo) {
    const pageSize = 6;

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e455a28c9f0747a2a282bd60c6015fc4&pageSize=${pageSize}&page=${pageNo}`;

    this.setState({ loading: true });
    try {
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    this.updateNews(1);
  }

  handlePrevious = () => {
    if (this.state.page > 1) {
      this.updateNews(this.state.page - 1);
      this.setState({
        page: this.state.page + 1,
      });
    }
  };

  handleNext = () => {
    if (this.state.page > Math.ceil(this.state.totalResults / 6)) {
      this.updateNews(this.state.page + 1);
      this.setState({
        page: this.state.page - 1,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center" style={{ margin: "40px 0px" }}>
            News Monkey Top-headlines
          </h1>
          <div className="text-center">
            {this.state.loading && <Spinner size="xl" />}
          </div>
          <div className="row">
            {this.state.articles &&
              this.state.articles.length > 0 &&
              this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-3">
          <ButtonGroup>
            <Button
              disabled={this.state.page <= 1}
              colorScheme="teal"
              variant="outline"
              onClick={this.handlePrevious}>
              Previous
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={this.handleNext}>
              Next
            </Button>
          </ButtonGroup>
        </div>
      </>
    );
  }
}

export default News;
