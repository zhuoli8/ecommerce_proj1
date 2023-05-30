import Box from "@mui/material/Box";
import React from "react";
import ProductCard from "./components/ProductCard";

const ProdPage = () => {
    return (
        <>
            <Box display="inlineBlock">
                <h1>product page</h1>
                <Box
                    display="flexBox"
                    justifyContent="center"
                    alignItems="center"
                >
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Box>
            </Box>
        </>
    );
};

export default ProdPage;
