import React from "react";

type PortfolioItemProps = {
    children: JSX.Element | JSX.Element[],
    title: string,
    githubName: string,
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ children, title }): JSX.Element => {
    return (
        <article>
            <h2>{ title }</h2>
            {children}
        </article>
    );
};

export { PortfolioItem };
