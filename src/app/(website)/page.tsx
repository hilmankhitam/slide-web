import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, ThumbsUp, Zap, BarChart, CheckIcon, Settings, ShieldCheck, Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Slide</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#benefits">
            Benefits
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            <Link href="/dashboard">Log In</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Automate Your Instagram Engagement
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Slide is a conversational marketing automation platform that helps businesses effortlessly engage
                  their audience on Instagram.
                </p>
              </div>
              <div className="space-y-4 sm:space-x-4 sm:space-y-0">
                <Button className="w-full sm:w-auto">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Features preview"
                className="mx-auto w-full max-w-[550px] aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Powerful Features for Instagram Automation
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Slide offers a comprehensive set of tools to streamline your Instagram marketing and boost
                    engagement.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span className="font-medium">Automated DM Responses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span className="font-medium">Comment Automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span className="font-medium">AI-Powered Interactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span className="font-medium">Analytics Dashboard</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Comprehensive Feature List
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <MessageCircle className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Automated DM Responses</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Set up keyword triggers and automatically respond to DMs with AI-driven or custom messages, ensuring
                  timely engagement with your audience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <ThumbsUp className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Comment Automation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Automatically like and reply to comments on your posts, increasing engagement and fostering community
                  interaction.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Zap className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">AI-Powered Interactions</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Leverage advanced AI to generate contextually relevant responses, maintaining a natural conversation
                  flow with your followers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <BarChart className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Track key metrics, engagement rates, and conversion data in real-time with our comprehensive analytics
                  dashboard.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Settings className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Customizable Workflows</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create and customize automation workflows to match your specific marketing strategies and campaign
                  needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <ShieldCheck className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Compliance & Security</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Stay compliant with Instagram's policies and protect your account with our built-in safety features
                  and best practices.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6 md:grid-cols-2">
                  <li className="flex items-center space-x-2">
                    <BarChart className="w-4 h-4" />
                    <span>Set up keyword triggers for DMs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BarChart className="w-4 h-4" />
                    <span>Create AI-driven or default responses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BarChart className="w-4 h-4" />
                    <span>Configure comment automation rules</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BarChart className="w-4 h-4" />
                    <span>Monitor and analyze engagement metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Benefits</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Save Time</CardTitle>
                </CardHeader>
                <CardContent>Automate repetitive tasks and focus on creating great content.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Increase Engagement</CardTitle>
                </CardHeader>
                <CardContent>Respond quickly and consistently to boost audience interaction.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Generate Leads</CardTitle>
                </CardHeader>
                <CardContent>Turn Instagram interactions into valuable business opportunities.</CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Amazing Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Slide has revolutionized our Instagram marketing. We've seen a 300% increase in engagement since
                    using their platform."
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director, TechCorp</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Time-Saving Tool</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "The automation features have saved us countless hours. We can now focus on creating great content
                    while Slide handles the engagement."
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold">Mike Chen</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Social Media Manager, FashionBrand</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Boosted Conversions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Our lead generation has improved significantly. Slide's automated responses have helped us convert
                    Instagram followers into customers."
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CEO, StartupX</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Choose Your Plan</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>Try Slide risk-free</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$0</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">forever</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>100 automated responses</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>1 Instagram account</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Sign Up</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$29</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>500 automated responses</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>1 Instagram account</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Ideal for growing brands</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$79</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>Unlimited automated responses</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>3 Instagram accounts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>AI-powered responses</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large-scale operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Custom</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">contact for pricing</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>Unlimited everything</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Streamline Your Instagram Marketing?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Start automating your Instagram interactions and turn engagement into opportunity with Slide.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started Now</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Slide. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

