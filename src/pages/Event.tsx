import { Header } from '../components/header/Header'
import { Sidebar } from '../components/sidebar/Sidebar'
import { Video } from '../components/video/Video'

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  )
}
