import React from "react";

import { Flex, Box, Link } from "@chakra-ui/core";

export default function Credits() {
    return (
        <Flex
            position="fixed"
            bottom="0"
            w={["100%", "100%", "auto"]}
            bg="scienceBlack"
            flexDir={["row", "row", "column"]}
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            p={2}
            zIndex="footer"
        >
            <Link
                href="https://github.com/RileyAbr/In-house-inator"
                fontWeight="bold"
                isExternal
            >
                GitHub Repo
            </Link>
            <Box display={["block", "block", "none"]} px={1}>
                |
            </Box>
            <Box>
                Created by&nbsp;
                <Link
                    href="https://www.rileyabrahamson.com/"
                    fontWeight="bold"
                    isExternal
                >
                    Riley Abrahamson
                </Link>
            </Box>
        </Flex>
    );
}
