import { Box, Button, TextInput, Text, Center } from "@mantine/core";
import { Link } from "react-router-dom";

export default function UserLogin() {
  return (
    <div style={{ width: "100vw" }}>
      <Center>
        <Box
          p={16}
          display={"flex"}
          w={{ base: 320, sm: 480, lg: 640 }}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text component="h1" size="xl" fw={700}>
            Login
          </Text>
          <TextInput label="User Name" style={{ width: "100%" }}></TextInput>
          <TextInput label="Password" style={{ width: "100%" }}></TextInput>
          <Button
            variant="filled"
            color="teal"
            mt={8}
            style={{ width: "100%" }}
            mb={8}
          >
            Login
          </Button>
          <Link to={"/register"}>Create new Account</Link>
        </Box>
      </Center>
    </div>
  );
}
