'use client'

import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Movies from './pages/Movies'
import News from './pages/News'

export default function Page() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  )
}
