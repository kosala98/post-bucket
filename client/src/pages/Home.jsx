import { Container, Text, Button, Group, Divider } from "@mantine/core";
import { GithubIcon } from "@mantinex/dev-icons";
import classes from "../styles/pages/HeroTitle.module.css";
import { Header } from "../components/header";
import { Link } from "react-router-dom";
import GradientButton from "../components/GradientButton";
import HomeImage from "../assets/Home.PNG";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Divider></Divider>

      <div className={classes.wrapper}>
        <Container size={700} className={classes.inner}>
          <h1 className={classes.title}>
            The{" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              inherit
            >
              Post
            </Text>{" "}
            Bucket
          </h1>

          <Text className={classes.description} color="dimmed">
            Users can create posts and manage their content effortlessly.
          </Text>

          <img src={HomeImage} alt="" style={{ height: "500px" }} />

          <Group className={classes.controls}>
            <Link to={"/login"}>
              <GradientButton>Login Here!</GradientButton>
            </Link>

            <Button
              component="a"
              href="https://github.com/kosala98/post-bucket"
              size="xl"
              variant="default"
              className={classes.control}
              leftSection={<GithubIcon size={20} />}
            >
              GitHub
            </Button>
          </Group>
        </Container>
      </div>
    </div>
  );
}
