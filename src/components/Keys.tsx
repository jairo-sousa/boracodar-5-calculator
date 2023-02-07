import { Flex } from "@chakra-ui/react";
import { keys } from "../utils/keys";
import { Key } from "./key";

export function Keys() {
	return (
		<Flex
			as="section"
			justify="center"
			align="center"
			wrap="wrap"
			w="100%"
			h="36.8rem"
			justifyContent="space-between"
			flex="auto"
		>
			{keys.map((key, i) => {
				return (
					<Key
						key={`${key} - ${i}`}
						value={key.value}
						customStyle={key.customStyle}
					/>
				);
			})}
		</Flex>
	);
}
