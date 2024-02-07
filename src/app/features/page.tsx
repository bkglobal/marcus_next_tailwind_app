
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function FeaturesPage() {

    return (
        <div className="bg-white">
            {/* Header */}
            <Header />

            {/* Pricing section */}
            <Features />

            {/* Footer */}
            <Footer />
        </div>
    )
}
