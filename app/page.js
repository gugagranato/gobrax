import Header from './components/Header'
import FormSection from './components/FormSection'
import ContentSection from './components/ContentSection'
import FooterSection from './components/FooterSection'

export default function Home() {
  return (
      <main className="flex bg-stone-50 min-h-screen flex-col">
        <Header />
        <FormSection />
        <ContentSection />
        <FooterSection />
      </main>
  )
}