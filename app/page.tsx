import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Cpu, Globe, Shield } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">HexGlyph</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#solutions" className="text-sm font-medium hover:text-primary">
              Solutions
            </Link>
            <Link href="#use-cases" className="text-sm font-medium hover:text-primary">
              Use Cases
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Transforming Government with <span className="text-primary">AI</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300">
                  Intelligent solutions for Smart Cities and e-Government platforms that drive efficiency, transparency,
                  and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2">
                    Request Demo <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/cybernetic-skyline.png"
                  alt="Smart City Visualization"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-10"></div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Solutions</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Cutting-edge AI technologies designed specifically for government and urban infrastructure needs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Urban Planning</h3>
                <p className="text-slate-600">
                  AI-powered analytics for optimal urban development, traffic management, and resource allocation.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">e-Government Platforms</h3>
                <p className="text-slate-600">
                  Streamlined digital services for citizens with AI assistants, automated workflows, and secure
                  transactions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Public Safety & Security</h3>
                <p className="text-slate-600">
                  Intelligent monitoring systems and predictive analytics to enhance public safety and emergency
                  response.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-World Impact</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                See how our AI solutions are transforming government operations and urban environments.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                  <Image
                    src="/intelligent-traffic-flow.png"
                    alt="Traffic Management"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Traffic Optimization</h3>
                  <p className="text-slate-600 mb-4">
                    Reduced congestion by 30% in metropolitan areas through AI-powered traffic light synchronization and
                    real-time route optimization.
                  </p>
                  <Button variant="link" className="p-0 h-auto gap-1">
                    Read case study <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                  <Image
                    src="/digital-gov-portal.png"
                    alt="Digital Services"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Citizen Services Portal</h3>
                  <p className="text-slate-600 mb-4">
                    Streamlined 50+ government services into a single AI-powered platform, reducing processing time by
                    75% and improving citizen satisfaction.
                  </p>
                  <Button variant="link" className="p-0 h-auto gap-1">
                    Read case study <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-primary-foreground/80">Cities Powered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50M+</div>
                <div className="text-primary-foreground/80">Citizens Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-primary-foreground/80">Cost Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-primary-foreground/80">Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About HexGlyph</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Founded by a team of AI experts and former government officials, HexGlyph is dedicated to bridging the
                  gap between cutting-edge AI technology and public sector needs.
                </p>
                <p className="text-lg text-slate-600 mb-6">
                  Our mission is to create more efficient, transparent, and responsive government systems through
                  thoughtful application of artificial intelligence.
                </p>
                <Button variant="outline" className="gap-2">
                  Our Team <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image src="/ai-team-collaboration.png" alt="HexGlyph Team" fill className="object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-slate-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Government Services?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Schedule a consultation with our experts to discover how our AI solutions can address your specific
                needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-100">
                  Schedule Demo <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-slate-950 text-slate-400">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold text-white">HexGlyph</span>
              </div>
              <p className="text-sm">Transforming government with intelligent AI solutions.</p>
            </div>
            <div>
              <h3 className="font-medium text-white mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Smart Urban Planning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    e-Government Platforms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Public Safety
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Data Analytics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-6 text-sm text-center">
            © {new Date().getFullYear()} HexGlyph. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
