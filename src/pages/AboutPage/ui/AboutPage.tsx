import { useTranslation } from 'react-i18next'

const AboutPage = () => {
	const { t } = useTranslation('about')
	return <div>{t('О сайте32e32')}</div>
}

export default AboutPage
