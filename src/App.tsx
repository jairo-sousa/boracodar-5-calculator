import { Flex } from "@chakra-ui/react";

import { Screen } from "./components/Screen";
import { Keys } from "./components/Keys";

function App() {
	return (
		<Flex
			className="App"
			w="35.6rem"
			h="56.6rem"
			direction="column"
			align="center"
			backgroundColor="#2D2A37"
			borderRadius="4.8rem"
			p="5.4rem 3.4rem 3.2rem"
			gap="2.6rem"
		>
			<Screen />
			<Keys />
		</Flex>
	);
}

export default App;
