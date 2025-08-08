import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-blue-100 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                GenAI Fintech
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#program" className="text-gray-600 hover:text-cyan-600 transition-colors">Program</a>
              <a href="#curriculum" className="text-gray-600 hover:text-cyan-600 transition-colors">Curriculum</a>
              <a href="#instructors" className="text-gray-600 hover:text-cyan-600 transition-colors">Instructors</a>
              <a href="#contact" className="text-gray-600 hover:text-cyan-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-cyan-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <Badge className="bg-transparent text-cyan-700 border-cyan-200 hover:bg-cyan-100">
                Fintech Training Program
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-gray-900">Gen AI Full Stack</span>
              <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Fintech Development
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Transform into a <span className="text-cyan-600 font-semibold">10x-20x developer</span> with cutting-edge AI-assisted fintech development techniques
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Build secure, scalable, and innovative financial solutions with unprecedented speed and efficiency
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg px-10 py-4 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all duration-300 transform hover:scale-105">
                APPLY NOW
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-50 text-lg px-10 py-4 rounded-full transition-all duration-300 hover:border-cyan-400">
                Download Brochure
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>16-Week Intensive Program</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>IIT Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>94% Placement Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <Badge className="bg-transparent text-blue-700 border-blue-200">
                Revolutionary Approach
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Transform Your Development Career
            </h2>
            
            <div className="text-lg text-gray-600 leading-relaxed mb-8 space-y-6">
              <p>
                Forget everything you know about traditional coding bootcamps. The Gen AI Full Stack Fintech Development program is a groundbreaking approach to technology education, built from the ground up for the AI-driven future of financial software.
              </p>
              <blockquote className="border-l-4 border-cyan-500 pl-6 text-left max-w-3xl mx-auto italic text-gray-700">
                "Our mission is to create <span className="text-cyan-600 font-semibold">10x-20x developers</span> who can harness the power of AI to build the next generation of financial technology solutions that are secure, scalable, and innovative."
                <footer className="mt-2 text-sm text-gray-500 not-italic">— Kumar Kushal, Founder</footer>
              </blockquote>
              <p>
                We'll show you how to leverage AI tools to dramatically increase your productivity, allowing you to create sophisticated financial applications in a fraction of the time. By combining hands-on fintech projects with an AI-assisted learning approach, you'll gain a unique educational experience that prepares you for the rapidly evolving landscape of financial technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <Badge className="bg-transparent text-white border-white">
                Core Pillars
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our program is built on four core pillars that will give you a significant edge in the industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "AI-powered Applications",
                description: "Master building sophisticated solutions that leverage generative AI and LLMs to solve complex financial problems.",
                icon: "🤖",
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                title: "AI Coding Assistants",
                description: "Supercharge your workflow using cutting-edge tools like GitHub Copilot and Claude to boost productivity.",
                icon: "⚡",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Real-world Fintech Projects",
                description: "Build a professional portfolio of digital banking, payment systems, and financial analytics applications.",
                icon: "💼",
                gradient: "from-cyan-600 to-blue-600"
              },
              {
                title: "10x-20x Productivity",
                description: "Acquire workflows and techniques that set you apart and achieve unprecedented development efficiency.",
                icon: "🚀",
                gradient: "from-blue-600 to-cyan-600"
              }
            ].map((highlight, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white shadow-lg hover:shadow-cyan-500/10">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {highlight.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Curriculum */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <Badge className="bg-transparent text-white border-white">
                16-Week Intensive Program
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured to progressively build your skills from AI fundamentals to advanced fintech applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  title: "Module 1: AI-Assisted Development Fundamentals",
                  description: "Solid foundation in using AI to enhance your work. Learn AI coding assistants, prompt engineering principles, and set up your AI-enhanced development environment with crucial ethical considerations."
                },
                {
                  title: "Module 2: Full Stack Fintech Foundations",
                  description: "Core components of building full-stack fintech applications. Modern architecture patterns, secure API development, regulatory compliance, and payment processing essentials."
                }
              ].map((module, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-3 top-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="ml-8">
                    <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 rounded-full px-3 py-1 mb-3">
                      <span className="text-xs font-semibold text-cyan-700">MODULE {index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Module 3: Advanced AI Integration",
                  description: "Integrate AI directly into your applications. Implement LLMs for financial apps, create powerful analytics and insights, build personalization systems, and explore AI for fraud detection."
                },
                {
                  title: "Module 4: Capstone Project",
                  description: "Build a complete end-to-end fintech application. Integrate with financial APIs, focus on performance optimization and scaling, master deployment and DevOps best practices."
                }
              ].map((module, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-3 top-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="ml-8">
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-3">
                      <span className="text-xs font-semibold text-blue-700">MODULE {index + 3}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <p className="text-cyan-700 font-medium">
                Our learning approach combines Live Coding Sessions, Project-Based Learning, Peer Collaboration, and Industry Feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <Badge className="bg-transparent text-white border-white">
                Strategic Investment
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enrolling in our program is a strategic investment in your future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Career Acceleration",
                description: "Position yourself as a leader in AI-driven development and command premium salaries in the fintech industry.",
                icon: "🚀",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Industry-Relevant Skills",
                description: "Get exactly what employers are looking for, with a curriculum designed by veterans from leading financial institutions.",
                icon: "💼",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Hands-on Experience",
                description: "Build a portfolio of real-world projects that demonstrate your ability to solve complex financial technology challenges.",
                icon: "🛠️",
                color: "from-cyan-600 to-blue-600"
              },
              {
                title: "Networking Opportunities",
                description: "Connect with industry leaders, potential employers, and a community of like-minded professionals in the fintech ecosystem.",
                icon: "🌐",
                color: "from-blue-600 to-cyan-600"
              }
            ].map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white shadow-lg hover:shadow-cyan-500/10">
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 leading-relaxed text-center">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <Badge className="bg-transparent text-white border-white">
                Proven Results
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Career Outcomes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our results speak for themselves
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "94%", label: "of students secure a new role within 3 months of graduation", color: "from-cyan-500 to-blue-500" },
              { value: "45%", label: "average salary increase for graduates", color: "from-blue-500 to-cyan-500" },
              { value: "100+", label: "hiring partner companies in the fintech ecosystem", color: "from-cyan-600 to-blue-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${stat.color} text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Team */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <Badge className="bg-transparent text-white border-white">
                World-Class Team
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              World-Class Instructor Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from the best - IIT graduates with extensive Silicon Valley experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Dr. Madhukar Rao",
                role: "AI & Machine Learning Expert",
                background: "Ph.D. from IIT Madras",
                icon: "🎓",
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                name: "Priya Mehta",
                role: "Fintech Architecture Specialist",
                background: "M.Tech from IIT Bombay, 12+ years experience",
                icon: "🏗️",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                name: "Abhishek Srivastava",
                role: "Industrial Applications Expert",
                background: "IIT BHU graduate",
                icon: "⚙️",
                gradient: "from-cyan-600 to-blue-600"
              },
              {
                name: "Goutam Gupta",
                role: "Chief Architect",
                background: "IIT Kharagpur graduate",
                icon: "🏛️",
                gradient: "from-blue-600 to-cyan-600"
              }
            ].map((instructor, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white shadow-lg hover:shadow-cyan-500/10">
                <CardHeader className="text-center pb-6">
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${instructor.gradient} flex items-center justify-center text-white text-4xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {instructor.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {instructor.name}
                  </CardTitle>
                  <CardDescription className="text-cyan-600 font-medium">
                    {instructor.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <p className="text-sm text-gray-600">
                    {instructor.background}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Designer */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <Badge className="bg-transparent text-white border-white">
                  Visionary Leadership
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About the Course Designer
              </h2>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200 rounded-full px-6 py-3 mb-8">
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Kumar Kushal: A Visionary in AI and Fintech
                </h3>
              </div>
              
              <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-8">
                  <p>
                    Kumar Kushal is a dynamic technology executive and entrepreneur with over two decades of comprehensive experience in AI-driven innovation. His career is a testament to his ability to lead transformative change, having served as the former CTO of Reliance Industries Limited, a Fortune 100 company, where he reshaped India's technology landscape with groundbreaking digital initiatives.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8">
                  <p>
                    A true visionary in the fintech sector, Kumar founded and scaled successful platforms like Reliance Payment Bank and JioMoney.com, connecting over 450 million consumers and 5 million merchants in just three years. His entrepreneurial spirit also led to the creation of popular e-commerce marketplaces like jiomart.com and ajio.com, demonstrating his expertise in building and scaling digital platforms that serve millions.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-8">
                  <p>
                    With a deep technical background—holding an M.S. in Robotics with an AI focus from West Virginia University and a B.Tech. in Aerospace Engineering from IIT Madras—Kumar possesses a unique blend of technical expertise and strategic business acumen. He has a proven track record of managing multimillion-dollar technology budgets and successfully delivering digital transformations and scalable SaaS/PaaS platforms across diverse industries.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8">
                  <p>
                    Currently, as the Founder and CEO of CognitiveMind.AI, Kumar is passionately committed to his mission of transforming global education. He is pioneering personalized, generative AI-based learning solutions that empower both learners and educators to thrive in the digital age. His vast experience across AI, machine learning, and digital banking makes him the ideal architect of a program designed to empower the next generation of fintech developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-cyan-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold">GenAI Fintech</span>
            </div>
            
            <p className="text-cyan-200 mb-8 max-w-2xl mx-auto">
              Transform into a 10x-20x developer with cutting-edge AI-assisted fintech development techniques
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                APPLY NOW
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-8 py-3 rounded-full transition-all duration-300">
                Download Brochure
              </Button>
            </div>
            
            <div className="w-full h-px bg-white/20 mb-8"></div>
            
            <p className="text-cyan-300 text-sm">
              © 2024 GenAI Fintech Development Program. All rights reserved. | Empowering the next generation of fintech developers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}