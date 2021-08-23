import React from "react";
import { ReactElement } from "react";

export const LinkForAPI = ({ value, path }: { value: string, path: string }): ReactElement<any, any> => {
    return <a href={'/api' + path}>{value}</a>;
}