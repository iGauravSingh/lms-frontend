// src/components/ClientDashboard.tsx
import { type FC } from 'react'

interface ClientDashboardProps {
  // later you can pass these in as props or fetch from your API
}

const ClientDashboard: FC<ClientDashboardProps> = () => {
  const progress = 40
  const steps = ['Test 1', 'Test 2', 'Test 3', 'Test 4']
  const currentStep = 1 // zero-based index

  const course = {
    title: 'RIMI Insurance Video 1',
    description:
      'Discover the essentials of Rimi Health Insurance with our in-depth courses tailored to empower your understanding of health coverage. Explore various topics, from policy details to claims processes, and equip yourself with the knowledge to make informed decisions about your health. Join us on this enlightening journey where health education meets practical insights.',
    duration: '2hr 20min',
    questions: 40,
    imageUrl: 'https://placehold.co/180x180',
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-72 bg-neutral-100 p-6">
        <img
          src="/logo.svg"
          alt="RIMI logo"
          className="w-24 h-11 mb-8 object-contain"
        />
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center space-x-2 text-indigo-600 font-medium"
          >
            <span className="text-xl">🏠</span>
            <span>Home</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-500 hover:text-gray-700"
          >
            <span className="text-xl">📄</span>
            <span>Certificates</span>
          </a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-900">All Courses</h1>

        {/* Tabs */}
        <div className="mt-4 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button className="pb-2 border-b-2 border-indigo-600 text-indigo-600 font-medium">
              Health Insurance
            </button>
            <button className="pb-2 text-gray-500">Life Insurance</button>
            <button className="pb-2 text-gray-500">Vehicle Insurance</button>
          </nav>
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex items-center text-sm text-gray-500">
            <span>Progress:</span>
            <span className="ml-1 font-semibold text-gray-900">{progress}%</span>
          </div>
          <div className="relative mt-2 h-1 bg-gray-300 rounded-full">
            <div
              className="absolute top-0 left-0 h-1 bg-indigo-600 rounded-full"
              style={{ width: `${progress}%` }}
            />
            {/* step circles */}
            <div className="absolute inset-0 flex justify-between items-center">
              {steps.map((_, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center ${
                      idx <= currentStep
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-300 text-gray-500'
                    }`}
                  >
                    📄
                  </div>
                  <span className="mt-1 text-xs text-gray-900">{steps[idx]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Card */}
        <div className="mt-8 relative bg-blue-200 rounded-sm overflow-hidden h-56">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="absolute inset-0 m-auto h-40 w-40 mix-blend-multiply"
          />
          <div className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 inline-flex items-center space-x-2 text-xs text-gray-500">
            <span>🕒 {course.duration}</span>
            <span>📄 {course.questions} Questions</span>
          </div>
        </div>

        {/* Course Info */}
        <h2 className="mt-6 text-lg font-semibold text-gray-900">{course.title}</h2>
        <p className="mt-2 text-gray-600">{course.description}</p>

        {/* Continue Button */}
        <button className="mt-6 px-8 py-4 bg-indigo-600 text-white font-medium rounded-sm">
          Continue to Watch
        </button>
      </main>
    </div>
  )
}

export default ClientDashboard
