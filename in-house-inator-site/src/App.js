import React from "react";
import { Route, Switch } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/core";

import Content from "./components/Content";
import Sidebar from "./components/Sidebar/";

import routes from "./routes";

function App() {
    return (
        <Flex
            height="100vh"
            flexDir={["column", "column", "row"]}
            bg="evilBlack"
            color="evilWhite"
        >
            <Box as="aside" flex="0 0 16rem">
                <Sidebar routes={routes} />
            </Box>

            <Box as="main" flex="1">
                <Switch>
                    {routes.map((route) => {
                        return <Route {...route} />;
                    })}
                </Switch>
            </Box>
        </Flex>
    );
}

export default App;
