import { useState } from 'react'
import { Tag, Divider, Image } from 'antd'
import {
  MailOutlined,
  LinkedinOutlined,
  PhoneOutlined,
  GithubOutlined,
  CodeOutlined,
  BulbOutlined,
  TrophyOutlined,
  // ProjectOutlined,
  UserOutlined,
  BookOutlined,
} from '@ant-design/icons'
import { en, th, type Lang } from '../locales'
import certPostman from '../assets/certificates_postman.jpg'
import certBasicQA from '../assets/certificates_basic_qa.jpg'
import certToolsTest from '../assets/certificates_tools_test.jpg'
import certTestCase from '../assets/certificates_testcase.jpg'
import certTechnology from '../assets/certificates_technology.jpg'
import certRobot from '../assets/certificates_robot.jpg'
import certManual from '../assets/certificates_manual_test.jpg'

const locales = { en, th }

const skills = [
  'React', 'Next.js', 'JavaScript', 'TypeScript',
  'Tailwind CSS', 'Postman', 'API Testing', 'PostgreSQL',
  'Git', 'ClickUp', 'Trello',
]

const certificates = [
  {
    title: 'QA Career & AI Tools Certificate',
    image: certTechnology
  },
  {
    title: 'QA Fundamentals Certificate',
    image: certBasicQA
  },
  {
    title: 'Manual Testing Certificate',
    image: certToolsTest
  },
  {
    title: 'Manual Testing Practice Certificate',
    image: certManual
  },
  {
    title: 'Test Case Design Certificate',
    image: certTestCase
  },
  {
    title: 'API Test Automation with Postman Certificate',
    image: certPostman
  },
  {
    title: 'Web UI Automation with Robot Framework Certificate',
    image: certRobot
  },
]

interface SectionProps {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}

function Section({ icon, title, children }: SectionProps) {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sky-400 text-lg">{icon}</span>
        <h2 className="text-lg font-semibold text-slate-100 tracking-wide uppercase">{title}</h2>
      </div>
      <Divider className="mt-0! mb-5! border-slate-700!" />
      {children}
    </section>
  )
}

export default function Resume() {
  const [lang, setLang] = useState<Lang>('en')
  const t = locales[lang]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 py-10 px-4 font-anuphan">
      <div className="max-w-4xl mx-auto">

        {/* Language Toggle */}
        <div className="flex justify-end mb-4">
          <div className="flex bg-slate-800 border border-slate-700 rounded-lg overflow-hidden text-sm font-medium">
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 transition-colors ${lang === 'en' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('th')}
              className={`px-4 py-2 transition-colors ${lang === 'th' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              TH
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="text-center mb-12 bg-slate-800 rounded-2xl p-10 shadow-lg border border-slate-700">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sky-500/20 border-2 border-sky-400 mb-4">
            <UserOutlined className="text-sky-400 text-3xl" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Pitchaporn Chottitammasuk</h1>
          <p className="text-sky-400 font-medium mb-4">{t.role}</p>
          <div className="flex justify-center flex-wrap gap-4 text-slate-400 text-sm">
            <a href="tel:0956975693" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
              <PhoneOutlined /> 095-697-5693
            </a>
            <a href="mailto:pitchaporn.cho@gmail.com" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
              <MailOutlined /> pitchaporn.cho@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/pitchaporn-chottitammasuk-104277295" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
              <LinkedinOutlined /> LinkedIn Profile
            </a>
            <a href="https://github.com/Pployy09" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
              <GithubOutlined /> GitHub
            </a>
          </div>
        </header>

        {/* About */}
        <Section icon={<UserOutlined />} title={t.sections.about}>
          {t.about.map((para, i) => (
            <p key={i} className={`text-slate-300 leading-relaxed ${i > 0 ? 'mt-3' : ''}`}>{para}</p>
          ))}
        </Section>

        {/* Education */}
        <Section icon={<BookOutlined />} title={t.sections.education}>
          <div className="space-y-4">
            {t.education.map((edu) => (
              <div key={edu.university} className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-sky-500/50 transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-white font-semibold">{edu.degree}</h3>
                    <p className="text-sky-400 text-sm">{edu.faculty}</p>
                    <p className="text-slate-400 text-sm">{edu.university}</p>
                  </div>
                  <Tag color="blue" className="text-xs">{edu.period}</Tag>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section icon={<CodeOutlined />} title={t.sections.experience}>
          <div className="space-y-6">
            {t.experiences.map((exp) => (
              <div key={exp.title} className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-sky-500/50 transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-white font-semibold">{exp.title}</h3>
                    <p className="text-sky-400 text-sm">{exp.company}</p>
                  </div>
                  <Tag color="blue" className="text-xs">{exp.period}</Tag>
                </div>
                <p className="text-slate-400 text-sm mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section icon={<BulbOutlined />} title={t.sections.skills}>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="bg-slate-800 border border-slate-600 hover:border-sky-400 hover:text-sky-400 text-slate-300 text-sm px-4 py-1.5 rounded-full transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </Section>

        {/* Projects */}
        {/* <Section icon={<ProjectOutlined />} title={t.sections.projects}>
          <div className="space-y-4">
            {t.projects.map((proj) => (
              <div key={proj.title} className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-sky-500/50 transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <h3 className="text-white font-semibold">{proj.title}</h3>
                  <div className="flex gap-2">
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noreferrer">
                        <Tag color="cyan" className="cursor-pointer">Demo</Tag>
                      </a>
                    )}
                    {proj.repo && (
                      <a href={proj.repo} target="_blank" rel="noreferrer">
                        <Tag color="default" className="cursor-pointer"><GithubOutlined /> Repo</Tag>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-3">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((tech) => (
                    <span key={tech} className="bg-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section> */}

        {/* Certificates */}
        <Section icon={<TrophyOutlined />} title={t.sections.certificates}>
          <Image.PreviewGroup>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {certificates.map((cert) => (
                <div key={cert.title} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-900/30 transition-all duration-300 cursor-pointer">
                  <div className="w-full h-48 bg-white overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-contain"
                      preview={{ mask: t.preview }}
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-white text-sm font-semibold text-center group-hover:text-sky-400 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </Image.PreviewGroup>
        </Section>

        {/* Footer */}
        <footer className="text-center text-slate-500 text-sm mt-6">
          © 2026 Pitchaporn Chottitammasuk
        </footer>

      </div>
    </div>
  )
}
