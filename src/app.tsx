import * as React from "react";
import styles from './hello.module.scss';

export interface HelloProps { compiler: string; framework: string }

export const Hello: React.FC<HelloProps> = (props: HelloProps) => {
    return <h1 className={styles.primary}>Hello from {props.compiler} and {props.framework}!</h1>;
};