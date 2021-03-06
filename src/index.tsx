import * as React from 'react';
import { useState, useEffect, useMemo } from 'react'
import * as ReactDOM from 'react-dom'
import { useContext } from 'react'
import './styles.css'
import Article from './view/Article';
import { TextRepository, SupportedLanguage } from './data/TextRepository';
import TechStack from './view/TechStack';
import Header from './view/Header';
import GithubAPI from './data/GithubAPI';
import {Mk2ConsoleViewer} from 'mk2console'

const languages = {
    english: SupportedLanguage.ENGLISH,
    spanish: SupportedLanguage.SPANISH,
    japanese: SupportedLanguage.JAPANESE
}

interface Article {
    title: string,
    body: string,
    url: string
}

export const LanguageContext = React.createContext(languages.english);

/**
 * This website's React entrypoint.
 */
export default function App() {
    // context object for supported language,
    const language = useContext(LanguageContext);

    // text repo
    const textRepository = useMemo(() => TextRepository.getInstance(), [])

    // welcome text
    const welcomeDescription = useMemo(() => textRepository.getWelcomeDescription(language),
    [textRepository,language])

    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        const githubAPI = new GithubAPI()
        githubAPI.getRepositories('Pfuster12')
            .then(res => {
                const filterRegex = /BoilerCycle|android-yabu|BouncyEnter|code-link|pablo-website|http-relayer|safe.ly|react-ts-skeleton|YabuJava|mk2Console|tenstep-es/
                const filteredRepos = res.filter(repo => repo.name.match(filterRegex))
                const articles = filteredRepos.map(repo => {
                    return {title: repo.name, body: repo.description, url: repo.html_url }
                })
                setArticles(articles)
            })
            .catch(err => {})
    },
    [])

    return (
        <LanguageContext.Provider value={languages.english}>
            <main className="flex flex-col">
                <Header/>
                <span className="p-4">{welcomeDescription}</span>
                <TechStack/>
                <span className="p-4">Check out some of the projects I am working on.</span>
                <section className="article-list">
                    {
                        articles.map(article => <Article key={article.url} title={article.title} body={article.body} url={article.url}/>)
                    }
                </section>
                <Mk2ConsoleViewer/>
            </main>
        </LanguageContext.Provider>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))