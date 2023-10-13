import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export class Newsitem extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl, author, publishedAt } =
      this.props;
    return (
      <>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={
                !imageUrl
                  ? "https://c.ndtvimg.com/2023-10/bt5dbdgo_pm-modi-rajasthan_625x300_05_October_23.jpg"
                  : imageUrl
              }
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              height={400}
            />
            <Stack mt="4" spacing="1">
              <Heading size="md">{title}</Heading>
              <Text>{discription}</Text>
              <Text color="blue.600" fontSize="1xl">
                by:{author} on {publishedAt}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link to={newsUrl} className="btn btn-primary">
              Read more
            </Link>
          </CardFooter>
        </Card>
      </>
    );
  }
}

export default Newsitem;
