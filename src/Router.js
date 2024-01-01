import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/chemin'>
                        <HomePage />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
