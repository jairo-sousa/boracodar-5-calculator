import { Flex, Img, Text } from "@chakra-ui/react";

export function Screen() {
	return (
		<Flex as="section" direction="column" w="100%" px="2rem" gap="0.8rem">
			<Text color="#6B6B6B" fontSize="2rem" w="100%" align="end">
				1 + 1
			</Text>
			<Flex justify="space-between">
				<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-5-calculator/main/.github/equals.svg" />
				<Text fontSize="3.6rem">2</Text>
			</Flex>
		</Flex>
	);
}
