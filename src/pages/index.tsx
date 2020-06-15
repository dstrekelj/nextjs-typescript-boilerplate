import React, { FC } from "react";
import css from "./index.style";

const Index: FC = () => (
    <>
        <div>Hello world!</div>
        <style global jsx>
            {css}
        </style>
    </>
);

export default Index;
