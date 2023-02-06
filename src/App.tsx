import { Box, Flex } from "@chakra-ui/react";

import { Screen } from "./components/Screen";

function App() {
	return (
		<Flex
			className="App"
			w="35.6rem"
			h="56.6rem"
			direction="column"
			align="center"
			justify="center"
			backgroundColor="#2D2A37"
			borderRadius="4.8rem"
		>
			<Screen />
			<Box as="section">keys</Box>
		</Flex>
	);
}

export default App;
