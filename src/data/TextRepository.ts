export enum SupportedLanguage {
    ENGLISH,
    SPANISH,
    JAPANESE
}

/**
 * Handles the data source of text in this app.
 */
export class TextRepository {
    private static instance: TextRepository;
    constructor() { }

    public static getInstance(): TextRepository {
        if (!TextRepository.instance) {
            TextRepository.instance = new TextRepository();
        }

        return TextRepository.instance;
    }

    /**
     * Get the welcome description text.
     * @param language 
     */
    getWelcomeDescription(language: SupportedLanguage): string {
        switch(language) {
            case SupportedLanguage.ENGLISH:
                return 'Android Kotlin, React, Typescript + Electron developer.'
            case SupportedLanguage.SPANISH:
                return 'Desarrollador de Android Kotlin, React, Typescript + Electron.'
            case SupportedLanguage.JAPANESE:
                return 'アンドロイド コトリン、 レアクト、 タイプスクリプト + エレクツロン ソフトウェア開発者.'
            default:
                return 'Android Kotlin, React, Typescript + Electron developer.'
        }
    }
}