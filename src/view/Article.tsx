import * as React from 'react'
import * as octocat from '../assets/github.svg'
interface ArticleProps {
    title: string,
    body: string,
    url: string
}

/**
 * Displays an article.
 */
export default function Article(props: ArticleProps) {
    return (
        <a href={props.url}>
            <article className="rounded-lg flex items-center cursor-pointer p-4 m-4">
                <img className="rounded-lg object-cover w-24 h-24"
                    src={octocat}
                    alt="Random image"/>
                <div className="p-6">
                    <h2 className="p-1 font-bold">{props.title}</h2>
                    <span>{props.body}</span>
                </div>
            </article>
        </a>
    )
}