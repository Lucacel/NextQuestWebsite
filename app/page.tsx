import { Terminal, Folder, ExternalLink } from "lucide-react"
import { TerminalInput } from "../components/terminal-input"
// Setup instructions commented out for now
// import { SetupInstructions } from "../components/setup-instructions"
// import { validateEnv } from "../lib/env"

export const metadata = {
  title: "Next Quest Studio",
  description: "Lucacel Razvan - Senior Full Stack Developer",
}

export default function CVPage() {
  // Email configuration check disabled for now
  // const isEmailConfigured = validateEnv()

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Setup Instructions - Commented out for now */}
      {/* {!isEmailConfigured && (
        <div className="bg-white p-4">
          <SetupInstructions />
        </div>
      )} */}

      <div className="p-4">
        <div className="max-w-5xl mx-auto">
          {/* Terminal Header */}
          <div className="bg-gray-900 border border-gray-700 rounded-t-lg">
            <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm">razvan@dev-machine: ~/cv</div>
              <Terminal className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Terminal Content */}
          <div className="bg-black border-l border-r border-b border-gray-700 rounded-b-lg p-6 space-y-4">
            {/* ASCII Art Header */}
            <div className="text-cyan-400 text-sm leading-tight mb-6">
              <pre>{`
╔═════════════════════════════════════════════════════════════════════════════════╗
║ ███▄    █ ▓█████ ▒██   ██▒▄▄▄█████▓    █████   █    ██ ▓█████   ██████ ▄▄▄█████▓║
║ ██ ▀█   █ ▓█   ▀ ▒▒ █ █ ▒░▓  ██▒ ▓▒  ▒██▓  ██▒ ██  ▓██▒▓█   ▀ ▒██    ▒ ▓  ██▒ ▓▒║
║▓██  ▀█ ██▒▒███   ░░  █   ░▒ ▓██░ ▒░  ▒██▒  ██░▓██  ▒██░▒███   ░ ▓██▄   ▒ ▓██░ ▒░║
║▓██▒  ▐▌██▒▒▓█  ▄  ░ █ █ ▒ ░ ▓██▓ ░   ░██  █▀ ░▓▓█  ░██░▒▓█  ▄   ▒   ██▒░ ▓██▓ ░ ║
║▒██░   ▓██░░▒████▒▒██▒ ▒██▒  ▒██▒ ░   ░▒███▒█▄ ▒▒█████▓ ░▒████▒▒██████▒▒  ▒██▒ ░ ║
║░ ▒░   ▒ ▒ ░░ ▒░ ░▒▒ ░ ░▓ ░  ▒ ░░     ░░ ▒▒░ ▒ ░▒▓▒ ▒ ▒ ░░ ▒░ ░▒ ▒▓▒ ▒ ░  ▒ ░░   ║
║░ ░░   ░ ▒░ ░ ░  ░░░   ░▒ ░    ░       ░ ▒░  ░ ░░▒░ ░ ░  ░ ░  ░░ ░▒  ░ ░    ░    ║
║   ░   ░ ░    ░    ░    ░    ░           ░   ░  ░░░ ░ ░    ░   ░  ░  ░    ░      ║
║         ░    ░  ░ ░    ░                  ░      ░        ░  ░      ░           ║
║                                                                                 ║
╚═════════════════════════════════════════════════════════════════════════════════╝`}</pre>
            </div>

            {/* Command Prompt Style Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-green-400">razvan@dev-machine</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="text-yellow-400">whoami</span>
              </div>
              <div className="ml-4 text-white">
                <div className="text-3xl font-bold mb-3">NEXT QUEST STUDIO</div>
                <div className="text-lg text-gray-300 mb-1">Lucacel Razvan</div>
                <div className="text-cyan-400 text-lg mb-4">Senior Full Stack Developer</div>
                <div className="text-gray-300 max-w-3xl">
                  # Versatile programmer with 7+ years of experience across various industries # Specialized in mobile
                  and web fullstack development # Adaptable professional delivering innovative solutions
                </div>
              </div>
            </div>

            {/* Contact Info Command */}
            <div className="space-y-2 mt-8">
              <div className="flex items-center gap-2">
                <span className="text-green-400">razvan@dev-machine</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="text-yellow-400">cat contact.info</span>
              </div>
              <div className="ml-4 bg-gray-900 p-4 rounded border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">EMAIL:</span>
                    <span className="text-white">razvanlucacel@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">PHONE:</span>
                    <span className="text-white">+40736505149</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">LOCATION:</span>
                    <span className="text-white">Cluj-Napoca, Romania</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">LINKEDIN:</span>
                    <a href="www.linkedin.com/in/lucacel-razvan-2819a1149" className="text-white">linkedin.com/in/lucacel-razvan-2819a1149</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Command */}
            <div className="space-y-2 mt-8">
              <div className="flex items-center gap-2">
                <span className="text-green-400">razvan@dev-machine</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="text-yellow-400">ls -la experience/</span>
              </div>
              <div className="ml-4 space-y-4">
                {/* Current Role */}
                <div className="bg-gray-900 p-4 rounded border border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-bold">drwxr-xr-x</span>
                    <span className="text-white">contractor_current/</span>
                    <span className="text-cyan-400 text-sm">[Apr 2024 - Present]</span>
                  </div>
                  <div className="ml-6 text-sm space-y-1">
                    <div className="text-yellow-400">## Senior Full Stack Developer - Contractor</div>
                    <div className="text-gray-300">
                      → Real estate CRM system implementation
                      <br />→ Stack: TypeScript, NestJS, Vue.js, MongoDB, Terraform
                      <br />→ Broke monolithic backend into microservices
                      <br />→ Built customizable workflow automation system
                      <br />→ Designed SendGrid email architecture with reputation management
                    </div>
                  </div>
                </div>

                {/* Machinations */}
                <div className="bg-gray-900 p-4 rounded border border-blue-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 font-bold">drwxr-xr-x</span>
                    <span className="text-white">machinations/</span>
                    <span className="text-cyan-400 text-sm">[Oct 2022 - Mar 2024]</span>
                  </div>
                  <div className="ml-6 text-sm space-y-1">
                    <div className="text-yellow-400">## Senior Full Stack Developer - Machinations</div>
                    <div className="text-gray-300">
                      → Live runnable diagrams for system prediction
                      <br />→ Stack: TypeScript, Python, SQL, Vue.js
                      <br />→ Refactored authorization system
                      <br />→ Migrated community website to Nuxt.js
                    </div>
                  </div>
                </div>

                {/* WIN.APP */}
                <div className="bg-gray-900 p-4 rounded border border-purple-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400 font-bold">drwxr-xr-x</span>
                    <span className="text-white">winapp/</span>
                    <span className="text-cyan-400 text-sm">[Feb 2022 - Sep 2022]</span>
                  </div>
                  <div className="ml-6 text-sm space-y-1">
                    <div className="text-yellow-400">## Mobile Software Engineer - WIN.APP</div>
                    <div className="text-gray-300">
                      → React Native with native Android/iOS integration
                      <br />→ Unity integration for gaming features
                      <br />→ GraphQL backend implementation
                      <br />→ Cryptocurrency sector experience
                    </div>
                  </div>
                </div>

                {/* Tapptitude */}
                <div className="bg-gray-900 p-4 rounded border border-orange-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder className="w-4 h-4 text-orange-400" />
                    <span className="text-orange-400 font-bold">drwxr-xr-x</span>
                    <span className="text-white">tapptitude/</span>
                    <span className="text-cyan-400 text-sm">[Jun 2019 - Feb 2022]</span>
                  </div>
                  <div className="ml-6 text-sm space-y-1">
                    <div className="text-yellow-400">## Software Engineer - Tapptitude</div>
                    <div className="text-gray-300">
                      → Evolved from junior to seasoned professional
                      <br />→ Native mobile apps (Android/iOS) + React Native
                      <br />→ Frontend development with Vue.js and React.js
                      <br />→ Cross-platform solutions implementation
                    </div>
                  </div>
                </div>

                {/* Altran */}
                <div className="bg-gray-900 p-4 rounded border border-red-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 font-bold">drwxr-xr-x</span>
                    <span className="text-white">altran/</span>
                    <span className="text-cyan-400 text-sm">[Oct 2017 - Jun 2019]</span>
                  </div>
                  <div className="ml-6 text-sm space-y-1">
                    <div className="text-yellow-400">## Software Engineer - Altran</div>
                    <div className="text-gray-300">
                      → TWINSCAN machine software development
                      <br />→ Full SDLC: design, implementation, testing, documentation
                      <br />→ Stack: C, C++
                      <br />→ Task estimation and project management
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Projects Command */}
            <div className="space-y-2 mt-8">
              <div className="flex items-center gap-2">
                <span className="text-green-400">razvan@dev-machine</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="text-yellow-400">find ~/projects -name "*.live" -exec cat {"{}"} \;</span>
              </div>
              <div className="ml-4 space-y-4">
                {/* Blessed Tea Blends Project */}
                <div className="bg-gray-900 p-4 rounded border border-amber-500">
                  <div className="flex items-center gap-2 mb-3">
                    <Folder className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400 font-bold">-rw-r--r--</span>
                    <span className="text-white">blessed-tea-blends.live</span>
                    <a
                      href="https://www.blessedteablends.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="ml-6 text-sm space-y-3">
                    <div className="text-yellow-400">## Blessed Tea Blends - E-commerce Frontend</div>
                    <div className="text-gray-300">
                      → Frontend-only product for tea sellers
                      <br />→ Cost-optimized architecture using free/low-cost resources
                      <br />→ Domain name as the only operational expense
                      <br />→ Focus on user experience and aesthetic design
                      <br />→ URL: <span className="text-cyan-400">https://www.blessedteablends.com/</span>
                    </div>

                    {/* Project Screenshot */}
                    <div className="mt-3 p-2 bg-black rounded border border-gray-600">
                      <div className="text-xs text-gray-400 mb-2">
                        $ curl -s https://www.blessedteablends.com/ | screenshot
                      </div>
                      <img
                        src="/blessed-tea-blends.jpg"
                        alt="Blessed Tea Blends Website Screenshot"
                        className="w-full max-w-md rounded border border-gray-600"
                      />
                    </div>

                    <div className="text-xs text-gray-400">
                      <span className="text-green-400">TECH_STACK:</span> Frontend-focused, Cost-optimized deployment
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Command */}
            <div className="space-y-2 mt-8">
              <div className="flex items-center gap-2">
                <span className="text-green-400">razvan@dev-machine</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="text-yellow-400">cat skills.json | jq</span>
              </div>
              <div className="ml-4 bg-gray-900 p-4 rounded border border-gray-700">
                <div className="text-sm space-y-4">
                  <div>
                    <div className="text-cyan-400 mb-2">"technical_skills": [</div>
                    <div className="ml-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                      {[
                        "TypeScript",
                        "NestJS",
                        "Vue.js",
                        "React.js",
                        "React Native",
                        "MongoDB",
                        "Terraform",
                        "SQL",
                        "Jest",
                        "CI/CD",
                        "Android",
                        "iOS",
                        "Python",
                        "C",
                        "C++",
                      ].map((skill) => (
                        <div key={skill} className="text-green-300">
                          "{skill}",
                        </div>
                      ))}
                    </div>
                    <div className="text-cyan-400">],</div>
                  </div>

                  <div>
                    <div className="text-cyan-400 mb-2">"practical_skills": [</div>
                    <div className="ml-4 space-y-1">
                      {[
                        "CRM System Implementation",
                        "Feature Development",
                        "Authorization Systems",
                        "Migrations",
                        "Documentation",
                        "Testing",
                        "Client Interaction",
                      ].map((skill) => (
                        <div key={skill} className="text-yellow-300">
                          "{skill}",
                        </div>
                      ))}
                    </div>
                    <div className="text-cyan-400">]</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Command */}
            <div className="space-y-2 mt-8">
              <div className="flex items-center gap-2">
                <span className="text-green-400">razvan@dev-machine</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="text-yellow-400">grep -r "education" ~/credentials/</span>
              </div>
              <div className="ml-4 space-y-2">
                <div className="bg-gray-900 p-3 rounded border border-gray-700">
                  <div className="text-sm">
                    <span className="text-green-400">~/credentials/masters.txt:</span>
                    <span className="text-white"> Master's in Science Technology and Innovation</span>
                  </div>
                  <div className="text-xs text-gray-400 ml-4">Babes-Bolyai University | 2018-2020</div>
                </div>
                <div className="bg-gray-900 p-3 rounded border border-gray-700">
                  <div className="text-sm">
                    <span className="text-green-400">~/credentials/bachelor.txt:</span>
                    <span className="text-white"> Bachelor's in Computer Science</span>
                  </div>
                  <div className="text-xs text-gray-400 ml-4">Babes-Bolyai University | 2015-2018</div>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Prompt */}
            {/* <div className="mt-8 pt-4 border-t border-gray-700">
              <TerminalInput /> 
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  )
}
