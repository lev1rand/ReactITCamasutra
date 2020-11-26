import React from 'react';
import styles from "./FormControl.module.css"

const Element = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <Element {...input} {...props} />
            {hasError &&
            <div>
                <span> {meta.error} </span>
            </div>
            }
        </div>
    );
};


export const TextArea = Element("textarea");
export const Input = Element("input");

