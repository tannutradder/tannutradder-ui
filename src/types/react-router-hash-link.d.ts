// src/react-router-hash-link.d.ts
declare module 'react-router-hash-link' {
    import { LinkProps } from 'react-router-dom';
    import { RefAttributes } from 'react';

    export function HashLink(props: LinkProps & RefAttributes<HTMLAnchorElement>): JSX.Element;
    export function NavHashLink(props: LinkProps & RefAttributes<HTMLAnchorElement>): JSX.Element;
}
