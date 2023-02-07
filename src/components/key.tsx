import { Flex, Image, Text } from "@chakra-ui/react";

type keyProps = {
	value?: String;
	customStyle?: {
		bg?: String;
		img?: String;
		color?: String;
	};
};

export function Key(props: keyProps) {
	return (
		<Flex
			w="6.4rem"
			h="6.4rem"
			borderRadius="50%"
			bg="linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #2D2A37"
			justify="center"
			align="center"
			boxShadow="0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);"
			backgroundColor={`${props.customStyle?.bg}`}
		>
			{props.value ? (
				<Text fontSize="2.4rem" color={`${props.customStyle?.color}`}>
					{props.value}
				</Text>
			) : (
				<Image src={`${props.customStyle?.img}`} />
			)}
		</Flex>
	);
}
