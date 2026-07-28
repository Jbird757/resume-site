import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import Projects from '../pages/Projects';

describe('Pages and Routing Integration Tests', () => {
  describe('RootLayout Component', () => {
    it('renders navigation bar links and footer', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByText(/Meet Me/i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
      expect(screen.getAllByRole('link', { name: /Resume/i }).length).toBeGreaterThan(0);
      expect(screen.getAllByRole('link', { name: /Projects/i }).length).toBeGreaterThan(0);
      expect(screen.getByText(/Copyright © Jay Lowry/i)).toBeInTheDocument();
    });
  });

  describe('Home Page', () => {
    it('renders Header and About sections', () => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
      expect(screen.getByRole('heading', { name: /Bringing innovation to everyone/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
    });
  });

  describe('Resume Page', () => {
    it('renders ResumeContents and ViewResume button', () => {
      render(
        <MemoryRouter>
          <Resume />
        </MemoryRouter>
      );
      expect(screen.getAllByRole('heading', { name: /Resume/i })[0]).toBeInTheDocument();
      expect(screen.getByText(/Download Resume/i)).toBeInTheDocument();
    });
  });

  describe('Projects Page', () => {
    it('renders ProjectContents section', () => {
      render(
        <MemoryRouter>
          <Projects />
        </MemoryRouter>
      );
      expect(screen.getAllByRole('heading', { name: /Projects/i })[0]).toBeInTheDocument();
    });
  });
});
